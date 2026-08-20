import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';
import { StudentSymbol } from './StudentSymbol';

type StudentPageHeaderProps = {
  title?: string;
  subtitle?: string;
  fallbackHref?: Href;
  showBack?: boolean;
};

export function StudentPageHeader({
  title,
  subtitle,
  fallbackHref = '/student/site' as Href,
  showBack = true,
}: StudentPageHeaderProps) {
  const router = useRouter();

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace(fallbackHref);
  }

  return (
    <View style={styles.header}>
      {showBack ? (
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          hitSlop={8}
          onPress={handleBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <StudentSymbol color={colors.primaryNavy} name="back" size={16} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      ) : null}
      <View style={styles.copy}>
        <Text style={styles.brand}>Benchmark</Text>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minWidth: 0,
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  backButton: {
    minWidth: 72,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  backText: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  brand: {
    minWidth: 0,
    color: colors.benchmarkBlue,
    fontFamily: 'serif',
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 18,
  },
  title: {
    minWidth: 0,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  copy: {
    flex: 1,
    minWidth: 0,
    alignItems: 'flex-start',
  },
  pressed: {
    opacity: 0.84,
  },
});
