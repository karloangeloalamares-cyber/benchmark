import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, spacing, typography } from '@/constants/theme';
import type { StudentStory } from '../types';

type StoryMetadataProps = {
  story: StudentStory;
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function StoryMetadata({ story }: StoryMetadataProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{story.categoryLabel}</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.meta}>{formatDate(story.publishedAt)}</Text>
      {story.readingMinutes ? (
        <>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{story.readingMinutes} min read</Text>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.xs,
  },
  category: {
    color: colors.warning,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.7,
    lineHeight: 15,
    textTransform: 'uppercase',
  },
  dot: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 18,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
