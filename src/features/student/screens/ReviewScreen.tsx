import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { PrimitiveIcon } from '../components/PrimitiveIcon';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';

const reviewPosts = [
  {
    id: 'ctf',
    title: 'Cybersecurity Club Hosts First Capture-the-Flag Night',
    author: 'Dr. Lealon Martin',
    category: 'CSE News',
    status: 'Submitted',
    detail: 'submitted today',
  },
  {
    id: 'nsbe',
    title: 'SU Delegation Attends National Society of Black Engineers Convention',
    author: 'Dr. Lealon Martin',
    category: 'Student Spotlight',
    status: 'Approved',
    detail: 'ready for publishing',
  },
];

export function ReviewScreen() {
  return (
    <StudentScreenContainer>
      <StudentPageHeader title="Review" />
      <View style={styles.content}>
        <View style={styles.banner}>
          <PrimitiveIcon color={colors.universityGold} name="review" size={20} />
          <Text style={styles.bannerText}>1 submission awaiting review</Text>
          <PrimitiveIcon color="rgba(255,255,255,0.65)" name="chevronRight" size={18} />
        </View>

        <View style={styles.segmentRow}>
          {['Queue', 'Approved', 'Scheduled', 'Live', 'Resolved'].map((segment, index) => (
            <View key={segment} style={[styles.segment, index === 0 && styles.segmentActive]}>
              <Text style={[styles.segmentText, index === 0 && styles.segmentTextActive]}>
                {segment}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.list}>
          {reviewPosts.map((post) => (
            <View key={post.id} style={styles.reviewRow}>
              <View style={styles.thumbnail}>
                <PrimitiveIcon color={colors.textSecondary} name="document" size={22} />
              </View>
              <View style={styles.reviewCopy}>
                <Text numberOfLines={2} style={styles.reviewTitle}>{post.title}</Text>
                <View style={styles.metaRow}>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{post.status}</Text>
                  </View>
                  <Text style={styles.metaText}>{post.category}</Text>
                </View>
                <Text style={styles.detailText}>By {post.author} - {post.detail}</Text>
              </View>
            </View>
          ))}
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
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.tintGoldStrong,
    borderRadius: radii.pill,
  },
  statusText: {
    color: colors.primaryNavy,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
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
});
