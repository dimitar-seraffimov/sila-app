import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type StyledButtonProps = {
  title: string;
  onPress: () => void;
};

export function StyledButton({ title, onPress }: StyledButtonProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
          borderColor: theme === 'light' ? 'black' : Colors.light.tint,
        },
      ]}
      onPress={onPress}
    >
      <ThemedText style={styles.buttonText}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth:1,
  },
  buttonText: {
    fontSize: 14,
  },
}); 