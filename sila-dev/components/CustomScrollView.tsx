import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type CustomScrollViewProps = ScrollViewProps & {
  items: { id: string; name: string; muscle: string }[];
};

export function CustomScrollView({ items, ...props }: CustomScrollViewProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
      
      {...props}
    >
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.exerciseCard,
            {
              backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
              borderColor: theme === 'light' ? 'black' : Colors.light.tint,
            },
          ]}
          onPress={() => console.log(`Navigating to ${item.name} page`)}
        >
          <View style={styles.exerciseDetails}>
            <ThemedText style={styles.exerciseName}>{item.name}</ThemedText>
            <ThemedText style={styles.exerciseMuscle}>{item.muscle}</ThemedText>
          </View>
          <ThemedText style={styles.chevron}>{'>'}</ThemedText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 50,
  },
  exerciseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseMuscle: {
    fontSize: 14,
  },
  chevron: {
    fontSize: 18,
  },
}); 