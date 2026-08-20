import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol } from '../components/StudentSymbol';
import { WorkflowStatusPill, type WorkflowStatusTone } from '../components/WorkflowStatusPill';

const reviewPosts = [
  {
    id: 'ctf',
    title: 'Cybersecurity Club Hosts First Capture-the-Flag Night',
    author: 'Dr. Lealon Martin',
    category: 'CSE News',
    status: 'Submitted',
    tone: 'info',
    detail: 'submitted today',
    segment: 'Queue',
  },
  {
    id: 'nsbe',
    title: 'SU Delegation Attends National Society of Black Engineers Convention',
    author: 'Dr. Lealon Martin',
    category: 'Student Spotlight',
    status: 'Approved',
    tone: 'success',
    detail: 'ready for publishing',
    segment: 'Approved',
  },
] as const;

const segments = ['Queue', 'Approved', 'Scheduled', 'Live', 'Resolved'] as const;

export function ReviewScreen() {
  const [selectedSegment, setSelectedSegment] = useState<(typeof segments)[number]>('Queue');
  const visiblePosts = useMemo(
    () => reviewPosts.filter((post) => post.segment === selectedSegment),
    [selectedSegment],
  );

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        showBack={false}
        subtitle="Read-only queue preview"
        title="Review"
      />
      <View style={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            Demo workflow: review actions are not available here, so no approval state is saved.
          </Text>
        </View>

        <View style={styles.banner}>
          <StudentSymbol color={colors.universityGold} name="review" size={20} />
          <Text style={styles.bannerText}>1 submission awaiting review</Text>
        </View>

        <View style={styles.segmentRow}>
          {segments.map((segment) => {
            const active = selectedSegment === segment;

            return (
            <Pressable
              accessibilityLabel={`Show ${segment} review items`}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              key={segment}
              onPress={() => setSelectedSegment(segment)}
              style={({ pressed }) => [
                styles.segment,
                active && styles.segmentActive,
                pressed && styles.pressed,
              ]}>
              <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
                {segment}
              </Text>
            </Pressable>
            );
          })}
        </View>

        <View style={styles.list}>
          {visiblePosts.map((post) => (
            <View key={post.id} style={styles.reviewRow}>
              <View style={styles.thumbnail}>
                <StudentSymbol color={colors.textSecondary} name="document" size={22} />
              </View>
              <View style={styles.reviewCopy}>
                <Text numberOfLines={2} style={styles.reviewTitle}>{post.title}</Text>
                <View style={styles.metaRow}>
                  <WorkflowStatusPill label={post.status} tone={post.tone as WorkflowStatusTone} />
                  <Text style={styles.metaText}>{post.category}</Text>
                </View>
                <Text style={styles.detailText}>By {post.author} - {post.detail}</Text>
                <Text style={styles.readOnlyText}>View-only queue item</Text>
              </View>
            </View>
          ))}
          {visiblePosts.length === 0 ? (
            <View style={styles.emptyState}>
              <StudentSymbol color="rgba(74,95,120,0.55)" name="review" size={34} />
              <Text style={styles.emptyTitle}>
                {selectedSegment === 'Queue' ? 'Queue is clear' : 'Nothing here'}
              </Text>
              <Text style={styles.emptyDetail}>Content in this state will appear here.</Text>
            </View>
          ) : null}
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
  banner: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: 14,
    backgroundColor: colors.primaryNavy,
    borderRadius: 14,
  },
  bannerText: {
    flex: 1,
    minWidth: 0,
    color: colors.surface,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  segmentRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    padding: spacing.xs,
    backgroundColor: colors.tintNavy,
    borderRadius: radii.lg,
  },
  segment: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
  },
  segmentActive: {
    backgroundColor: colors.surface,
  },
  segmentText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    lineHeight: 15,
  },
  segmentTextActive: {
    color: colors.primaryNavy,
  },
  list: {
    minWidth: 0,
    gap: 14,
  },
  reviewRow: {
    minWidth: 0,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: spacing.md,
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  thumbnail: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 10,
  },
  reviewCopy: {
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    gap: spacing.xs,
  },
  reviewTitle: {
    maxWidth: 230,
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
  detailText: {
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
  emptyState: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 54,
  },
  emptyTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  emptyDetail: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
