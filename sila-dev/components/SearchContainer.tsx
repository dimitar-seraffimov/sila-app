import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type SearchContainerProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
};

export function SearchContainer({ searchQuery, setSearchQuery, clearSearch }: SearchContainerProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <View
      style={[
        styles.searchContainer,
        {
          backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
          borderColor: theme === 'light' ? 'black' : Colors.light.tint,
        },
      ]}
    >
      <TextInput
        style={[styles.searchBar, { color: theme === 'light' ? Colors.light.text : Colors.dark.text }]}
        placeholder="Search exercise"
        placeholderTextColor={theme === 'light' ? Colors.light.text : Colors.dark.text}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery ? (
        <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
          <ThemedText style={styles.clearButtonText}>x</ThemedText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
  },
  searchBar: {
    flex: 1,
    padding: 10,
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    fontSize: 14,
  },
}); 