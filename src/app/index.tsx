import { useMemo, useState } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { CategoryChipRow } from '@/features/student/components/CategoryChipRow';
import { DemoContentNotice } from '@/features/student/components/DemoContentNotice';
import { EmptyState } from '@/features/student/components/EmptyState';
import { InternshipPromoCard } from '@/features/student/components/InternshipPromoCard';
import { SearchField } from '@/features/student/components/SearchField';
import { StoryCard } from '@/features/student/components/StoryCard';
import { StudentHeader } from '@/features/student/components/StudentHeader';
import { StudentScreenContainer } from '@/features/student/components/StudentScreenContainer';
import {
  internshipPromo,
  studentCategories,
  studentStories,
} from '@/features/student/data/sampleContent';
import { colors, fontWeights, spacing, typography } from '@/constants/theme';

const ALL_CATEGORY_SLUG = 'all';

function storyHref(storyId: string): Href {
  return `/student/posts/${storyId}` as Href;
}

export default function StudentHomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(ALL_CATEGORY_SLUG);

  const filteredStories = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return studentStories.filter((story) => {
      const matchesCategory =
        selectedCategorySlug === ALL_CATEGORY_SLUG || story.categorySlug === selectedCategorySlug;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [story.title, story.summary, story.categoryLabel, story.author].some((value) =>
        value.toLowerCase().includes(query),
      );
    });
  }, [searchText, selectedCategorySlug]);

  const featuredStory = filteredStories.find((story) => story.isFeatured);
  const feedStories = featuredStory
    ? filteredStories.filter((story) => story.id !== featuredStory.id)
    : filteredStories;
  const hasMatches = filteredStories.length > 0;

  function resetFilters() {
    setSearchText('');
    setSelectedCategorySlug(ALL_CATEGORY_SLUG);
  }

  return (
    <StudentScreenContainer>
      <StudentHeader />
      <View style={styles.content}>
        <SearchField value={searchText} onChangeText={setSearchText} />
        <CategoryChipRow
          categories={studentCategories}
          selectedSlug={selectedCategorySlug}
          onSelect={setSelectedCategorySlug}
        />
        <DemoContentNotice />
        {featuredStory ? (
          <StoryCard
            featured
            onPress={() => router.push(storyHref(featuredStory.id))}
            story={featuredStory}
          />
        ) : null}
        <InternshipPromoCard
          onPress={() => router.push('/student/internships' as Href)}
          promo={internshipPromo}
        />
        <View style={styles.feedHeader}>
          <View style={styles.feedTitleGroup}>
            <Text style={styles.feedLabel}>Student Feed</Text>
            <Text style={styles.feedTitle}>Latest sample stories</Text>
          </View>
          <Text style={styles.feedCount}>{filteredStories.length} shown</Text>
        </View>
        {hasMatches ? (
          <View style={styles.storyList}>
            {feedStories.map((story) => (
              <StoryCard
                key={story.id}
                onPress={() => router.push(storyHref(story.id))}
                story={story}
              />
            ))}
          </View>
        ) : (
          <EmptyState onReset={resetFilters} />
        )}
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  feedTitleGroup: {
    flex: 1,
    minWidth: 0,
  },
  feedLabel: {
    color: colors.warning,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  feedTitle: {
    marginTop: spacing.xs,
    color: colors.primaryNavy,
    fontSize: typography.title,
    fontWeight: fontWeights.bold,
    lineHeight: 30,
  },
  feedCount: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  storyList: {
    gap: spacing.lg,
  },
});
