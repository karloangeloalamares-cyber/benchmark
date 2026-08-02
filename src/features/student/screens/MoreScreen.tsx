import { useMemo } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { studentStories } from '../data/sampleContent';
import { useSavedStories } from '../saved/useSavedStories';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';

function storyHref(storyId: string): Href {
  return `/student/posts/${storyId}` as Href;
}

export function MoreScreen() {
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
      <StudentPageHeader title="More" />
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AJ</Text>
          </View>
          <View style={styles.profileCopy}>
            <Text style={styles.profileName}>Anthony Joiner</Text>
            <Text style={styles.profileTitle}>Digital Platforms Administrator</Text>
            <Text style={styles.role}>Administrator</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reading List</Text>
          <Text style={styles.notice}>
            Saved stories are temporary in this Expo parity demo and reset when the app session restarts.
          </Text>
          {savedStories.length === 0 ? (
            <Text style={styles.emptyText}>
              Nothing saved yet. Tap the bookmark on any story to build your personal reading list.
            </Text>
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
                    <Text style={styles.savedThumbText}>N</Text>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          {[
            'Create & submit drafts',
            'Review submitted content',
            'Approve or reject with feedback',
            'Publish, schedule & unpublish',
            'Manage users, categories & settings',
          ].map((permission) => (
            <Text key={permission} style={styles.permission}>✓ {permission}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutBrand}>Benchmark</Text>
          <Text style={styles.aboutText}>
            Showcasing Southern University's excellence to the world.
          </Text>
        </View>
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 14,
    padding: spacing.lg,
  },
  profileCard: {
    flexDirection: 'row',
    gap: 14,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  avatar: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 29,
  },
  avatarText: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  profileCopy: {
    flex: 1,
    minWidth: 0,
    gap: spacing.xs,
  },
  profileName: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  profileTitle: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  role: {
    color: colors.primaryNavy,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
  },
  section: {
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  sectionTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  notice: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  savedRow: {
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
  savedThumbText: {
    color: colors.textSecondary,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
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
    minHeight: 40,
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
  permission: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    lineHeight: 20,
  },
  aboutBrand: {
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 30,
    textAlign: 'center',
  },
  aboutText: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
