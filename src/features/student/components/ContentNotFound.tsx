import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';

type ContentNotFoundProps = {
  title?: string;
  message?: string;
  actionLabel: string;
  onAction: () => void;
};

export function ContentNotFound({
  title = 'Content unavailable',
  message = 'This content is unavailable or may have been removed.',
  actionLabel,
  onAction,
}: ContentNotFoundProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable
        accessibilityLabel={actionLabel}
        accessibilityRole="button"
        onPress={onAction}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>{actionLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.md,
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
  message: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    minHeight: layout.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.primaryNavy,
    borderRadius: radii.lg,
  },
  buttonText: {
    color: colors.surface,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.84,
  },
});
