import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, spacing, typography } from '@/constants/theme';

type SectionHeaderProps = {
  title: string;
  detail?: string;
};

export function SectionHeader({ title, detail }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {detail ? <Text style={styles.detail}>{detail}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.title,
    fontWeight: fontWeights.semibold,
    lineHeight: 30,
  },
  detail: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
