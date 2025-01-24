import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useWorkout } from '@/components/context/WorkoutContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CollapsibleWorkout() {
  const { isWorkoutActive, isOnWorkoutScreen, toggleWorkout } = useWorkout();
  const theme = useColorScheme() ?? 'light';
  const insets = useSafeAreaInsets();

  if (!isWorkoutActive || isOnWorkoutScreen) return null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
          bottom: insets.bottom + 50,
        },
      ]}
    >
      <View style={styles.content}>
        <ThemedText style={styles.workoutText}>Workout in Progress</ThemedText>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => ''} style={styles.resumeButton}>
            <ThemedText style={styles.resumeText}>Resume</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ''} style={styles.discardButton}>
            <ThemedText style={styles.discardText}>Discard</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: 'white',
    padding: 10,
  },
  content: {
    alignItems: 'center',
  },
  workoutText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  resumeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1F1F1F',
    borderRadius: 8,
  },
  resumeText: {
    color: 'white',
  },
  discardButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  discardText: {
    color: 'white',
  },
});