import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';

type PrimaryButtonProps = {
  children: ReactNode;
  accessibilityLabel: string;
  onPress?: () => void;
  variant?: 'navy' | 'gold';
};

export function PrimaryButton({
  children,
  accessibilityLabel,
  onPress,
  variant = 'navy',
}: PrimaryButtonProps) {
  const isGold = variant === 'gold';

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isGold ? styles.goldButton : styles.navyButton,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.text, isGold ? styles.goldText : styles.navyText]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: layout.touchTarget,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.lg,
  },
  navyButton: {
    backgroundColor: colors.primaryNavy,
    borderBottomColor: colors.universityGold,
    borderBottomWidth: 4,
  },
  goldButton: {
    backgroundColor: colors.universityGold,
    borderBottomColor: colors.primaryNavy,
    borderBottomWidth: 4,
  },
  text: {
    fontSize: typography.body,
    fontWeight: fontWeights.semibold,
    lineHeight: 22,
  },
  navyText: {
    color: colors.surface,
  },
  goldText: {
    color: colors.primaryNavy,
  },
  pressed: {
    opacity: 0.86,
  },
});
