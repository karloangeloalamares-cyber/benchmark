import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

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
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        onPress={handleBack}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>
      <Text style={styles.brand}>Benchmark</Text>
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  backButton: {
    minWidth: 66,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
    textAlign: 'center',
  },
  title: {
    flex: 1,
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
    textAlign: 'right',
  },
  pressed: {
    opacity: 0.84,
  },
});
