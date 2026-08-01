import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import { getSafeExternalLink, openSafeExternalLink } from '../utils/externalLinks';

type ExternalActionButtonProps = {
  label: string;
  url?: string;
  variant?: 'primary' | 'secondary';
};

export function ExternalActionButton({ label, url, variant = 'primary' }: ExternalActionButtonProps) {
  const [failed, setFailed] = useState(false);
  const safeLink = getSafeExternalLink(url);

  if (!safeLink.isAvailable) {
    return null;
  }

  async function handlePress() {
    const opened = await openSafeExternalLink(safeLink.url);
    setFailed(!opened);
  }

  const isSecondary = variant === 'secondary';

  return (
    <>
      <Pressable
        accessibilityLabel={`${label}. Opens an external link.`}
        accessibilityRole="link"
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          isSecondary && styles.secondaryButton,
          pressed && styles.pressed,
        ]}>
        <Text style={[styles.label, isSecondary && styles.secondaryLabel]}>{label}</Text>
      </Pressable>
      {failed ? <Text style={styles.error}>The external link could not be opened.</Text> : null}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: layout.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primaryNavy,
    borderColor: colors.primaryNavy,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderColor: colors.borderStrong,
  },
  label: {
    color: colors.surface,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
    textAlign: 'center',
  },
  secondaryLabel: {
    color: colors.primaryNavy,
  },
  error: {
    color: colors.danger,
    fontSize: typography.small,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.84,
  },
});
