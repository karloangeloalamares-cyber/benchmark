import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';
import { SearchField } from './SearchField';
import { StudentSymbol } from './StudentSymbol';

type StudentHeaderProps = {
  searchText: string;
  onSearchTextChange: (value: string) => void;
};

export function StudentHeader({ searchText, onSearchTextChange }: StudentHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <View pointerEvents="none" style={styles.headerWash} />
      <View pointerEvents="none" style={styles.decorativeCircle} />

      <View style={styles.brandText}>
        <Text style={styles.brand}>Benchmark</Text>
        <Text style={styles.context}>powered by the College of Sciences and Engineering</Text>
      </View>

      <Text style={styles.subtitle}>
        Showcasing Southern University's excellence to the world.
      </Text>

      <Pressable
        accessibilityHint="Opens the demo role selection screen. No real authentication is configured."
        accessibilityLabel="Sign In to demo roles"
        accessibilityRole="button"
        hitSlop={8}
        onPress={() => router.push('/demo/role-select' as Href)}
        style={({ pressed }) => [styles.signInButton, pressed && styles.pressed]}>
        <StudentSymbol color={colors.navyDeep} name="account" size={15} />
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>

      <SearchField
        accessibilityLabel="Search stories"
        onChangeText={onSearchTextChange}
        placeholder="Search stories..."
        value={searchText}
        variant="masthead"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    overflow: 'hidden',
    gap: spacing.md,
    paddingHorizontal: 20,
    paddingTop: spacing.lg,
    paddingBottom: 20,
    backgroundColor: colors.primaryNavy,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerWash: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: colors.navyDeep,
    opacity: 0.28,
  },
  decorativeCircle: {
    position: 'absolute',
    top: -110,
    right: -100,
    width: 260,
    height: 260,
    backgroundColor: colors.benchmarkLightBlue,
    borderRadius: 130,
    opacity: 0.16,
  },
  brandText: {
    minWidth: 0,
  },
  context: {
    marginTop: spacing.xs,
    color: colors.universityGold,
    fontSize: typography.label,
    fontStyle: 'italic',
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
    lineHeight: 16,
  },
  brand: {
    color: colors.surface,
    fontFamily: 'serif',
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  subtitle: {
    maxWidth: 520,
    flexShrink: 1,
    color: 'rgba(255,255,255,0.72)',
    fontSize: typography.small,
    lineHeight: 20,
  },
  signInButton: {
    alignSelf: 'flex-start',
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.universityGold,
    borderRadius: radii.pill,
  },
  signInText: {
    color: colors.navyDeep,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.82,
  },
});
