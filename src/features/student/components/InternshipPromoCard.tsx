import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { InternshipPromo } from '../types';
import { StudentSymbol } from './StudentSymbol';

type InternshipPromoCardProps = {
  promo: InternshipPromo;
  onPress: () => void;
};

export function InternshipPromoCard({ promo, onPress }: InternshipPromoCardProps) {
  return (
    <Pressable
      accessibilityLabel="Open Internship Board"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.iconBox}>
        <StudentSymbol color={colors.universityGold} name="internships" size={21} />
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{promo.title}</Text>
        <Text style={styles.description}>{promo.description}</Text>
      </View>
      <StudentSymbol color={colors.universityGold} name="chevronRight" size={19} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 0,
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
    flexShrink: 1,
    marginTop: 3,
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.9,
  },
});
