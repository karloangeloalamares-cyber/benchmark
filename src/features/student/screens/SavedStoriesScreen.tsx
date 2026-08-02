import { useMemo } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol } from '../components/StudentSymbol';
import { studentStories } from '../data/sampleContent';
import { useSavedStories } from '../saved/useSavedStories';

function storyHref(storyId: string): Href {
  return `/student/posts/${storyId}` as Href;
}

export function SavedStoriesScreen() {
  const router = useRouter();
  const { clearSavedStories, savedStoryIds } = useSavedStories();
  const savedStories = useMemo(
    () =>
      savedStoryIds
        .map((storyId) => studentStories.find((story) => story.id === storyId))
        .filter((story) => story !== undefined),
    [savedStoryIds],
  );

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        fallbackHref={'/student/account' as Href}
        subtitle="Session-only reading list"
        title="Saved Stories"
      />
      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Saved Stories</Text>
            <Text style={styles.countText}>{savedStories.length}</Text>
          </View>
          <Text style={styles.notice}>
            Saved stories are temporary in this Expo parity demo and reset when the app session restarts.
          </Text>
          {savedStories.length === 0 ? (
            <View style={styles.emptyState}>
              <StudentSymbol color="rgba(74,95,120,0.55)" name="saved" size={38} />
              <Text style={styles.emptyTitle}>Nothing saved yet</Text>
              <Text style={styles.emptyText}>
                Tap the bookmark on any story to build your personal reading list.
              </Text>
            </View>
          ) : (
            <>
              {savedStories.map((story) => (
                <Pressable
                  accessibilityLabel={`Open saved story ${story.title}`}
                  accessibilityRole="button"
                  key={story.id}
                  onPress={() => router.push(storyHref(story.id))}
                  style={({ pressed }) => [styles.savedRow, pressed && styles.pressed]}>
                  <View style={styles.savedThumb}>
                    <StudentSymbol color={colors.textSecondary} name="document" size={22} />
                  </View>
                  <View style={styles.savedCopy}>
                    <Text style={styles.savedCategory}>{story.categoryLabel}</Text>
                    <Text style={styles.savedTitle}>{story.title}</Text>
                    <Text style={styles.savedDate}>Saved this session</Text>
                  </View>
                </Pressable>
              ))}
              <Pressable
                accessibilityLabel="Clear saved stories"
                accessibilityRole="button"
                onPress={clearSavedStories}
                style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]}>
                <Text style={styles.clearText}>Clear saved stories</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    minWidth: 0,
    gap: 14,
    padding: spacing.lg,
  },
  section: {
    minWidth: 0,
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  sectionHeader: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  sectionTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  countText: {
    minWidth: 28,
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
    textAlign: 'right',
  },
  notice: {
    maxWidth: 310,
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  emptyState: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 48,
  },
  emptyTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  emptyText: {
    maxWidth: 310,
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  savedRow: {
    minWidth: 0,
    flexDirection: 'row',
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  savedThumb: {
    width: 72,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 10,
  },
  savedCopy: {
    flex: 1,
    minWidth: 0,
    gap: spacing.xs,
  },
  savedCategory: {
    color: colors.universityGold,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.6,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  savedTitle: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  savedDate: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    borderColor: colors.borderStrong,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  clearText: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.82,
  },
});
