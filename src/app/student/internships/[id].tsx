import type { Href } from 'expo-router';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ContentNotFound } from '@/features/student/components/ContentNotFound';
import { InternshipDetailContent } from '@/features/student/components/InternshipDetailContent';
import { StudentPageHeader } from '@/features/student/components/StudentPageHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';
import { getInternshipById } from '@/features/student/utils/contentLookup';
import { spacing } from '@/constants/theme';

export default function StudentInternshipDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const internship = getInternshipById(id);

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        fallbackHref={'/student/internships' as Href}
        title={internship ? 'Internship details' : 'Internship not found'}
      />
      {internship ? (
        <InternshipDetailContent internship={internship} />
      ) : (
        <View style={styles.content}>
          <ContentNotFound
            actionLabel="View internships"
            onAction={() => router.replace('/student/internships' as Href)}
          />
        </View>
      )}
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
  },
});
