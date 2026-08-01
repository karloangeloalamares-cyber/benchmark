import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { InternshipPromo } from '../types';

type InternshipPromoCardProps = {
  promo: InternshipPromo;
  onPress: () => void;
};

export function InternshipPromoCard({ promo, onPress }: InternshipPromoCardProps) {
  return (
    <Pressable
      accessibilityLabel="Explore internships"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.iconBox}>
        <Text style={styles.iconText}>IB</Text>
      </View>
      <View style={styles.copy}>
        <View style={styles.headingRow}>
          <Text style={styles.status}>{promo.statusLabel}</Text>
          {promo.isSample ? <Text style={styles.sample}>Sample</Text> : null}
        </View>
        <Text style={styles.title}>{promo.title}</Text>
        <Text style={styles.description}>{promo.description}</Text>
        <Text style={styles.action}>Explore internships</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.primaryNavy,
    borderColor: colors.universityGold,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  iconBox: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.universityGold,
    borderRadius: radii.lg,
  },
  iconText: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.heavy,
    lineHeight: 18,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  headingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  status: {
    color: colors.universityGold,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  sample: {
    color: colors.tintBlue,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
  title: {
    marginTop: spacing.sm,
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  description: {
    marginTop: spacing.xs,
    color: colors.tintBlue,
    fontSize: typography.small,
    lineHeight: 21,
  },
  action: {
    marginTop: spacing.md,
    color: colors.universityGold,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.9,
  },
});
