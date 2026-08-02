import { useMemo, useState } from 'react';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, spacing, typography } from '@/constants/theme';
import { CategoryChipRow } from '../components/CategoryChipRow';
import { EmptyState } from '../components/EmptyState';
import { InternshipPromoCard } from '../components/InternshipPromoCard';
import { StoryCard } from '../components/StoryCard';
import { StudentHeader } from '../components/StudentHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import {
  internshipPromo,
  studentCategories,
  studentStories,
} from '../data/sampleContent';

const ALL_CATEGORY_SLUG = 'all';

function storyHref(storyId: string): Href {
  return `/student/posts/${storyId}` as Href;
}

export function StudentHomeScreen() {
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
      <StudentHeader searchText={searchText} onSearchTextChange={setSearchText} />
      <View style={styles.content}>
        <CategoryChipRow
          categories={studentCategories}
          selectedSlug={selectedCategorySlug}
          onSelect={setSelectedCategorySlug}
        />
        <InternshipPromoCard
          onPress={() => router.push('/student/internships' as Href)}
          promo={internshipPromo}
        />
        {featuredStory ? (
          <StoryCard
            featured
            onPress={() => router.push(storyHref(featuredStory.id))}
            story={featuredStory}
          />
        ) : null}
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
          <EmptyState
            detail="Try a different search term or category."
            onReset={resetFilters}
            title={searchText.trim() ? `No matches for "${searchText.trim()}"` : 'No published stories yet'}
          />
        )}
        <View style={styles.footer}>
          <View style={styles.footerRule} />
          <Text style={styles.footerText}>subenchmark.blooksy.com</Text>
        </View>
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingHorizontal: spacing.lg,
    paddingTop: 14,
  },
  storyList: {
    gap: 14,
  },
  footer: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingTop: 20,
    paddingBottom: spacing.xl,
  },
  footerRule: {
    width: '78%',
    height: 1,
    backgroundColor: 'rgba(5,24,56,0.1)',
  },
  footerText: {
    color: colors.benchmarkBlue,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    lineHeight: 15,
  },
});
