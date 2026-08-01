import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing, typography } from '@/constants/theme';
import type { RoleDefinition } from '@/types';

type RoleCardProps = {
  role: RoleDefinition;
  onPress: () => void;
};

export function RoleCard({ role, onPress }: RoleCardProps) {
  return (
    <Pressable
      accessibilityLabel={`Choose ${role.title} demo role. ${role.description}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.accent} />
      <View style={styles.body}>
        <Text style={styles.title}>{role.title}</Text>
        <Text style={styles.description}>{role.description}</Text>
        <Text style={styles.action}>Open dashboard</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 132,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.md,
  },
  accent: {
    width: 6,
    backgroundColor: colors.universityGold,
  },
  body: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: '800',
    lineHeight: 24,
  },
  description: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 23,
  },
  action: {
    marginTop: spacing.lg,
    color: colors.info,
    fontSize: typography.small,
    fontWeight: '800',
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.86,
  },
});
