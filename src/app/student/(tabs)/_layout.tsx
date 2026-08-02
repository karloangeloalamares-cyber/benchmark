import { Tabs } from 'expo-router';
import type { Href } from 'expo-router';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fontWeights, layout, spacing } from '@/constants/theme';
import { StudentSymbol, type StudentSymbolName } from '@/features/student/components/StudentSymbol';
import {
  activeStudentParityRole,
  getStudentNavigationModel,
  type StudentDestination,
  type StudentDestinationKey,
} from '@/features/student/navigation/studentDestinations';

type TabBarRoute = {
  key: string;
  name: string;
};

type TabBarProps = {
  state: {
    index: number;
    routes: TabBarRoute[];
  };
  navigation: {
    emit: (event: { type: 'tabPress'; target: string; canPreventDefault: true }) => {
      defaultPrevented?: boolean;
    };
    navigate: (name: string) => void;
  };
};

const routeNameByDestination: Record<StudentDestinationKey, string> = {
  site: 'site',
  internships: 'internships',
  myPosts: 'my-posts',
  review: 'review',
  publish: 'publish',
  manage: 'manage',
  account: 'account',
};

function TabIcon({ focused, name }: { focused: boolean; name: StudentSymbolName }) {
  return (
    <StudentSymbol
      color={focused ? colors.primaryNavy : colors.textSecondary}
      name={name}
      size={21}
      weight={focused ? 'semibold' : 'regular'}
    />
  );
}

function isDestinationFocused(pathname: string, destination: StudentDestination) {
  if (destination.key === 'site') {
    return pathname === destination.route;
  }

  return pathname.startsWith(destination.route as string);
}

function StudentTabBar({ state, navigation }: TabBarProps) {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { directDestinations, overflowDestinations, hasOverflow } =
    getStudentNavigationModel(activeStudentParityRole);
  const visibleTabs = hasOverflow
    ? [
        ...directDestinations,
        {
          key: 'more' as const,
          label: 'More',
          route: '/student/more' as Href,
          symbol: 'more' as StudentSymbolName,
        },
      ]
    : directDestinations;

  const bottomInset = Math.max(insets.bottom, 4);

  return (
    <View style={[styles.tabBarFrame, { paddingBottom: bottomInset }]}>
      <View accessibilityRole="tablist" style={styles.tabBar}>
        {visibleTabs.map((tab) => {
          const routeName = tab.key === 'more'
            ? 'more'
            : routeNameByDestination[tab.key as StudentDestinationKey];
          const route = state.routes.find((item) => item.name === routeName);
          const overflowFocused = tab.key === 'more'
            && (
              pathname === '/student/saved'
              || overflowDestinations.some((destination) => isDestinationFocused(pathname, destination))
            );
          const focused = tab.key === 'more'
            ? pathname === '/student/more' || overflowFocused
            : isDestinationFocused(pathname, tab as StudentDestination);

          function handlePress() {
            if (!route) {
              return;
            }

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          }

          return (
            <Pressable
              accessibilityHint={tab.key === 'more' ? 'Opens overflow navigation destinations' : undefined}
              accessibilityLabel={`${tab.label} tab`}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              aria-selected={focused}
              key={tab.key}
              onPress={handlePress}
              style={({ pressed }) => [
                styles.tabItem,
                focused && styles.tabItemActive,
                pressed && styles.pressed,
              ]}>
              <TabIcon focused={focused} name={tab.symbol} />
              <Text
                numberOfLines={1}
                style={[styles.tabLabel, focused && styles.tabLabelActive]}>
                {tab.label}
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
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabBarLeft = width > layout.studentMaxContentWidth
    ? (width - layout.studentMaxContentWidth) / 2
    : 0;

  return (
    <View style={styles.shell}>
      <Tabs
        tabBar={(props) => <StudentTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primaryNavy,
          tabBarInactiveTintColor: colors.textSecondary,
        }}>
        <Tabs.Screen name="site" />
        <Tabs.Screen name="internships" />
        <Tabs.Screen name="my-posts" />
        <Tabs.Screen name="review" />
        <Tabs.Screen name="publish" />
        <Tabs.Screen name="manage" />
        <Tabs.Screen name="account" />
        <Tabs.Screen name="saved" />
        <Tabs.Screen name="more" />
      </Tabs>
      <Pressable
        accessibilityHint="Return to the Benchmark home page"
        accessibilityLabel="Home"
        accessibilityRole="button"
        onPress={() => router.replace('/student/site' as Href)}
        style={({ pressed }) => [
          styles.floatingHome,
          {
            bottom: Math.max(88, insets.bottom + 88),
            right: Math.max(18, tabBarLeft + 18),
          },
          pressed && styles.floatingHomePressed,
        ]}>
        <View pointerEvents="none" style={styles.homeGradientBase} />
        <View pointerEvents="none" style={styles.homeGradientShade} />
        <StudentSymbol color={colors.universityGold} name="home" size={21} weight="semibold" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
  tabBarFrame: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderTopColor: 'rgba(5,24,56,0.12)',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabBar: {
    width: '100%',
    maxWidth: layout.studentMaxContentWidth,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingTop: 5,
  },
  tabItem: {
    flex: 1,
    minWidth: 0,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 1,
  },
  tabItemActive: {
    backgroundColor: 'transparent',
  },
  tabLabel: {
    maxWidth: '100%',
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: fontWeights.medium,
    lineHeight: 12,
    textAlign: 'center',
  },
  tabLabelActive: {
    color: colors.primaryNavy,
    fontWeight: fontWeights.semibold,
  },
  floatingHome: {
    position: 'absolute',
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.primaryNavy,
    borderColor: 'rgba(254,206,52,0.35)',
    borderWidth: 1.5,
    borderRadius: 26,
    shadowColor: colors.primaryNavy,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  floatingHomePressed: {
    transform: [{ scale: 0.88 }],
  },
  homeGradientBase: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.primaryNavy,
  },
  homeGradientShade: {
    position: 'absolute',
    top: -16,
    left: -18,
    width: 70,
    height: 70,
    backgroundColor: colors.navyDeep,
    borderRadius: 35,
    opacity: 0.72,
  },
  pressed: {
    opacity: 0.72,
  },
});
