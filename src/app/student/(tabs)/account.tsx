import type { Href } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '@/features/student/components/StudentPageHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';

export default function StudentAccountScreen() {
  return (
    <StudentScreenContainer>
      <StudentPageHeader fallbackHref={'/student/home' as Href} title="Account" />
      <View style={styles.content}>
        <View style={styles.panel}>
          <Text style={styles.eyebrow}>Demo account status</Text>
          <Text style={styles.title}>Student accounts are not enabled in this demo.</Text>
          <Text style={styles.body}>
            You can browse stories and internships without signing in. Saved stories are temporary
            in this demo and will reset when the app session restarts.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current demo capabilities</Text>
          <Text style={styles.listItem}>Browse sample student stories.</Text>
          <Text style={styles.listItem}>Search and filter sample internship listings.</Text>
          <Text style={styles.listItem}>Save stories temporarily during the current session.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Future account capabilities</Text>
          <Text style={styles.listItem}>Permanent saved stories.</Text>
          <Text style={styles.listItem}>Notification preferences.</Text>
          <Text style={styles.listItem}>Personalized university updates.</Text>
        </View>
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
  },
  panel: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  eyebrow: {
    color: colors.warning,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: spacing.sm,
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  body: {
    marginTop: spacing.md,
    color: colors.secondaryNavy,
    fontSize: typography.body,
    lineHeight: 24,
  },
  section: {
    gap: spacing.sm,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  sectionTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  listItem: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
