import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

export const SAMPLE_CONTENT_DISCLOSURE =
  'This is sample content. Verify dates, requirements, and opportunities through official university sources.';

type SampleBadgeProps = {
  label?: string;
  tone?: 'light' | 'dark';
};

export function SampleBadge({ label = 'Sample', tone = 'light' }: SampleBadgeProps) {
  const isDark = tone === 'dark';

  return (
    <View style={[styles.badge, isDark && styles.darkBadge]}>
      <Text style={[styles.text, isDark && styles.darkText]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.tintNavy,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  darkBadge: {
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.universityGold,
  },
  text: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
  darkText: {
    color: colors.primaryNavy,
  },
});
