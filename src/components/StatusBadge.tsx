import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, statusColors, statusLabels, typography } from '@/constants/theme';
import type { SubmissionStatus } from '@/types';

type StatusBadgeProps = {
  status: SubmissionStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const color = statusColors[status];

  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.text, { color }]}>{statusLabels[status]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radii.pill,
  },
  text: {
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
});
