import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';

type StudentPageHeaderProps = {
  title?: string;
  fallbackHref?: Href;
};

export function StudentPageHeader({ title, fallbackHref = '/' }: StudentPageHeaderProps) {
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
      <View style={styles.brandRow}>
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          onPress={handleBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <View style={styles.brandText}>
          <Text style={styles.context}>Southern University</Text>
          <Text style={styles.brand}>The Benchmark</Text>
        </View>
      </View>
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    backgroundColor: colors.primaryNavy,
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  backButton: {
    minWidth: 72,
    minHeight: layout.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    backgroundColor: colors.navyDeep,
    borderColor: colors.universityGold,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  backText: {
    color: colors.universityGold,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  brandText: {
    flex: 1,
    minWidth: 0,
  },
  context: {
    color: colors.universityGold,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.9,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  brand: {
    marginTop: spacing.xs,
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  title: {
    marginTop: spacing.lg,
    color: colors.surface,
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 30,
  },
  pressed: {
    opacity: 0.84,
  },
});
