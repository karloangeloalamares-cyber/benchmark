import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import type { StudentCategory } from '../types';

type CategoryChipRowProps = {
  accessibilityLabelPrefix?: string;
  categories: StudentCategory[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
};

export function CategoryChipRow({
  accessibilityLabelPrefix = 'Filter stories by',
  categories,
  selectedSlug,
  onSelect,
}: CategoryChipRowProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}>
      {categories.map((category) => {
        const isSelected = selectedSlug === category.slug;

        return (
          <Pressable
            accessibilityLabel={`${accessibilityLabelPrefix} ${category.label}`}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
            key={category.id}
            onPress={() => onSelect(category.slug)}
            style={({ pressed }) => [
              styles.chip,
              isSelected && styles.selectedChip,
              pressed && styles.pressed,
            ]}>
            <View style={[styles.indicator, isSelected && styles.selectedIndicator]} />
            <Text style={[styles.label, isSelected && styles.selectedLabel]} numberOfLines={1}>
              {category.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingRight: spacing.lg,
  },
  chip: {
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: 14,
    backgroundColor: colors.tintNavy,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  selectedChip: {
    backgroundColor: colors.primaryNavy,
    borderColor: colors.primaryNavy,
  },
  indicator: {
    width: 0,
    height: 0,
    borderRadius: radii.pill,
    backgroundColor: colors.borderStrong,
  },
  selectedIndicator: {
    backgroundColor: colors.universityGold,
  },
  label: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  selectedLabel: {
    color: colors.surface,
  },
  pressed: {
    opacity: 0.82,
  },
});
