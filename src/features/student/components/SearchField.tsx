import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { colors, radii, spacing, typography } from '@/constants/theme';
import { PrimitiveIcon } from './PrimitiveIcon';

type SearchFieldProps = {
  accessibilityLabel?: string;
  placeholder?: string;
  variant?: 'light' | 'masthead';
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchField({
  accessibilityLabel = 'Search student stories',
  placeholder = 'Search stories...',
  variant = 'light',
  value,
  onChangeText,
}: SearchFieldProps) {
  const isMasthead = variant === 'masthead';
  const iconColor = isMasthead ? 'rgba(255,255,255,0.68)' : colors.textSecondary;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        isMasthead && styles.mastheadContainer,
        isFocused && styles.focusedContainer,
        isFocused && isMasthead && styles.focusedMastheadContainer,
      ]}>
      <PrimitiveIcon color={iconColor} name="search" size={18} />
      <TextInput
        accessibilityLabel={accessibilityLabel}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        placeholderTextColor={isMasthead ? 'rgba(255,255,255,0.55)' : colors.textSecondary}
        returnKeyType="search"
        style={[styles.input, isMasthead && styles.mastheadInput]}
        value={value}
      />
      {value ? (
        <Pressable
          accessibilityLabel="Clear search"
          accessibilityRole="button"
          hitSlop={6}
          onPress={() => onChangeText('')}
          style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]}>
          <PrimitiveIcon color={iconColor} name="close" size={16} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: spacing.sm,
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  mastheadContainer: {
    minHeight: 42,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 0,
  },
  focusedContainer: {
    borderColor: colors.benchmarkBlue,
    borderWidth: 2,
  },
  focusedMastheadContainer: {
    borderColor: colors.universityGold,
  },
  input: {
    flex: 1,
    minWidth: 0,
    minHeight: 44,
    paddingHorizontal: 0,
    color: colors.textPrimary,
    fontSize: typography.body,
    lineHeight: 22,
  },
  mastheadInput: {
    minHeight: 42,
    color: colors.surface,
    fontSize: typography.small,
    lineHeight: 20,
  },
  clearButton: {
    minHeight: 36,
    minWidth: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.pill,
  },
  pressed: {
    opacity: 0.7,
  },
});
