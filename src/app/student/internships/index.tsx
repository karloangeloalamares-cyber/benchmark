import { useMemo, useState } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { DemoContentNotice } from '@/features/student/components/DemoContentNotice';
import { EmptyState } from '@/features/student/components/EmptyState';
import { InternshipCard } from '@/features/student/components/InternshipCard';
import { InternshipFilters } from '@/features/student/components/InternshipFilters';
import { StudentPageHeader } from '@/features/student/components/StudentPageHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';
import {
  internshipCategories,
  studentInternships,
} from '@/features/student/data/sampleContent';
import { colors, fontWeights, spacing, typography } from '@/constants/theme';

const ALL_CATEGORY_SLUG = 'all';

function internshipHref(internshipId: string): Href {
  return `/student/internships/${internshipId}` as Href;
}

export default function StudentInternshipBoardScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY_SLUG);

  const filteredInternships = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return studentInternships.filter((internship) => {
      const matchesCategory =
        selectedCategory === ALL_CATEGORY_SLUG || internship.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        internship.title,
        internship.organization,
        internship.summary,
        internship.description,
        internship.category,
        internship.location,
        internship.arrangement,
      ].some((value) => value?.toLowerCase().includes(query));
    });
  }, [searchText, selectedCategory]);

  function resetFilters() {
    setSearchText('');
    setSelectedCategory(ALL_CATEGORY_SLUG);
  }

  return (
    <StudentScreenContainer>
      <StudentPageHeader title="Internship Board" />
      <View style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>Student opportunities</Text>
          <Text style={styles.title}>Browse sample internships</Text>
          <Text style={styles.subtitle}>
            Search and filter local fixture listings. Every item remains sample-only until a
            verified source is connected.
          </Text>
        </View>

        <DemoContentNotice />

        <InternshipFilters
          categories={internshipCategories}
          onCategoryChange={setSelectedCategory}
          onSearchTextChange={setSearchText}
          searchText={searchText}
          selectedCategory={selectedCategory}
        />

        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>Results</Text>
          <Text style={styles.resultCount}>{filteredInternships.length} shown</Text>
        </View>

        {filteredInternships.length > 0 ? (
          <View style={styles.list}>
            {filteredInternships.map((internship) => (
              <InternshipCard
                internship={internship}
                key={internship.id}
                onPress={() => router.push(internshipHref(internship.id))}
              />
            ))}
          </View>
        ) : (
          <EmptyState
            actionLabel="Reset internship filters"
            detail="Try a different term or category to return to the sample opportunity list."
            onReset={resetFilters}
            title="No internships match your filters."
          />
        )}
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
  },
  intro: {
    gap: spacing.sm,
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
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  subtitle: {
    maxWidth: 560,
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  resultTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  resultCount: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  list: {
    gap: spacing.lg,
  },
});
