import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing, typography } from '@/constants/theme';

type AppHeaderProps = {
  title: string;
  greeting?: string;
  label?: string;
  onBack?: () => void;
};

export function AppHeader({ title, greeting, label, onBack }: AppHeaderProps) {
  return (
    <View style={styles.container}>
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
            <Text style={styles.backButtonText}>Roles</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.primaryNavy,
    backgroundColor: '#FFF4D6',
    borderColor: '#F8D47B',
    borderWidth: 1,
    borderRadius: radii.sm,
    fontSize: typography.small,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.lg,
  },
  titleGroup: {
    flex: 1,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: '800',
    lineHeight: 36,
  },
  greeting: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
  backButton: {
    minHeight: 44,
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
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.82,
  },
});
