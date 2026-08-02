import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, shadows, spacing, typography } from '@/constants/theme';
import type { StudentInternship } from '../types';
import { StudentSymbol } from './StudentSymbol';
import { WorkflowStatusPill } from './WorkflowStatusPill';

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
      {internship.imageUrl ? (
        <Image
          accessibilityLabel={internship.imageAlt ?? `Image for ${internship.title}`}
          resizeMode="cover"
          source={{ uri: internship.imageUrl }}
          style={styles.image}
        />
      ) : null}

      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={styles.category}>{internship.category}</Text>
          <WorkflowStatusPill label="Open" tone="success" />
        </View>

        <Text style={styles.title}>{internship.title}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <StudentSymbol color={colors.textSecondary} name="building" size={14} />
            <Text style={styles.organization}>{internship.organization}</Text>
          </View>
          {internship.location ? (
            <View style={styles.metaItem}>
              <StudentSymbol color={colors.textSecondary} name="location" size={14} />
              <Text style={styles.meta}>{internship.location}</Text>
            </View>
          ) : null}
          {internship.arrangement ? (
            <View style={styles.metaItem}>
              <StudentSymbol color={colors.textSecondary} name="status" size={14} />
              <Text style={styles.meta}>{internship.arrangement}</Text>
            </View>
          ) : null}
        </View>

        <Text style={styles.summary}>{internship.summary}</Text>

        <View style={styles.footerRow}>
          {compensation ? <Text style={styles.compensation}>{compensation}</Text> : null}
          {internship.deadline ? (
            <View style={styles.deadlineItem}>
              <StudentSymbol color={colors.textSecondary} name="calendar" size={14} />
              <Text style={styles.deadline}>{internship.deadline}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 0,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderRadius: 18,
    ...shadows.card,
  },
  image: {
    width: '100%',
    height: 140,
  },
  body: {
    minWidth: 0,
    gap: spacing.sm,
    padding: 16,
  },
  headerRow: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  category: {
    flex: 1,
    minWidth: 0,
    color: colors.universityGold,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  title: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  organization: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
  metaRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  metaItem: {
    minWidth: 0,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  meta: {
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  deadline: {
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    lineHeight: 15,
  },
  summary: {
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 21,
  },
  footerRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingTop: spacing.xs,
  },
  deadlineItem: {
    minWidth: 0,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  compensation: {
    color: colors.success,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
  },
  pressed: {
    opacity: 0.92,
  },
});
