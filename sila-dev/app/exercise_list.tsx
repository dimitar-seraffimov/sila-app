import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useRouter } from 'expo-router'; 

export default function ExercisePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); 
  const demoExercises = [
    { id: '1', name: 'Squat (Barbell)', muscle: 'Quadriceps' },
    { id: '2', name: 'Pause Squat (Barbell)', muscle: 'Quadriceps' },
    { id: '3', name: 'Overhead Press (Barbell)', muscle: 'Shoulders' },
    { id: '4', name: 'Ab Wheel', muscle: 'Abdominals' },
    { id: '5', name: 'Bench Press (Barbell)', muscle: 'Chest' },
    { id: '6', name: 'Incline Bench Press (Barbell)', muscle: 'Chest' },
    { id: '7', name: 'Single Arm Triceps Pushdown (Cable)', muscle: 'Triceps' },
    { id: '8', name: 'Deadlift', muscle: 'Back' },
    { id: '9', name: 'Pull Up', muscle: 'Back' },
    { id: '10', name: 'Bicep Curl (Dumbbell)', muscle: 'Biceps' },
  ];

  // Filter exercises based on the search query
  const filteredExercises = demoExercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Clear the search query
  const clearSearch = () => setSearchQuery('');

  return (
    <View style={styles.container}>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search exercise"
          placeholderTextColor="#A0A0A0"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {/* TODO: Add an 'X' button to the far right of the search bar to clear the query */}
        {searchQuery ? (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
            <Text style={styles.clearButtonText}>x</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            console.log('Navigating to All Equipment page');
            //router.push('/equipment'); // TODO: Navigate to all equipment
          }}
        >
          <Text style={styles.filterButtonText}>All Equipment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            console.log('Navigating to All Muscles page');
            //router.push('/muscles'); // TODO: Navigate to all muscles
          }}
        >
          <Text style={styles.filterButtonText}>All Muscles</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Exercises */}
      <Text style={styles.sectionTitle}>Recent Exercises</Text>
      <ScrollView style={styles.exerciseList}>
        {filteredExercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            style={styles.exerciseCard}
            onPress={() => {
              console.log(`Navigating to details for ${exercise.name}`);
              //router.push(`/exercise/${exercise.id}`); // TODO: Navigate to the exercise detail page
            }}
          >
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseMuscle}>{exercise.muscle}</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    color: 'white',
    fontSize: 18,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    color: '#007BFF',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 8,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    color: 'white',
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 14,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 14,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseList: {
    marginBottom: 20,
  },
  exerciseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseMuscle: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  chevron: {
    color: 'white',
    fontSize: 18,
  },
});
