import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

export type WorkflowStatusTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

type WorkflowStatusPillProps = {
  label: string;
  tone?: WorkflowStatusTone;
};

const toneColors: Record<WorkflowStatusTone, string> = {
  neutral: colors.textSecondary,
  info: colors.benchmarkBlue,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
};

export function WorkflowStatusPill({ label, tone = 'neutral' }: WorkflowStatusPillProps) {
  const tint = toneColors[tone];

  return (
    <View accessibilityLabel={`Status: ${label}`} style={[styles.pill, { backgroundColor: `${tint}1F` }]}>
      <View style={[styles.dot, { backgroundColor: tint }]} />
      <Text style={[styles.label, { color: tint }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  label: {
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.5,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
});
