import type { GestureResponderEvent } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fontWeights, spacing, typography } from '@/constants/theme';
import { useSavedStories } from '../saved/useSavedStories';

type BookmarkButtonProps = {
  storyId: string;
  variant?: 'compact' | 'full';
};

export function BookmarkButton({ storyId, variant = 'compact' }: BookmarkButtonProps) {
  const { isSaved, toggleStory } = useSavedStories();
  const saved = isSaved(storyId);
  const label = saved ? 'Remove from Saved' : 'Save story';

  function handlePress(event: GestureResponderEvent) {
    event.stopPropagation();
    toggleStory(storyId);
  }

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      accessibilityState={{ selected: saved }}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        variant === 'full' && styles.fullButton,
        saved && styles.savedButton,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.symbol, saved && styles.savedText]}>{saved ? 'B' : 'b'}</Text>
      {variant === 'full' ? (
        <Text style={[styles.fullText, saved && styles.savedText]}>
          {saved ? 'Remove from Saved' : 'Save story'}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 34,
    minWidth: 34,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderColor: 'rgba(255,255,255,0.9)',
    borderWidth: 1,
    borderRadius: 17,
  },
  fullButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.tintBlue,
    borderColor: colors.benchmarkBlue,
  },
  savedButton: {
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.universityGold,
  },
  symbol: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  fullText: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  savedText: {
    color: colors.primaryNavy,
  },
  pressed: {
    opacity: 0.82,
  },
});
