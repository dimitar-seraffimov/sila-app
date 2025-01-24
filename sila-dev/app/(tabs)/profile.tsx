import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import StyledButton from "@/components/StyledButton"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ProfileScreen() {
  const theme = useColorScheme() ?? 'light';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <ThemedText style={styles.editProfile}>Edit Profile</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.username}>madsex</ThemedText>
        <View style={styles.icons}>
          <TouchableOpacity>
            <ThemedText>🔗</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedText>⚙️</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <View style={styles.stats}>
          <ThemedText>Workouts</ThemedText>
          <ThemedText>860</ThemedText>
        </View>
        <View style={styles.stats}>
          <ThemedText>Followers</ThemedText>
          <ThemedText>31</ThemedText>
        </View>
        <View style={styles.stats}>
          <ThemedText>Following</ThemedText>
          <ThemedText>31</ThemedText>
        </View>
      </View>

      <View style={styles.graph}>
        <ThemedText>Graph Placeholder</ThemedText>
      </View>

      <View style={styles.dashboard}>
        <StyledButton title="Statistics" onPress={() => {}} />
        <StyledButton title="Exercises" onPress={() => {}} />
        <StyledButton title="Measures" onPress={() => {}} />
        <StyledButton title="Calendar" onPress={() => {}} />
      </View>

      <View style={styles.workouts}>
        <ThemedText>Workouts</ThemedText>
        <View style={styles.workoutItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.workoutImage}
          />
          <View>
            <ThemedText>madsex</ThemedText>
            <ThemedText>Saturday, Jan 18, 2025</ThemedText>
            <ThemedText>Morning workout 🌞</ThemedText>
            <ThemedText>Time: 1h 23min</ThemedText>
            <ThemedText>Volume: 11,440 kg</ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  editProfile: {
    color: '#007AFF',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  stats: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  graph: {
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  workouts: {
    marginBottom: 20,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  workoutImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
