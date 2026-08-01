import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { DashboardStatCard } from '@/components/DashboardStatCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { StatusBadge } from '@/components/StatusBadge';
import { colors, radii, spacing, typography } from '@/constants/theme';
import { contributorStats, contributorSubmissions } from '@/data/mockDashboard';

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function ContributorDashboardScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader
        title="Contributor Workspace"
        greeting="Welcome, Jordan"
        onBack={() => router.push('/demo/role-select')}
      />
      <Pressable
        accessibilityLabel="Create Content is unavailable in this demo phase"
        accessibilityRole="button"
        style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
        <Text style={styles.primaryButtonText}>Create Content</Text>
      </Pressable>
      <View style={styles.statsGrid}>
        {contributorStats.map((stat) => (
          <DashboardStatCard key={stat.label} stat={stat} />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Recent Submissions</Text>
      <View style={styles.list}>
        {contributorSubmissions.map((submission) => (
          <View key={submission.id} style={styles.submissionCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{submission.title}</Text>
              <StatusBadge status={submission.status} />
            </View>
            <Text style={styles.meta}>{submission.category}</Text>
            <Text style={styles.detail}>Last updated {formatDate(submission.lastUpdated)}</Text>
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    minHeight: 52,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryNavy,
    borderRadius: radii.md,
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: '800',
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.86,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  sectionTitle: {
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
    color: colors.textPrimary,
    fontSize: typography.title,
    fontWeight: '800',
    lineHeight: 30,
  },
  list: {
    gap: spacing.md,
  },
  submissionCard: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  cardHeader: {
    gap: spacing.sm,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: typography.body,
    fontWeight: '800',
    lineHeight: 23,
  },
  meta: {
    marginTop: spacing.md,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    fontWeight: '700',
    lineHeight: 20,
  },
  detail: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
