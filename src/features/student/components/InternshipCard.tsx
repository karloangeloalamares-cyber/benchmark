import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

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
          {internship.isSample ? <SampleBadge label="Open" /> : null}
        </View>

        <Text style={styles.title}>{internship.title}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.organization}>{internship.organization}</Text>
          {internship.location ? <Text style={styles.meta}>- {internship.location}</Text> : null}
        </View>

        <Text style={styles.summary}>{internship.summary}</Text>

        <View style={styles.footerRow}>
          {compensation ? <Text style={styles.compensation}>{compensation}</Text> : null}
          {internship.deadline ? <Text style={styles.deadline}>{internship.deadline}</Text> : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
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
    gap: spacing.sm,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  category: {
    color: colors.universityGold,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  organization: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  deadline: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    lineHeight: 15,
  },
  summary: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 21,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingTop: spacing.xs,
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
