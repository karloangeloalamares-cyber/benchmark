import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { RoleCard } from '@/components/RoleCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors, spacing, typography } from '@/constants/theme';
import { roleDefinitions } from '@/data/mockDashboard';

export default function RoleSelectScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader title="Choose Demo Role" label="Demo mode — mock data only" />
      <Text style={styles.intro}>
        Select a role to preview the visual MVP dashboard shell.
      </Text>
      <View style={styles.list}>
        {roleDefinitions.map((role) => (
          <RoleCard key={role.role} role={role} onPress={() => router.push(role.route)} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginTop: -spacing.sm,
    marginBottom: spacing.xl,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
  list: {
    gap: spacing.lg,
  },
});
