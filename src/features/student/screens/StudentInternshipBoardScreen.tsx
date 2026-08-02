import { useMemo, useState } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';
import { CategoryChipRow } from '../components/CategoryChipRow';
import { EmptyState } from '../components/EmptyState';
import { InternshipCard } from '../components/InternshipCard';
import { PrimitiveIcon } from '../components/PrimitiveIcon';
import { SearchField } from '../components/SearchField';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import {
  internshipCategories,
  studentInternships,
} from '../data/sampleContent';

const ALL_CATEGORY_SLUG = 'all';

function internshipHref(internshipId: string): Href {
  return `/student/internships/${internshipId}` as Href;
}

export function StudentInternshipBoardScreen() {
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
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <View style={styles.headerCopy}>
            <Text style={styles.headerTitle}>Internships</Text>
            <Text style={styles.headerSubtitle}>Opportunities for Southern University students</Text>
          </View>
          <View accessible={false} style={styles.headerPlus}>
            <PrimitiveIcon color={colors.universityGold} name="plus" size={20} />
          </View>
        </View>
        <SearchField
          accessibilityLabel="Search internships"
          onChangeText={setSearchText}
          placeholder="Search internships..."
          value={searchText}
          variant="masthead"
        />
      </View>
      <View style={styles.content}>
        <CategoryChipRow
          accessibilityLabelPrefix="Filter internships by"
          categories={internshipCategories}
          onSelect={setSelectedCategory}
          selectedSlug={selectedCategory}
        />

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
    minWidth: 0,
    gap: 14,
    padding: spacing.lg,
  },
  header: {
    minWidth: 0,
    gap: spacing.md,
    paddingHorizontal: 20,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.primaryNavy,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  headerCopy: {
    flex: 1,
    minWidth: 0,
  },
  headerTitle: {
    color: colors.surface,
    fontFamily: 'serif',
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 30,
  },
  headerSubtitle: {
    flexShrink: 1,
    color: 'rgba(255,255,255,0.72)',
    fontSize: typography.label,
    lineHeight: 16,
  },
  headerPlus: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.universityGold,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  list: {
    gap: 14,
  },
});
