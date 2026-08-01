import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { ContributorSubmission } from '@/types';

import { StatusBadge } from './StatusBadge';

type SubmissionSummaryCardProps = {
  submission: ContributorSubmission;
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function SubmissionSummaryCard({ submission }: SubmissionSummaryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.thumbnail}>
        <Text style={styles.thumbnailText}>Story</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.category}>{submission.category}</Text>
          <StatusBadge status={submission.status} />
        </View>
        <Text style={styles.title}>{submission.title}</Text>
        <Text style={styles.detail}>Updated {formatDate(submission.lastUpdated)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  thumbnail: {
    minHeight: 64,
    justifyContent: 'flex-end',
    padding: spacing.md,
    backgroundColor: colors.tintBlue,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  thumbnailText: {
    alignSelf: 'flex-start',
    color: colors.primaryNavy,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.8,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
  body: {
    padding: spacing.lg,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  category: {
    color: colors.warning,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.7,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: spacing.md,
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.semibold,
    lineHeight: 25,
  },
  detail: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
