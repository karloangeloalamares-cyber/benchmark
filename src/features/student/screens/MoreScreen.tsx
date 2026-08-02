import { useMemo } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { studentStories } from '../data/sampleContent';
import { useSavedStories } from '../saved/useSavedStories';
import { PrimitiveIcon } from '../components/PrimitiveIcon';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { WorkflowStatusPill } from '../components/WorkflowStatusPill';

const permissions: ReadonlyArray<readonly [string, boolean]> = [
  ['Create & submit drafts', true],
  ['Review submitted content', true],
  ['Approve or reject with feedback', false],
  ['Publish, schedule & unpublish', false],
  ['Manage users, categories & settings', false],
];

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
      <StudentPageHeader
        showBack={false}
        subtitle="Saved stories, access context, and app information"
        title="More"
      />
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>B</Text>
          </View>
          <View style={styles.profileCopy}>
            <Text style={styles.profileName}>Student access preview</Text>
            <Text style={styles.profileTitle}>
              No real account is signed in. Demo data stays on this device session.
            </Text>
            <WorkflowStatusPill label="Demo mode" tone="neutral" />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Saved Stories</Text>
            <Text style={styles.countText}>{savedStories.length}</Text>
          </View>
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
                    <PrimitiveIcon color={colors.textSecondary} name="document" size={22} />
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
          <Text style={styles.sectionTitle}>Account and Permissions</Text>
          <Text style={styles.notice}>
            Rork uses signed-in roles. This Expo student shell shows the role surface only.
          </Text>
          {permissions.map(([permission, granted]) => (
            <View key={permission} style={styles.permissionRow}>
              <View style={styles.permissionIcon}>
                <PrimitiveIcon
                  color={granted ? colors.primaryNavy : colors.textSecondary}
                  name={granted ? 'check' : 'close'}
                  size={14}
                />
              </View>
              <Text style={[styles.permission, !granted && styles.permissionMuted]}>{permission}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutBrand}>Benchmark</Text>
          <Text style={styles.aboutText}>
            Showcasing Southern University's excellence to the world.
          </Text>
          <Text style={styles.aboutFootnote}>
            Future releases can connect real account profile, sign-out, and persistent saved stories.
          </Text>
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
  profileCard: {
    minWidth: 0,
    overflow: 'hidden',
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
    flexShrink: 1,
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  profileTitle: {
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  section: {
    minWidth: 0,
    overflow: 'hidden',
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
  sectionHeader: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
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
  emptyText: {
    maxWidth: 310,
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
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
  permissionRow: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  permissionIcon: {
    width: 18,
    minHeight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permission: {
    flex: 1,
    minWidth: 0,
    color: colors.primaryNavy,
    fontSize: typography.small,
    lineHeight: 20,
  },
  permissionMuted: {
    color: colors.textSecondary,
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
    maxWidth: 310,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  aboutFootnote: {
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
