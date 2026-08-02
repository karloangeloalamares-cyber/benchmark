import type { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

import { colors, layout, spacing } from '@/constants/theme';

type StudentScreenContainerProps = {
  children: ReactNode;
};

export function StudentScreenContainer({ children }: StudentScreenContainerProps) {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, layout.studentMaxContentWidth);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={[styles.content, { width: contentWidth }]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: spacing.xxl + layout.studentTabBarHeight,
    backgroundColor: colors.background,
  },
  content: {
    maxWidth: layout.studentMaxContentWidth,
  },
});
