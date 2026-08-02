import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';
import { getSafeExternalLink } from '../utils/externalLinks';
import { BookmarkButton } from './BookmarkButton';
import { DemoContentNotice } from './DemoContentNotice';
import { ExternalActionButton } from './ExternalActionButton';
import { SampleBadge } from './SampleBadge';
import { StoryImage } from './StoryImage';
import { StoryMetadata } from './StoryMetadata';

type StoryDetailContentProps = {
  story: StudentStory;
};

export function StoryDetailContent({ story }: StoryDetailContentProps) {
  const paragraphs = story.body
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const hasValidCta = getSafeExternalLink(story.ctaUrl).isAvailable;

  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        <StoryImage
          accessibilityLabel={story.imageAlt}
          featured
          imageUrl={story.imageUrl}
          title={story.title}
        />
        <View style={styles.heroBody}>
          <View style={styles.badgeRow}>
            <StoryMetadata story={story} />
            {story.isSample ? <SampleBadge label="Sample content" /> : null}
          </View>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.summary}>{story.summary}</Text>
          <View style={styles.actionRow}>
            <Text style={styles.author}>By {story.author}</Text>
            <BookmarkButton storyId={story.id} variant="full" />
          </View>
        </View>
      </View>

      {story.isSample ? <DemoContentNotice /> : null}

      <View style={styles.article}>
        {paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        {story.sourceLabel ? <Text style={styles.source}>{story.sourceLabel}</Text> : null}

        {hasValidCta ? (
          <ExternalActionButton label={story.ctaLabel ?? 'Open source link'} url={story.ctaUrl} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 0,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  heroCard: {
    minWidth: 0,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  heroBody: {
    minWidth: 0,
    gap: spacing.md,
    padding: spacing.lg,
  },
  badgeRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing.sm,
  },
  title: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  summary: {
    flexShrink: 1,
    color: colors.secondaryNavy,
    fontSize: typography.body,
    lineHeight: 24,
  },
  author: {
    flex: 1,
    minWidth: 0,
    color: colors.textSecondary,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  actionRow: {
    minWidth: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  article: {
    maxWidth: layout.maxReadableWidth,
    minWidth: 0,
    gap: spacing.md,
    alignSelf: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  paragraph: {
    flexShrink: 1,
    color: colors.textPrimary,
    fontSize: typography.body,
    lineHeight: 25,
  },
  source: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
});
