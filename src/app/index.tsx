import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors, fontWeights, layout, radii, shadows, spacing, typography } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>B</Text>
          </View>
          <Text style={styles.kicker}>Visual MVP</Text>
          <Text style={styles.title}>Southern University Benchmark</Text>
          <Text style={styles.subtitle}>Mobile Content Publishing</Text>
          <Text style={styles.description}>
            A presentation demo for creating, reviewing, and publishing university stories in the
            Benchmark content studio.
          </Text>
          <Text style={styles.demoLabel}>Demo mode — mock data only</Text>
          <PrimaryButton
            accessibilityLabel="Enter demo role selection"
            onPress={() => router.push('/demo/role-select')}>
            Enter Demo
          </PrimaryButton>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCard: {
    width: '100%',
    maxWidth: layout.maxReadableWidth,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  brandMark: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
    backgroundColor: colors.primaryNavy,
    borderColor: colors.universityGold,
    borderWidth: 2,
    borderRadius: radii.pill,
  },
  brandMarkText: {
    color: colors.universityGold,
    fontSize: 28,
    fontWeight: fontWeights.heavy,
    lineHeight: 34,
  },
  kicker: {
    color: colors.warning,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    letterSpacing: 1,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
    marginTop: spacing.sm,
  },
  subtitle: {
    marginTop: spacing.sm,
    color: colors.secondaryNavy,
    fontSize: typography.subtitle,
    lineHeight: 28,
  },
  description: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
  demoLabel: {
    marginBottom: spacing.lg,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 22,
  },
});
