import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Button } from 'react-native';
import { WorkoutProvider } from '@/components/context/WorkoutContext';
import CollapsibleWorkout from '@/components/CollapsibleComponent';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <WorkoutProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: colorScheme === 'dark' ? Colors.dark.tint : Colors.light.text,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="exercise_list"
            options={{
              headerTitle: 'Exercise List',
            }}
          />
          <Stack.Screen
            name="in_workout/workout"
            options={{
              headerTitle: 'Log',
              headerRight: () => (
                <Button
                  onPress={() => console.log('Finish Pressed')}
                  title="Finish"
                  color={Colors.light.tint}
                />
              ),
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
        <CollapsibleWorkout />
      </ThemeProvider>
    </WorkoutProvider>
  );
}