import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { SearchContainer } from '@/components/SearchContainer';
import StyledButton from '@/components/StyledButton';
import { CustomScrollView } from '@/components/CustomScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ExercisePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useColorScheme() ?? 'light';

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

  const filteredExercises = demoExercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => setSearchQuery('');

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background },
      ]}
    >
      <SearchContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} clearSearch={clearSearch} />

      <View style={styles.filterButtons}>
        <StyledButton title="All Equipment" onPress={() => console.log('Navigating to All Equipment page')} />
        <StyledButton title="All Muscles" onPress={() => console.log('Navigating to All Muscles page')} />
      </View>

      <ThemedText style={styles.sectionTitle}>Recent Exercises</ThemedText>
      <CustomScrollView items={filteredExercises} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
