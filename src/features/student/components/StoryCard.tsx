import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';
import { BookmarkButton } from './BookmarkButton';
import { SampleBadge } from './SampleBadge';
import { StoryImage } from './StoryImage';

type StoryCardProps = {
  story: StudentStory;
  featured?: boolean;
  onPress?: () => void;
};

export function StoryCard({ story, featured = false, onPress }: StoryCardProps) {
  const publishDate = new Date(`${story.publishedAt}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.card}>
      <Pressable
        accessibilityLabel={`${story.title}. View story details.`}
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.cardPressTarget, pressed && styles.pressed]}>
        {featured ? (
          <View style={styles.featuredLabel}>
            <Text style={styles.featuredLabelText}>Featured story</Text>
          </View>
        ) : null}
        <StoryImage imageUrl={story.imageUrl} title={story.title} featured={featured} />
        <View style={[styles.body, featured && styles.featuredBody]}>
          <View style={styles.metaRow}>
            <Text style={styles.category}>{story.categoryLabel}</Text>
            <Text style={styles.date}>{publishDate}</Text>
          </View>
          <View style={styles.titleArea}>
            <Text style={[styles.title, featured && styles.featuredTitle]}>{story.title}</Text>
          </View>
          <View style={styles.readingRow}>
            <Text style={styles.clock}>c</Text>
            <Text style={styles.readingText}>
              {story.readingMinutes ? `${story.readingMinutes} min read` : 'Story'}
            </Text>
            {story.isSample ? <SampleBadge label="Sample" /> : null}
          </View>
          <Text style={[styles.summary, featured && styles.featuredSummary]}>{story.summary}</Text>
          <View style={styles.authorRow}>
            <Text style={styles.author}>By {story.author}</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.bookmarkSlot}>
        <BookmarkButton storyId={story.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  cardPressTarget: {
    overflow: 'hidden',
    borderRadius: radii.xl,
  },
  featuredLabel: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    backgroundColor: colors.surface,
  },
  featuredLabelText: {
    alignSelf: 'flex-start',
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  body: {
    padding: 16,
  },
  featuredBody: {
    paddingTop: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  category: {
    flex: 1,
    color: colors.universityGold,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  date: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  title: {
    marginTop: spacing.md,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  featuredTitle: {
    fontSize: typography.title,
    lineHeight: 29,
  },
  titleArea: {
    minWidth: 0,
  },
  bookmarkSlot: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 2,
  },
  summary: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 21,
  },
  featuredSummary: {
    fontSize: typography.body,
    lineHeight: 24,
  },
  author: {
    flex: 1,
    minWidth: 0,
    color: colors.secondaryNavy,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  arrow: {
    color: colors.benchmarkBlue,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 18,
  },
  readingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  clock: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 15,
  },
  readingText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.medium,
    lineHeight: 15,
  },
  pressed: {
    opacity: 0.94,
  },
});
