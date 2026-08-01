import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing, toneColors, typography } from '@/constants/theme';
import type { DashboardStat } from '@/types';

type DashboardStatCardProps = {
  stat: DashboardStat;
};

export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  const tone = toneColors[stat.tone ?? 'neutral'];

  return (
    <View style={styles.card}>
      <Text style={[styles.value, { color: tone }]}>{stat.value}</Text>
      <Text style={styles.label}>{stat.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: 148,
    minHeight: 104,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  value: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  label: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    fontWeight: '700',
    lineHeight: 20,
  },
});
