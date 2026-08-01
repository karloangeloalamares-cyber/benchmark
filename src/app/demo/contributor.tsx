import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { DashboardStatCard } from '@/components/DashboardStatCard';
import { PrimaryButton } from '@/components/PrimaryButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { SectionHeader } from '@/components/SectionHeader';
import { SubmissionSummaryCard } from '@/components/SubmissionSummaryCard';
import { spacing } from '@/constants/theme';
import { contributorStats, contributorSubmissions } from '@/data/mockDashboard';

export default function ContributorDashboardScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader
        title="Contributor Workspace"
        greeting="Welcome, Jordan"
        context="Contributor Workspace"
        onBack={() => router.push('/demo/role-select')}
      />
      <PrimaryButton accessibilityLabel="Create Content is unavailable in this demo phase" variant="gold">
        Create Content
      </PrimaryButton>
      <View style={styles.statsGrid}>
        {contributorStats.map((stat) => (
          <DashboardStatCard key={stat.label} stat={stat} />
        ))}
      </View>
      <SectionHeader
        title="Recent Submissions"
        detail="Editorial drafts and announcements currently staged for the demo."
      />
      <View style={styles.list}>
        {contributorSubmissions.map((submission) => (
          <SubmissionSummaryCard key={submission.id} submission={submission} />
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
    marginTop: spacing.xl,
  },
  list: {
    gap: spacing.md,
  },
});
