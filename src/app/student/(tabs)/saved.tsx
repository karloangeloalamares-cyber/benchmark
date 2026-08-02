import { useEffect, useMemo } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import { EmptyState } from '@/features/student/components/EmptyState';
import { StoryCard } from '@/features/student/components/StoryCard';
import { StudentPageHeader } from '@/features/student/components/StudentPageHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';
import { studentStories } from '@/features/student/data/sampleContent';
import { useSavedStories } from '@/features/student/saved/useSavedStories';

function storyHref(storyId: string): Href {
  return `/student/posts/${storyId}` as Href;
}

export default function SavedStoriesScreen() {
  const router = useRouter();
  const { clearSavedStories, removeStory, savedStoryIds } = useSavedStories();

  const savedStories = useMemo(
    () =>
      savedStoryIds
        .map((storyId) => studentStories.find((story) => story.id === storyId))
        .filter((story) => story !== undefined),
    [savedStoryIds],
  );

  useEffect(() => {
    const validStoryIds = new Set(studentStories.map((story) => story.id));
    savedStoryIds.forEach((storyId) => {
      if (!validStoryIds.has(storyId)) {
        removeStory(storyId);
      }
    });
  }, [removeStory, savedStoryIds]);

  return (
    <StudentScreenContainer>
      <StudentPageHeader fallbackHref={'/student/home' as Href} title="Saved Stories" />
      <View style={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Session-only saves</Text>
          <Text style={styles.noticeText}>
            Saved stories are temporary in this demo and will reset when the app session restarts.
          </Text>
        </View>

        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>Saved Stories</Text>
          <Text style={styles.resultCount}>{savedStories.length} saved</Text>
        </View>

        {savedStories.length > 0 ? (
          <>
            <View style={styles.list}>
              {savedStories.map((story) => (
                <StoryCard
                  key={story.id}
                  onPress={() => router.push(storyHref(story.id))}
                  story={story}
                />
              ))}
            </View>
            <Pressable
              accessibilityLabel="Clear all saved stories"
              accessibilityRole="button"
              onPress={clearSavedStories}
              style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]}>
              <Text style={styles.clearText}>Clear saved stories</Text>
            </Pressable>
          </>
        ) : (
          <EmptyState
            actionLabel="Browse stories"
            detail="Use the save action on a story to keep it here during this session."
            onReset={() => router.push('/student/home' as Href)}
            title="You have not saved any stories yet."
          />
        )}
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
  },
  notice: {
    padding: spacing.lg,
    backgroundColor: colors.tintBlue,
    borderColor: colors.benchmarkBlue,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  noticeTitle: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  noticeText: {
    marginTop: spacing.xs,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    lineHeight: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  resultTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  resultCount: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  list: {
    gap: spacing.lg,
  },
  clearButton: {
    minHeight: layout.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.danger,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  clearText: {
    color: colors.danger,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.84,
  },
});
