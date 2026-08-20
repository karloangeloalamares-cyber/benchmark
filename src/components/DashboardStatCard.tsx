import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, toneColors, typography } from '@/constants/theme';
import type { DashboardStat } from '@/types';

type DashboardStatCardProps = {
  stat: DashboardStat;
};

export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  const tone = toneColors[stat.tone ?? 'neutral'];

  return (
    <View style={styles.card}>
      <View style={[styles.accent, { backgroundColor: tone }]} />
      <Text style={[styles.value, { color: tone }]}>{stat.value}</Text>
      <Text style={styles.label}>{stat.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: 156,
    minWidth: 0,
    minHeight: 108,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.lg,
    ...shadows.soft,
  },
  accent: {
    width: 30,
    height: 3,
    marginBottom: spacing.md,
    borderRadius: radii.pill,
  },
  value: {
    fontSize: 30,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  label: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
});
