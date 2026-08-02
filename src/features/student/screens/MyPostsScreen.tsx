import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';

const demoPosts = [
  {
    id: 'draft',
    title: 'Women in STEM Mentorship Program Opens Applications',
    status: 'Draft',
    category: 'Student Spotlight',
    updated: 'Updated recently',
    tone: colors.textSecondary,
  },
  {
    id: 'submitted',
    title: 'Cybersecurity Club Hosts First Capture-the-Flag Night',
    status: 'Submitted',
    category: 'CSE News',
    updated: 'Updated today',
    tone: colors.benchmarkBlue,
  },
  {
    id: 'changes',
    title: 'Math Department Colloquium Series Returns',
    status: 'Changes Requested',
    category: 'Upcoming Events',
    updated: 'Updated yesterday',
    tone: colors.warning,
  },
];

export function MyPostsScreen() {
  const draftCount = demoPosts.filter((post) => post.status === 'Draft').length;
  const reviewCount = demoPosts.filter((post) => post.status === 'Submitted').length;
  const liveCount = 0;

  return (
    <StudentScreenContainer>
      <StudentPageHeader title="My Posts" />
      <View style={styles.content}>
        <View style={styles.statsRow}>
          <StatChip count={draftCount} label="Drafts" />
          <StatChip count={reviewCount} label="In Review" />
          <StatChip count={liveCount} label="Live" />
        </View>

        <View style={styles.filterRow}>
          {['All', 'In Progress', 'Awaiting Review'].map((filter, index) => (
            <View key={filter} style={[styles.filterChip, index === 0 && styles.filterChipActive]}>
              <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>
                {filter}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.list}>
          {demoPosts.map((post) => (
            <View key={post.id} style={styles.postRow}>
              <View style={styles.postCopy}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <View style={styles.metaRow}>
                  <View style={[styles.statusBadge, { borderColor: post.tone }]}>
                    <Text style={[styles.statusText, { color: post.tone }]}>{post.status}</Text>
                  </View>
                  <Text style={styles.metaText}>{post.category}</Text>
                </View>
                <Text style={styles.updated}>{post.updated}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
          ))}
        </View>
      </View>
    </StudentScreenContainer>
  );
}

function StatChip({ count, label }: { count: number; label: string }) {
  return (
    <View style={styles.statChip}>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 14,
    padding: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  statChip: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: 14,
    ...shadows.soft,
  },
  statCount: {
    color: colors.benchmarkBlue,
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 28,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.5,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.tintNavy,
    borderRadius: radii.pill,
  },
  filterChipActive: {
    backgroundColor: colors.primaryNavy,
  },
  filterText: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 18,
  },
  filterTextActive: {
    color: colors.surface,
  },
  list: {
    gap: 14,
  },
  postRow: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: 14,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  postCopy: {
    flex: 1,
    minWidth: 0,
    gap: spacing.sm,
  },
  postTitle: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  statusText: {
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
  },
  metaText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  updated: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  chevron: {
    color: colors.textSecondary,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
});
