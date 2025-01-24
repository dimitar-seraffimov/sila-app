import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { SearchContainer } from '@/components/SearchContainer';
import { CustomScrollView } from '@/components/CustomScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import StyledButton from '@/components/StyledButton';

export default function RoutineScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useColorScheme() ?? 'light';
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0);
  const [sets, setSets] = useState(0);

  const demoRoutines = [
    { id: '1', name: 'tuesdays', description: 'Hang Snatch, Hang Clean, Squat (Barbell), Pull Up (Weighted), Push Press, Bicep Curl (Dumbbell)' },
    { id: '2', name: 'thursdays', description: 'Hang Snatch, Clean and Jerk, Front Squat, Snatch Pulls, Overhead Press (Barbell), Lu Raises' },
    { id: '3', name: 'saturdays', description: 'Snatch, Clean and Jerk, Squat (Barbell), Overhead Press (Barbell), Pull Up (Weighted), Single Arm Triceps Pushdown (Cable)' },
  ];

  const filteredRoutines = demoRoutines.filter((routine) =>
    routine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background },
      ]}
    >
      <View style={styles.quickStart}>
        <ThemedText type="subtitle">Quick Start</ThemedText>
        <Link href="/in_workout/workout" asChild>
          <TouchableOpacity style={styles.quickStartButton}>
            <IconSymbol name="plus" size={20} color="white" />
            <ThemedText style={styles.quickStartText}>Start Empty Workout</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>

      <ThemedText type="subtitle" style={styles.sectionTitle}>Routines</ThemedText>
      <View style={styles.filterButtons}>
        <StyledButton title="New Routine" onPress={() => console.log('New Routine')} />
        <StyledButton title="Explore" onPress={() => console.log('Explore')} />
      </View>

      <ThemedText style={styles.myRoutines}>My Routines (4)</ThemedText>
      <CustomScrollView items={filteredRoutines.map(routine => ({
        id: routine.id,
        name: routine.name,
        muscle: routine.description,
      }))} />

      <View style={styles.stats}>
        <ThemedText>Duration: {duration}s</ThemedText>
        <ThemedText>Volume: {volume} kg</ThemedText>
        <ThemedText>Sets: {sets}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  quickStart: {
    marginBottom: 20,
  },
  quickStartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  quickStartText: {
    color: 'white',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  myRoutines: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
