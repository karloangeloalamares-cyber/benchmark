import { Tabs } from 'expo-router';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { colors, fontWeights, layout, spacing, typography } from '@/constants/theme';

function TabIndicator({ focused }: { focused: boolean }) {
  return <View style={[styles.tabIndicator, focused && styles.tabIndicatorActive]} />;
}

export default function StudentTabsLayout() {
  const { width } = useWindowDimensions();
  const tabBarWidth = Math.min(width, layout.studentCompactNavWidth);
  const tabBarLeft = width > layout.studentMaxContentWidth
    ? (width - layout.studentMaxContentWidth) / 2
    : 0;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryNavy,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: fontWeights.bold,
          lineHeight: 14,
        },
        tabBarIconStyle: {
          height: 8,
          marginBottom: spacing.xs,
        },
        tabBarStyle: {
          alignSelf: 'flex-start',
          height: layout.studentTabBarHeight,
          marginLeft: tabBarLeft,
          width: tabBarWidth,
          paddingBottom: spacing.md,
          paddingTop: spacing.xs,
          backgroundColor: colors.surface,
          borderTopColor: colors.borderStrong,
        },
        tabBarItemStyle: {
          flex: 1,
          minHeight: layout.touchTarget,
          minWidth: 0,
          paddingHorizontal: spacing.xs,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarAccessibilityLabel: 'Home tab',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <TabIndicator focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="internships"
        options={{
          tabBarAccessibilityLabel: 'Internships tab',
          tabBarLabel: 'Internships',
          tabBarIcon: ({ focused }) => <TabIndicator focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarAccessibilityLabel: 'Saved tab',
          tabBarLabel: 'Saved',
          tabBarIcon: ({ focused }) => <TabIndicator focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarAccessibilityLabel: 'Account tab',
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => <TabIndicator focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIndicator: {
    width: 28,
    height: 3,
    marginTop: spacing.xs,
    backgroundColor: 'transparent',
    borderRadius: 3,
  },
  tabIndicatorActive: {
    backgroundColor: colors.universityGold,
  },
});
