import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, shadows, spacing, typography } from '@/constants/theme';

type AppHeaderProps = {
  title: string;
  greeting?: string;
  label?: string;
  context?: string;
  onBack?: () => void;
};

export function AppHeader({ title, greeting, label, context, onBack }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>B</Text>
        </View>
        <View style={styles.brandTextGroup}>
          <Text style={styles.brandName}>Southern University Benchmark</Text>
          <Text style={styles.brandContext}>{context ?? 'Content Studio'}</Text>
        </View>
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.row}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>{title}</Text>
          {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
        </View>
        {onBack ? (
          <Pressable
            accessibilityLabel="Return to role selection"
            accessibilityRole="button"
            onPress={onBack}
            style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
            <Text style={styles.backButtonText}>Switch Role</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  brandMark: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryNavy,
    borderColor: colors.universityGold,
    borderWidth: 2,
    borderRadius: radii.pill,
  },
  brandMarkText: {
    color: colors.universityGold,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.heavy,
    lineHeight: 22,
  },
  brandTextGroup: {
    flex: 1,
    minWidth: 0,
  },
  brandName: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontSize: typography.brand,
    fontWeight: fontWeights.semibold,
    lineHeight: 23,
  },
  brandContext: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.primaryNavy,
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.sm,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
  },
  row: {
    gap: spacing.md,
  },
  titleGroup: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  greeting: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
  backButton: {
    minHeight: layout.touchTarget,
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  backButtonText: {
    color: colors.secondaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
  },
  pressed: {
    opacity: 0.82,
  },
});
