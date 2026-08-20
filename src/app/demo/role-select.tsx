import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppHeader } from '@/components/AppHeader';
import { RoleCard } from '@/components/RoleCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { spacing } from '@/constants/theme';
import { roleDefinitions } from '@/data/mockDashboard';

export default function RoleSelectScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <AppHeader
        actions={[
          {
            label: 'Back to Benchmark',
            onPress: () => router.replace('/student/site'),
            tone: 'primary',
            icon: 'back',
          },
        ]}
        context="Role Preview"
        detail="Preview how contributors, approvers, and administrators enter the Benchmark workspace. This demo area is read-only and separate from the public site."
        label="Demo mode — mock data only"
        title="Choose Demo Role"
      />
      <View style={styles.list}>
        {roleDefinitions.map((role) => (
          <RoleCard key={role.role} role={role} onPress={() => router.push(role.route)} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.lg,
  },
});
