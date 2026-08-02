import { Tabs } from 'expo-router';
import type { Href } from 'expo-router';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { colors, fontWeights, layout, spacing } from '@/constants/theme';
import { PrimitiveIcon, type PrimitiveIconName } from '@/features/student/components/PrimitiveIcon';

type TabIconProps = {
  focused: boolean;
  icon: PrimitiveIconName;
};

type TabBarRoute = {
  key: string;
  name: string;
};

type TabDescriptor = {
  options: {
    tabBarAccessibilityLabel?: string;
    tabBarLabel?: unknown;
    title?: string;
  };
};

type TabBarProps = {
  state: {
    index: number;
    routes: TabBarRoute[];
  };
  descriptors: Record<string, TabDescriptor>;
  navigation: {
    emit: (event: { type: 'tabPress'; target: string; canPreventDefault: true }) => {
      defaultPrevented?: boolean;
    };
    navigate: (name: string) => void;
  };
};

const tabIcons: Record<string, PrimitiveIconName> = {
  site: 'site',
  internships: 'briefcase',
  'my-posts': 'document',
  review: 'review',
  more: 'more',
};

function TabIcon({ focused, icon }: TabIconProps) {
  const color = focused ? colors.primaryNavy : colors.textSecondary;

  return (
    <View style={[styles.iconCircle, focused && styles.iconCircleActive]}>
      <PrimitiveIcon color={color} name={icon} size={18} />
    </View>
  );
}

function StudentTabBar({ state, descriptors, navigation }: TabBarProps) {
  return (
    <View style={styles.tabBarFrame}>
      <View accessibilityRole="tablist" style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const options = descriptors[route.key]?.options ?? {};
          const label = typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title ?? route.name;
          const accessibilityLabel = options.tabBarAccessibilityLabel ?? `${label} tab`;

          function handlePress() {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          return (
            <Pressable
              accessibilityLabel={accessibilityLabel}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              key={route.key}
              onPress={handlePress}
              style={({ pressed }) => [
                styles.tabItem,
                pressed && styles.pressed,
              ]}>
              <TabIcon focused={focused} icon={tabIcons[route.name] ?? 'document'} />
              <Text
                numberOfLines={1}
                style={[styles.tabLabel, focused && styles.tabLabelActive]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function StudentTabsLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const tabBarLeft = width > layout.studentMaxContentWidth
    ? (width - layout.studentMaxContentWidth) / 2
    : 0;
  const showFloatingHome = pathname !== '/student/site';

  return (
    <View style={styles.shell}>
      <Tabs
        tabBar={(props) => <StudentTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primaryNavy,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: fontWeights.semibold,
            lineHeight: 12,
          },
          tabBarIconStyle: {
            height: 22,
            marginBottom: 0,
          },
          tabBarStyle: {
            alignSelf: 'center',
            height: layout.studentTabBarHeight,
            width: '100%',
            maxWidth: layout.studentRorkTabBarWidth,
            paddingBottom: spacing.xs,
            paddingTop: 6,
            paddingHorizontal: 0,
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
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="site" />,
          }}
        />
        <Tabs.Screen
          name="internships"
          options={{
            tabBarAccessibilityLabel: 'Internships tab',
            tabBarLabel: 'Internships',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="briefcase" />,
          }}
        />
        <Tabs.Screen
          name="my-posts"
          options={{
            tabBarAccessibilityLabel: 'My Posts tab',
            tabBarLabel: 'My Posts',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="document" />,
          }}
        />
        <Tabs.Screen
          name="review"
          options={{
            tabBarAccessibilityLabel: 'Review tab',
            tabBarLabel: 'Review',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="review" />,
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarAccessibilityLabel: 'More tab',
            tabBarLabel: 'More',
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="more" />,
          }}
        />
      </Tabs>
      {showFloatingHome ? (
        <Pressable
          accessibilityHint="Return to the Benchmark site tab"
          accessibilityLabel="Return to Site"
          accessibilityRole="button"
          onPress={() => router.replace('/student/site' as Href)}
          style={({ pressed }) => [
            styles.floatingHome,
            { right: Math.max(18, tabBarLeft + 18) },
            pressed && styles.pressed,
          ]}>
          <PrimitiveIcon color={colors.universityGold} name="home" size={22} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
  tabBarFrame: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  tabBar: {
    width: '100%',
    maxWidth: layout.studentRorkTabBarWidth,
    height: layout.studentTabBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
    paddingBottom: spacing.xs,
  },
  tabItem: {
    flex: 1,
    minWidth: 0,
    minHeight: layout.touchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    borderRadius: 8,
  },
  tabLabel: {
    maxWidth: '100%',
    color: colors.textSecondary,
    fontSize: 9,
    fontWeight: fontWeights.medium,
    lineHeight: 11,
    textAlign: 'center',
  },
  tabLabelActive: {
    color: colors.primaryNavy,
    fontWeight: fontWeights.bold,
  },
  iconCircle: {
    width: 26,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  iconCircleActive: {
    backgroundColor: colors.tintGoldStrong,
  },
  floatingHome: {
    position: 'absolute',
    bottom: layout.studentTabBarHeight + spacing.xl,
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
  pressed: {
    opacity: 0.85,
  },
});
