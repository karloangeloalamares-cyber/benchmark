import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { DashboardStatCard } from '@/components/DashboardStatCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/constants/theme';
import { administratorActivity, administratorStats, managementCards } from '@/data/mockDashboard';

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function AdministratorDashboardScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader
        title="Administration"
        greeting="Welcome, Morgan"
        onBack={() => router.push('/demo/role-select')}
      />
      <View style={styles.statsGrid}>
        {administratorStats.map((stat) => (
          <DashboardStatCard key={stat.label} stat={stat} />
        ))}
      </View>
      <View style={styles.managementGrid}>
        {managementCards.map((label) => (
          <Pressable
            key={label}
            accessibilityLabel={`${label} is unavailable in this demo phase`}
            accessibilityRole="button"
            style={({ pressed }) => [styles.managementCard, pressed && styles.pressed]}>
            <Text style={styles.managementTitle}>{label}</Text>
            <Text style={styles.managementDetail}>Demo placeholder</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.list}>
        {administratorActivity.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <Text style={styles.cardTitle}>{activity.title}</Text>
            <Text style={styles.detail}>{activity.detail}</Text>
            <Text style={styles.meta}>{formatDate(activity.occurredAt)}</Text>
          </View>
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
  managementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  managementCard: {
    flexGrow: 1,
    flexBasis: 220,
    minHeight: 96,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  managementTitle: {
    color: colors.primaryNavy,
    fontSize: typography.body,
    fontWeight: '800',
    lineHeight: 23,
  },
  managementDetail: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
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
  activityCard: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: typography.body,
    fontWeight: '800',
    lineHeight: 23,
  },
  detail: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  meta: {
    marginTop: spacing.md,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    fontWeight: '700',
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.86,
  },
});
