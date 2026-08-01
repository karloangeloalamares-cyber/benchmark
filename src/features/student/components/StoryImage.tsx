import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, spacing, typography } from '@/constants/theme';

type StoryImageProps = {
  accessibilityLabel?: string;
  imageUrl?: string;
  title: string;
  featured?: boolean;
};

export function StoryImage({ accessibilityLabel, imageUrl, title, featured = false }: StoryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!imageUrl || hasError) {
    return (
      <View style={[styles.imageFrame, featured && styles.featuredFrame, styles.fallback]}>
        <Text style={styles.fallbackLabel}>Story preview</Text>
      </View>
    );
  }

  return (
    <View style={[styles.imageFrame, featured && styles.featuredFrame]}>
      <Image
        accessibilityLabel={accessibilityLabel ?? `Image for ${title}`}
        onError={() => setHasError(true)}
        resizeMode="cover"
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageFrame: {
    width: '100%',
    aspectRatio: 1.8,
    overflow: 'hidden',
    backgroundColor: colors.tintBlue,
  },
  featuredFrame: {
    aspectRatio: 1.55,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fallback: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: spacing.lg,
  },
  fallbackLabel: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.semibold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
});
