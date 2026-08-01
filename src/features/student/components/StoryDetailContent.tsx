import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';
import { getSafeExternalLink } from '../utils/externalLinks';
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
          <Text style={styles.author}>By {story.author}</Text>
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
    gap: spacing.lg,
    padding: spacing.lg,
  },
  heroCard: {
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  heroBody: {
    gap: spacing.md,
    padding: spacing.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    color: colors.primaryNavy,
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  summary: {
    color: colors.secondaryNavy,
    fontSize: typography.body,
    lineHeight: 24,
  },
  author: {
    color: colors.textSecondary,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  article: {
    width: '100%',
    maxWidth: layout.maxReadableWidth,
    gap: spacing.md,
    alignSelf: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.xl,
  },
  paragraph: {
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
