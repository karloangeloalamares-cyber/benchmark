import type { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { colors, layout, spacing } from '@/constants/theme';

type StudentScreenContainerProps = {
  children: ReactNode;
};

export function StudentScreenContainer({ children }: StudentScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: spacing.xxl,
    backgroundColor: colors.backgroundSoft,
  },
  content: {
    width: '100%',
    maxWidth: layout.studentMaxContentWidth,
  },
});
