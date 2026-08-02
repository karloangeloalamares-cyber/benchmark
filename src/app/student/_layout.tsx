import { Stack } from 'expo-router';

import { SavedStoriesProvider } from '@/features/student/saved/SavedStoriesProvider';

export default function StudentLayout() {
  return (
    <SavedStoriesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="posts/[id]" />
        <Stack.Screen name="internships/[id]" />
      </Stack>
    </SavedStoriesProvider>
  );
}
