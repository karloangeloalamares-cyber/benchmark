import type { Href } from 'expo-router';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ContentNotFound } from '@/features/student/components/ContentNotFound';
import { StoryDetailContent } from '@/features/student/components/StoryDetailContent';
import { StudentPageHeader } from '@/features/student/components/StudentPageHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';
import { getStoryById } from '@/features/student/utils/contentLookup';
import { spacing } from '@/constants/theme';

export default function StudentStoryDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const story = getStoryById(id);

  return (
    <StudentScreenContainer>
      <StudentPageHeader title={story ? 'Story details' : 'Story not found'} />
      {story ? (
        <StoryDetailContent story={story} />
      ) : (
        <View style={styles.content}>
          <ContentNotFound
            actionLabel="Return to student home"
            onAction={() => router.replace('/student/site' as Href)}
          />
        </View>
      )}
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
  },
});
