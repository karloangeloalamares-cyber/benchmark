import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';
import { StoryImage } from './StoryImage';
import { StoryMetadata } from './StoryMetadata';

type StoryCardProps = {
  story: StudentStory;
  featured?: boolean;
};

export function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <Pressable
      accessibilityLabel={`${story.title}. Details will be added in the next student app phase.`}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      {featured ? (
        <View style={styles.featuredLabel}>
          <Text style={styles.featuredLabelText}>Featured story</Text>
        </View>
      ) : null}
      <StoryImage imageUrl={story.imageUrl} title={story.title} featured={featured} />
      <View style={[styles.body, featured && styles.featuredBody]}>
        <View style={styles.badgeRow}>
          <StoryMetadata story={story} />
          {story.isSample ? (
            <View style={styles.sampleBadge}>
              <Text style={styles.sampleText}>Sample</Text>
            </View>
          ) : null}
        </View>
        <Text style={[styles.title, featured && styles.featuredTitle]}>{story.title}</Text>
        <Text style={[styles.summary, featured && styles.featuredSummary]}>{story.summary}</Text>
        <Text style={styles.author}>By {story.author}</Text>
        <Text style={styles.nextLabel}>Details coming next</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
    ...shadows.card,
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
    padding: spacing.lg,
  },
  featuredBody: {
    paddingTop: spacing.xl,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  sampleBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.tintNavy,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  sampleText: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    lineHeight: 16,
  },
  title: {
    marginTop: spacing.md,
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  featuredTitle: {
    fontSize: typography.title,
    lineHeight: 30,
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
    marginTop: spacing.md,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  nextLabel: {
    marginTop: spacing.md,
    color: colors.benchmarkBlue,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.94,
  },
});
