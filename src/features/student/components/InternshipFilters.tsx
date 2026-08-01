import { StyleSheet, View } from 'react-native';

import { spacing } from '@/constants/theme';
import type { StudentCategory } from '../types';
import { CategoryChipRow } from './CategoryChipRow';
import { SearchField } from './SearchField';

type InternshipFiltersProps = {
  categories: StudentCategory[];
  searchText: string;
  selectedCategory: string;
  onSearchTextChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

export function InternshipFilters({
  categories,
  searchText,
  selectedCategory,
  onSearchTextChange,
  onCategoryChange,
}: InternshipFiltersProps) {
  return (
    <View style={styles.container}>
      <SearchField
        accessibilityLabel="Search internships"
        onChangeText={onSearchTextChange}
        placeholder="Search internships..."
        value={searchText}
      />
      <CategoryChipRow
        accessibilityLabelPrefix="Filter internships by"
        categories={categories}
        onSelect={onCategoryChange}
        selectedSlug={selectedCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});
