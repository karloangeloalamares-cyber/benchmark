import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { RoleDefinition } from '@/types';

type RoleCardProps = {
  role: RoleDefinition;
  onPress: () => void;
};

export function RoleCard({ role, onPress }: RoleCardProps) {
  const marker = role.title.slice(0, 1);

  return (
    <Pressable
      accessibilityLabel={`Choose ${role.title} demo role. ${role.description}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.body}>
        <View style={styles.headingRow}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>{marker}</Text>
          </View>
          <View style={styles.copy}>
            <Text style={styles.title}>{role.title}</Text>
            <Text style={styles.description}>{role.description}</Text>
          </View>
        </View>
        <View style={styles.actionRow}>
          <Text style={styles.actionLabel}>Open workspace</Text>
          <Text aria-hidden style={styles.actionArrow}>→</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 156,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  body: {
    flex: 1,
    padding: spacing.lg,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  marker: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintGold,
    borderRadius: radii.pill,
  },
  markerText: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 24,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.semibold,
    lineHeight: 24,
  },
  description: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 23,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    paddingTop: spacing.md,
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  actionLabel: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  actionArrow: {
    color: colors.secondaryNavy,
    fontSize: typography.body,
    fontWeight: fontWeights.bold,
    lineHeight: 22,
  },
  pressed: {
    opacity: 0.86,
  },
});
