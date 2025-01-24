import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';
import { useWorkout } from '@/components/context/WorkoutContext';
import StyledButton from '@/components/StyledButton';

export default function WorkoutScreen() {
  const theme = useColorScheme() ?? 'light';
  const { toggleWorkout, setIsOnWorkoutScreen } = useWorkout();

  useEffect(() => {
    setIsOnWorkoutScreen(true);
    return () => setIsOnWorkoutScreen(false);
  }, [setIsOnWorkoutScreen]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background },
      ]}
    >
      <View style={styles.header}>
        <ThemedText type="title">Log Workout</ThemedText>
        <TouchableOpacity style={styles.finishButton} onPress={toggleWorkout}>
          <ThemedText style={styles.finishButtonText}>Finish</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.stats}>
        <ThemedText>Duration: 0s</ThemedText>
        <ThemedText>Volume: 0 kg</ThemedText>
        <ThemedText>Sets: 0</ThemedText>
      </View>

      <View style={styles.getStarted}>
        <IconSymbol name="dumbbell" size={50} color={Colors.light.tint} />
        <ThemedText type="subtitle">Get started</ThemedText>
        <Link href="/exercise_list" asChild>
          <StyledButton title="Add Exercise" onPress={toggleWorkout} />
        </Link>
        <ThemedText>Add an exercise to start your workout</ThemedText>

      </View>

      <View style={styles.actions}>
        <StyledButton title="Settings" onPress={() => console.log('Settings')} />
        <StyledButton title="Discard Workout" onPress={() => console.log('Discard Workout')} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 8,
  },
  finishButtonText: {
    color: 'white',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  getStarted: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}); 