import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';
import { BookmarkButton } from './BookmarkButton';
import { StudentSymbol } from './StudentSymbol';
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
        <StoryImage imageUrl={story.imageUrl} title={story.title} featured={featured} />
        <View style={styles.body}>
          <View style={styles.metaRow}>
            <Text style={styles.category}>{story.categoryLabel}</Text>
            <Text style={styles.date}>{publishDate}</Text>
          </View>
          <View style={styles.titleArea}>
            <Text style={[styles.title, featured && styles.featuredTitle]}>{story.title}</Text>
          </View>
          <View style={styles.readingRow}>
            <StudentSymbol color={colors.textSecondary} name="clock" size={14} />
            <Text style={styles.readingText}>
              {story.readingMinutes ? `${story.readingMinutes} min read` : 'Story'}
            </Text>
          </View>
          <Text style={[styles.summary, featured && styles.featuredSummary]}>{story.summary}</Text>
          <View style={styles.authorRow}>
            <Text style={styles.author}>By {story.author}</Text>
            <StudentSymbol color={colors.benchmarkBlue} name="chevronRight" size={18} />
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
    minWidth: 0,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderRadius: radii.xl,
    ...shadows.card,
  },
  cardPressTarget: {
    minWidth: 0,
    overflow: 'hidden',
    borderRadius: radii.xl,
  },
  body: {
    gap: spacing.sm,
    padding: 16,
  },
  metaRow: {
    minWidth: 0,
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
    flexShrink: 1,
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
    flexShrink: 1,
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
    marginTop: 2,
  },
  readingRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.xs,
  },
  readingText: {
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.medium,
    lineHeight: 15,
  },
  pressed: {
    opacity: 0.94,
  },
});
