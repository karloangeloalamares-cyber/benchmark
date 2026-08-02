import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

export function StudentHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.mark}>
          <Text style={styles.markText}>B</Text>
        </View>
        <View style={styles.brandText}>
          <Text style={styles.context}>Southern University</Text>
          <Text style={styles.brand}>The Benchmark</Text>
        </View>
      </View>
      <Text style={styles.title}>
        Student News and{'\n'}Opportunities
      </Text>
      <Text style={styles.subtitle}>News, opportunities, events, and student stories.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    backgroundColor: colors.primaryNavy,
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  mark: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.navyDeep,
    borderColor: colors.universityGold,
    borderWidth: 2,
    borderRadius: radii.pill,
  },
  markText: {
    color: colors.universityGold,
    fontSize: 22,
    fontWeight: fontWeights.heavy,
    lineHeight: 26,
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
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 28,
  },
  title: {
    marginTop: spacing.xl,
    width: '100%',
    maxWidth: '100%',
    flexShrink: 1,
    color: colors.surface,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  subtitle: {
    marginTop: spacing.sm,
    width: '100%',
    maxWidth: 330,
    flexShrink: 1,
    color: colors.tintBlue,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
