import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { WorkflowStatusPill, type WorkflowStatusTone } from '../components/WorkflowStatusPill';

const demoPosts = [
  {
    id: 'draft',
    title: 'Women in STEM Mentorship Program Opens Applications',
    status: 'Draft',
    category: 'Student Spotlight',
    updated: 'Updated recently',
    tone: 'neutral',
    filter: 'In Progress',
  },
  {
    id: 'submitted',
    title: 'Cybersecurity Club Hosts First Capture-the-Flag Night',
    status: 'Submitted',
    category: 'CSE News',
    updated: 'Updated today',
    tone: 'info',
    filter: 'Awaiting Review',
  },
  {
    id: 'changes',
    title: 'Math Department Colloquium Series Returns',
    status: 'Changes Requested',
    category: 'Upcoming Events',
    updated: 'Updated yesterday',
    tone: 'warning',
    filter: 'Needs Attention',
  },
] as const;

const filters = ['All', 'In Progress', 'Awaiting Review', 'Needs Attention', 'Published'] as const;

export function MyPostsScreen() {
  const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]>('All');
  const draftCount = demoPosts.filter((post) => post.status === 'Draft').length;
  const reviewCount = demoPosts.filter((post) => post.status === 'Submitted').length;
  const liveCount = 0;
  const visiblePosts = useMemo(
    () =>
      selectedFilter === 'All'
        ? demoPosts
        : demoPosts.filter((post) => post.filter === selectedFilter),
    [selectedFilter],
  );

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        showBack={false}
        subtitle="Sample records cannot be edited in this version"
        title="My Posts"
      />
      <View style={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            Demo workflow: these local records are read-only and do not sync to a CMS.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <StatChip count={draftCount} label="Drafts" />
          <StatChip count={reviewCount} label="In Review" />
          <StatChip count={liveCount} label="Live" />
        </View>

        <View style={styles.filterRow}>
          {filters.map((filter) => {
            const active = selectedFilter === filter;

            return (
            <Pressable
              accessibilityLabel={`Filter My Posts by ${filter}`}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              hitSlop={{ bottom: 6, top: 6 }}
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              style={({ pressed }) => [
                styles.filterChip,
                active && styles.filterChipActive,
                pressed && styles.pressed,
              ]}>
              <Text style={[styles.filterText, active && styles.filterTextActive]}>
                {filter}
              </Text>
            </Pressable>
            );
          })}
        </View>

        <View style={styles.list}>
          {visiblePosts.map((post) => (
            <View key={post.id} style={styles.postRow}>
              <View style={styles.postCopy}>
                <Text numberOfLines={2} style={styles.postTitle}>{post.title}</Text>
                <View style={styles.metaRow}>
                  <WorkflowStatusPill label={post.status} tone={post.tone as WorkflowStatusTone} />
                  <Text style={styles.metaText}>{post.category}</Text>
                </View>
                <Text style={styles.updated}>{post.updated}</Text>
                <Text style={styles.readOnlyText}>View-only sample record</Text>
              </View>
            </View>
          ))}
          {visiblePosts.length === 0 ? (
            <Text style={styles.emptyFilter}>Nothing here yet.</Text>
          ) : null}
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
    minWidth: 0,
    gap: 14,
    padding: spacing.lg,
  },
  statsRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  notice: {
    padding: spacing.md,
    backgroundColor: colors.tintGold,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: 14,
  },
  noticeText: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  statChip: {
    width: 104,
    minWidth: 0,
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
    borderRadius: 999,
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
    minWidth: 0,
    gap: 14,
  },
  postRow: {
    minWidth: 0,
    overflow: 'hidden',
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
    overflow: 'hidden',
    gap: spacing.sm,
  },
  postTitle: {
    maxWidth: 292,
    flexShrink: 1,
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
  readOnlyText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.medium,
    lineHeight: 15,
  },
  emptyFilter: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    paddingVertical: spacing.xl,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
