import { StyleSheet, TextInput, View } from 'react-native';

import { colors, layout, radii, spacing, typography } from '@/constants/theme';

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

  return (
    <View style={[styles.container, isMasthead && styles.mastheadContainer]}>
      <TextInput
        accessibilityLabel={accessibilityLabel}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={isMasthead ? 'rgba(255,255,255,0.55)' : colors.textSecondary}
        returnKeyType="search"
        style={[styles.input, isMasthead && styles.mastheadInput]}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 44,
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  mastheadContainer: {
    minHeight: 42,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderColor: 'rgba(255,255,255,0.12)',
  },
  input: {
    minHeight: 44,
    paddingHorizontal: spacing.lg,
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
});
