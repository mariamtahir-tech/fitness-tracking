import { Stack } from "expo-router";
import { ExerciseProvider } from "./(tabs)/store";

export default function RootLayout() {
  return (
    <ExerciseProvider>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#858dbd" }
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="add" />
        <Stack.Screen name="details" />
      </Stack>
    </ExerciseProvider>
  );
}