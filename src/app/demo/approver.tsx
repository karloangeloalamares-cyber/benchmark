import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { DashboardStatCard } from '@/components/DashboardStatCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { StatusBadge } from '@/components/StatusBadge';
import { colors, radii, spacing, typography } from '@/constants/theme';
import { approverStats, approverSubmissions } from '@/data/mockDashboard';

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function ApproverDashboardScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader
        actions={[
          {
            label: 'Back to Benchmark',
            onPress: () => router.replace('/student/site'),
            tone: 'primary',
            icon: 'back',
          },
          {
            label: 'Switch Role',
            onPress: () => router.push('/demo/role-select'),
            tone: 'secondary',
          },
        ]}
        context="Benchmark Demo Workspace"
        detail="Review workload and publishing decisions in a read-only approval preview."
        greeting="Welcome, Taylor"
        label="Demo mode — mock data only"
        roleLabel="Approver"
        title="Approval Queue"
      />
      <View style={styles.statsGrid}>
        {approverStats.map((stat) => (
          <DashboardStatCard key={stat.label} stat={stat} />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Awaiting Review</Text>
      <View style={styles.list}>
        {approverSubmissions.map((submission) => (
          <Pressable
            key={submission.id}
            accessibilityLabel={`${submission.title} awaiting review. Review screen is unavailable in this demo phase.`}
            accessibilityRole="button"
            style={({ pressed }) => [styles.reviewCard, pressed && styles.pressed]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{submission.title}</Text>
              <StatusBadge status={submission.status} />
            </View>
            <Text style={styles.meta}>{submission.category}</Text>
            <Text style={styles.detail}>Contributor: {submission.contributor}</Text>
            <Text style={styles.detail}>Submitted {formatDate(submission.submittedDate)}</Text>
          </Pressable>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
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
  reviewCard: {
    minHeight: 132,
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
  pressed: {
    opacity: 0.86,
  },
});
