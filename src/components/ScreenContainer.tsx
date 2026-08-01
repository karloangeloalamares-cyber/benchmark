import type { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { colors, layout, spacing } from '@/constants/theme';

type ScreenContainerProps = {
  children: ReactNode;
  centered?: boolean;
};

export function ScreenContainer({ children, centered = false }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.content, centered && styles.centered]}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundSoft,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  centered: {
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
  },
});
