import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/components/ScreenContainer';
import { colors, radii, spacing, typography } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer centered>
      <View style={styles.content}>
        <View style={styles.mark} />
        <Text style={styles.title}>Southern University Benchmark</Text>
        <Text style={styles.subtitle}>Mobile Content Publishing</Text>
        <Text style={styles.label}>Visual MVP</Text>
        <Pressable
          accessibilityLabel="Enter demo role selection"
          accessibilityRole="button"
          onPress={() => router.push('/demo/role-select')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Enter Demo</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  mark: {
    width: 56,
    height: 6,
    marginBottom: spacing.xl,
    backgroundColor: colors.universityGold,
    borderRadius: 3,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: '700',
    lineHeight: 36,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.lg,
    color: colors.secondaryNavy,
    fontSize: typography.subtitle,
    lineHeight: 28,
    textAlign: 'center',
  },
  label: {
    marginTop: spacing.sm,
    color: colors.warning,
    fontSize: typography.body,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  button: {
    minWidth: 156,
    minHeight: 52,
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryNavy,
    borderBottomColor: colors.universityGold,
    borderBottomWidth: 4,
    borderRadius: radii.md,
  },
  buttonPressed: {
    opacity: 0.86,
  },
  buttonText: {
    color: colors.surface,
    fontSize: typography.body,
    fontWeight: '700',
    lineHeight: 22,
  },
});
