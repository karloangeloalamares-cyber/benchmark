import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { StudentInternship } from '../types';
import { SampleBadge } from './SampleBadge';

type InternshipCardProps = {
  internship: StudentInternship;
  onPress: () => void;
};

function formatCompensation(value?: boolean) {
  if (value === undefined) {
    return undefined;
  }

  return value ? 'Paid' : 'Unpaid';
}

export function InternshipCard({ internship, onPress }: InternshipCardProps) {
  const compensation = formatCompensation(internship.isPaid);

  return (
    <Pressable
      accessibilityLabel={`${internship.title} at ${internship.organization}. View details.`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <Text style={styles.category}>{internship.category}</Text>
          <Text style={styles.title}>{internship.title}</Text>
          <Text style={styles.organization}>{internship.organization}</Text>
        </View>
        {internship.isSample ? <SampleBadge /> : null}
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>{internship.location}</Text>
        {internship.arrangement ? <Text style={styles.meta}>{internship.arrangement}</Text> : null}
        {compensation ? <Text style={styles.meta}>{compensation}</Text> : null}
      </View>

      {internship.deadline ? <Text style={styles.deadline}>{internship.deadline}</Text> : null}
      <Text style={styles.summary}>{internship.summary}</Text>
      <Text style={styles.action}>View details</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  titleGroup: {
    flex: 1,
    minWidth: 0,
  },
  category: {
    color: colors.warning,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.7,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: spacing.xs,
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  organization: {
    marginTop: spacing.xs,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  deadline: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  summary: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 21,
  },
  action: {
    color: colors.benchmarkBlue,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.92,
  },
});
