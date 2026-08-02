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
        <Text style={styles.iconText}>B</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{promo.title}</Text>
        <Text style={styles.description}>Browse opportunities for Southern University students</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.card,
  },
  iconBox: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintGoldStrong,
    borderRadius: 12,
  },
  iconText: {
    color: colors.universityGold,
    fontSize: typography.small,
    fontWeight: fontWeights.heavy,
    lineHeight: 18,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  description: {
    marginTop: 3,
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  arrow: {
    color: colors.universityGold,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.9,
  },
});
