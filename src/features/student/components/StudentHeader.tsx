import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';
import { SearchField } from './SearchField';

type StudentHeaderProps = {
  searchText: string;
  onSearchTextChange: (value: string) => void;
};

export function StudentHeader({ searchText, onSearchTextChange }: StudentHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <View style={styles.utilityRow}>
        <Pressable
          accessibilityLabel="Sign In"
          accessibilityRole="button"
          onPress={() => router.push('/demo/role-select' as Href)}
          style={({ pressed }) => [styles.signInButton, pressed && styles.pressed]}>
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
      </View>

      <View style={styles.brandText}>
        <Text style={styles.brand}>Benchmark</Text>
        <Text style={styles.context}>powered by the College of Sciences and Engineering</Text>
      </View>

      <Text style={styles.subtitle}>
        Showcasing Southern University's excellence to the world.
      </Text>

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
    width: '100%',
    gap: spacing.md,
    paddingHorizontal: 20,
    paddingTop: spacing.lg,
    paddingBottom: 20,
    backgroundColor: colors.primaryNavy,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  utilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    width: '100%',
    maxWidth: 520,
    flexShrink: 1,
    color: 'rgba(255,255,255,0.72)',
    fontSize: typography.small,
    lineHeight: 20,
  },
  signInButton: {
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
    backgroundColor: colors.universityGold,
    borderRadius: radii.pill,
  },
  signInText: {
    color: colors.navyDeep,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.82,
  },
});
