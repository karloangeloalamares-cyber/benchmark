import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';

type EmptyStateProps = {
  onReset: () => void;
};

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No stories match your search.</Text>
      <Text style={styles.detail}>Try a different term or return to the full student feed.</Text>
      <Pressable
        accessibilityLabel="Clear search and filters"
        accessibilityRole="button"
        onPress={onReset}
        style={({ pressed }) => [styles.resetButton, pressed && styles.pressed]}>
        <Text style={styles.resetText}>Clear search and filters</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
    textAlign: 'center',
  },
  detail: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  resetButton: {
    minHeight: layout.touchTarget,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryNavy,
    borderRadius: radii.lg,
  },
  resetText: {
    color: colors.surface,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.86,
  },
});
