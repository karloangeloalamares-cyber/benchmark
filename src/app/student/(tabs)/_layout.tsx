import { Tabs } from 'expo-router';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { colors, fontWeights, layout, spacing, typography } from '@/constants/theme';

type TabIconProps = {
  focused: boolean;
  icon: string;
};

function TabIcon({ focused, icon }: TabIconProps) {
  return (
    <View style={[styles.iconCircle, focused && styles.iconCircleActive]}>
      <Text style={[styles.iconText, focused && styles.iconTextActive]}>{icon}</Text>
    </View>
  );
}

export default function StudentTabsLayout() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const tabBarWidth = Math.min(width, layout.studentRorkTabBarWidth);
  const tabBarLeft = width > layout.studentMaxContentWidth
    ? (width - layout.studentMaxContentWidth) / 2
    : 0;

  return (
    <View style={styles.shell}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primaryNavy,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: fontWeights.semibold,
            lineHeight: 13,
          },
          tabBarIconStyle: {
            height: 24,
            marginBottom: 1,
          },
          tabBarStyle: {
            alignSelf: 'flex-start',
            height: layout.studentTabBarHeight,
            marginLeft: tabBarLeft,
            width: tabBarWidth,
            paddingBottom: spacing.sm,
            paddingTop: spacing.xs,
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          tabBarItemStyle: {
            flex: 1,
            minHeight: layout.touchTarget,
            minWidth: 0,
            paddingHorizontal: 0,
          },
        }}>
        <Tabs.Screen
          name="site"
          options={{
            tabBarAccessibilityLabel: 'Site tab',
            tabBarLabel: 'Site',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="G" />,
          }}
        />
        <Tabs.Screen
          name="internships"
          options={{
            tabBarAccessibilityLabel: 'Internships tab',
            tabBarLabel: 'Internships',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="B" />,
          }}
        />
        <Tabs.Screen
          name="my-posts"
          options={{
            tabBarAccessibilityLabel: 'My Posts tab',
            tabBarLabel: 'My Posts',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="P" />,
          }}
        />
        <Tabs.Screen
          name="review"
          options={{
            tabBarAccessibilityLabel: 'Review tab',
            tabBarLabel: 'Review',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="R" />,
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarAccessibilityLabel: 'More tab',
            tabBarLabel: 'More',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="M" />,
          }}
        />
      </Tabs>
      <Pressable
        accessibilityHint="Return to the Benchmark home page"
        accessibilityLabel="Home"
        accessibilityRole="button"
        onPress={() => router.replace('/student/site' as Href)}
        style={({ pressed }) => [
          styles.floatingHome,
          { right: Math.max(18, tabBarLeft + 18) },
          pressed && styles.pressed,
        ]}>
        <Text style={styles.floatingHomeText}>H</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
  iconCircle: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  iconCircleActive: {
    backgroundColor: colors.tintGoldStrong,
  },
  iconText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.bold,
    lineHeight: 14,
  },
  iconTextActive: {
    color: colors.primaryNavy,
  },
  floatingHome: {
    position: 'absolute',
    bottom: layout.studentTabBarHeight + spacing.lg,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryNavy,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1.5,
    borderRadius: 26,
    shadowColor: colors.primaryNavy,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  floatingHomeText: {
    color: colors.universityGold,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.heavy,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.85,
  },
});
