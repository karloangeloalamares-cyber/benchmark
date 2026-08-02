import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

export function DemoContentNotice() {
  return (
    <View style={styles.notice}>
      <Text style={styles.label}>Demo content</Text>
      <Text style={styles.text}>
        Dates, opportunities, and announcements are samples. Verify details through official
        university sources.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notice: {
    padding: spacing.lg,
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  label: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  text: {
    maxWidth: 310,
    marginTop: spacing.xs,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
