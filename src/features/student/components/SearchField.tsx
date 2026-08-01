import { StyleSheet, TextInput, View } from 'react-native';

import { colors, layout, radii, spacing, typography } from '@/constants/theme';

type SearchFieldProps = {
  accessibilityLabel?: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchField({
  accessibilityLabel = 'Search student stories',
  placeholder = 'Search stories...',
  value,
  onChangeText,
}: SearchFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        accessibilityLabel={accessibilityLabel}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        returnKeyType="search"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: layout.touchTarget,
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
    borderWidth: 1,
    borderRadius: radii.pill,
  },
  input: {
    minHeight: layout.touchTarget,
    paddingHorizontal: spacing.lg,
    color: colors.textPrimary,
    fontSize: typography.body,
    lineHeight: 22,
  },
});
