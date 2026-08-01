import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing, statusColors, statusLabels, typography } from '@/constants/theme';
import type { SubmissionStatus } from '@/types';

type StatusBadgeProps = {
  status: SubmissionStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const color = statusColors[status];

  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{statusLabels[status]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderRadius: radii.sm,
  },
  text: {
    fontSize: typography.label,
    fontWeight: '800',
    lineHeight: 16,
    textTransform: 'uppercase',
  },
});
