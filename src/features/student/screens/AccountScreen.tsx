import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol } from '../components/StudentSymbol';
import {
  activeStudentParityRole,
  getStudentPermissions,
  studentRoleLabels,
} from '../navigation/studentDestinations';
import { useSavedStories } from '../saved/useSavedStories';

const permissionRows = [
  ['Create & submit drafts', true],
  ['Review submitted content', 'canReview'],
  ['Approve or reject with feedback', 'canReview'],
  ['Publish, schedule & unpublish', 'canPublish'],
  ['Manage users, categories & settings', 'canAdminister'],
] as const;

export function AccountScreen() {
  const router = useRouter();
  const { savedStoryIds } = useSavedStories();
  const permissions = getStudentPermissions(activeStudentParityRole);
  const resolvedPermissions = useMemo(
    () =>
      permissionRows.map(([label, permission]) => ({
        label,
        granted: permission === true ? true : permissions[permission],
      })),
    [permissions],
  );

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        subtitle="Demo account context for the native parity shell"
        title="Account"
      />
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <StudentSymbol color={colors.primaryNavy} name="account" size={36} />
          </View>
          <View style={styles.profileCopy}>
            <Text style={styles.profileName}>Student access preview</Text>
            <Text style={styles.profileTitle}>
              No real user is signed in. The selected role is local fixture data only.
            </Text>
            <View style={styles.rolePill}>
              <StudentSymbol color={colors.primaryNavy} name="manage" size={14} />
              <Text style={styles.roleText}>{studentRoleLabels[activeStudentParityRole]}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reading List</Text>
          <Pressable
            accessibilityLabel="Open Saved Stories"
            accessibilityRole="button"
            onPress={() => router.push('/student/saved')}
            style={({ pressed }) => [styles.savedRow, pressed && styles.pressed]}>
            <View style={styles.savedIcon}>
              <StudentSymbol color={colors.universityGold} name="saved" size={22} />
            </View>
            <View style={styles.savedCopy}>
              <Text style={styles.savedTitle}>Saved Stories</Text>
              <Text style={styles.savedDetail}>
                {savedStoryIds.length} saved this session. Reloading the app resets the list.
              </Text>
            </View>
            <StudentSymbol color={colors.textSecondary} name="chevronRight" size={18} />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          {resolvedPermissions.map((permission) => (
            <View key={permission.label} style={styles.permissionRow}>
              <StudentSymbol
                color={permission.granted ? colors.primaryNavy : colors.textSecondary}
                name={permission.granted ? 'check' : 'status'}
                size={16}
              />
              <Text style={[styles.permission, !permission.granted && styles.permissionMuted]}>
                {permission.label}
              </Text>
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
  rolePill: {
    alignSelf: 'flex-start',
    minHeight: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.tintGoldStrong,
    borderRadius: radii.pill,
  },
  roleText: {
    color: colors.primaryNavy,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  section: {
    minWidth: 0,
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
  savedRow: {
    minWidth: 0,
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  savedIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintGoldStrong,
    borderRadius: 12,
  },
  savedCopy: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  savedTitle: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  savedDetail: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  permissionRow: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
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
