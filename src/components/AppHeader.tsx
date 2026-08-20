import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentSymbol, type StudentSymbolName } from '@/features/student/components/StudentSymbol';

type AppHeaderProps = {
  title: string;
  greeting?: string;
  label?: string;
  context?: string;
  detail?: string;
  roleLabel?: string;
  actions?: Array<{
    label: string;
    onPress: () => void;
    accessibilityLabel?: string;
    icon?: StudentSymbolName;
    tone?: 'primary' | 'secondary';
  }>;
};

export function AppHeader({
  title,
  greeting,
  label,
  context,
  detail,
  roleLabel,
  actions = [],
}: AppHeaderProps) {
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
      <View style={styles.heroBlock}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View style={styles.titleGroup}>
          <Text style={styles.title}>{title}</Text>
          {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
          {detail ? <Text style={styles.detail}>{detail}</Text> : null}
        </View>
        {roleLabel ? (
          <View style={styles.rolePill}>
            <StudentSymbol color={colors.primaryNavy} name="account" size={14} />
            <Text style={styles.rolePillText}>{roleLabel}</Text>
          </View>
        ) : null}
      </View>
      {actions.length ? (
        <View style={styles.actionRow}>
          {actions.map((action) => {
            const isPrimary = action.tone === 'primary';

            return (
              <Pressable
                accessibilityLabel={action.accessibilityLabel ?? action.label}
                accessibilityRole="button"
                key={action.label}
                onPress={action.onPress}
                style={({ pressed }) => [
                  styles.actionButton,
                  isPrimary ? styles.primaryActionButton : styles.secondaryActionButton,
                  pressed && styles.pressed,
                ]}>
                {action.icon ? (
                  <StudentSymbol
                    color={isPrimary ? colors.surface : colors.primaryNavy}
                    name={action.icon}
                    size={16}
                    weight="semibold"
                  />
                ) : null}
                <Text
                  style={[
                    styles.actionButtonText,
                    isPrimary ? styles.primaryActionButtonText : styles.secondaryActionButtonText,
                  ]}>
                  {action.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
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
  heroBlock: {
    gap: spacing.md,
  },
  titleGroup: {
    gap: spacing.sm,
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
  detail: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 22,
  },
  rolePill: {
    alignSelf: 'flex-start',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  rolePillText: {
    color: colors.primaryNavy,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.4,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  actionButton: {
    minHeight: layout.touchTarget,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  primaryActionButton: {
    backgroundColor: colors.primaryNavy,
    borderColor: colors.primaryNavy,
  },
  secondaryActionButton: {
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
  },
  actionButtonText: {
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  primaryActionButtonText: {
    color: colors.surface,
  },
  secondaryActionButtonText: {
    color: colors.primaryNavy,
  },
  pressed: {
    opacity: 0.82,
  },
});
