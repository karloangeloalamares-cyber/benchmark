import { MaterialIcons } from '@expo/vector-icons';
import { SymbolView, type SFSymbol, type SymbolScale, type SymbolWeight } from 'expo-symbols';
import type { ComponentProps, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/theme';

export type StudentSymbolName =
  | 'site'
  | 'internships'
  | 'myPosts'
  | 'review'
  | 'publish'
  | 'manage'
  | 'account'
  | 'saved'
  | 'home'
  | 'more'
  | 'search'
  | 'back'
  | 'calendar'
  | 'clock'
  | 'location'
  | 'building'
  | 'share'
  | 'status'
  | 'document'
  | 'close'
  | 'chevronRight'
  | 'check';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type SymbolMap = Record<StudentSymbolName, {
  ios: SFSymbol;
  fallback: MaterialIconName;
}>;

export const studentSymbolMap: SymbolMap = {
  site: { ios: 'globe.americas.fill', fallback: 'public' },
  internships: { ios: 'briefcase.fill', fallback: 'business-center' },
  myPosts: { ios: 'square.and.pencil', fallback: 'edit-square' },
  review: { ios: 'checkmark.seal', fallback: 'fact-check' },
  publish: {
    ios: 'dot.radiowaves.left.and.right',
    fallback: 'campaign',
  },
  manage: {
    ios: 'slider.horizontal.3',
    fallback: 'tune',
  },
  account: { ios: 'person.crop.circle', fallback: 'account-circle' },
  saved: { ios: 'bookmark.fill', fallback: 'bookmark' },
  home: { ios: 'house.fill', fallback: 'home' },
  more: { ios: 'ellipsis', fallback: 'more-horiz' },
  search: { ios: 'magnifyingglass', fallback: 'search' },
  back: { ios: 'chevron.left', fallback: 'arrow-back-ios-new' },
  calendar: { ios: 'calendar', fallback: 'calendar-month' },
  clock: { ios: 'clock.fill', fallback: 'schedule' },
  location: { ios: 'mappin.and.ellipse', fallback: 'location-on' },
  building: { ios: 'building.2.fill', fallback: 'apartment' },
  share: { ios: 'square.and.arrow.up', fallback: 'share' },
  status: { ios: 'checkmark.circle.fill', fallback: 'check-circle' },
  document: { ios: 'doc.text.fill', fallback: 'description' },
  close: { ios: 'xmark', fallback: 'close' },
  chevronRight: { ios: 'chevron.right', fallback: 'chevron-right' },
  check: { ios: 'checkmark.circle.fill', fallback: 'check-circle' },
};

type StudentSymbolProps = {
  name: StudentSymbolName;
  color?: string;
  size?: number;
  weight?: SymbolWeight;
  scale?: SymbolScale;
  fallback?: ReactNode;
};

export function StudentSymbol({
  name,
  color = colors.primaryNavy,
  size = 20,
  weight = 'regular',
  scale = 'medium',
  fallback,
}: StudentSymbolProps) {
  const symbol = studentSymbolMap[name];

  return (
    <View
      accessibilityElementsHidden
      accessible={false}
      aria-hidden={true}
      importantForAccessibility="no-hide-descendants"
      pointerEvents="none"
      style={[styles.frame, { height: size, width: size }]}>
      <SymbolView
        fallback={
          fallback ?? (
            <MaterialIcons color={color} name={symbol.fallback} size={size} style={styles.materialFallback} />
          )
        }
        name={symbol.ios}
        scale={scale}
        size={size}
        tintColor={color}
        type="monochrome"
        weight={weight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  fallback: {
    fontWeight: '700',
    textAlign: 'center',
  },
  materialFallback: {
    textAlign: 'center',
  },
});
