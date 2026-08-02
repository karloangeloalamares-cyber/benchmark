import { SymbolView, type AndroidSymbol, type SFSymbol, type SymbolScale, type SymbolWeight } from 'expo-symbols';
import type { ReactNode } from 'react';
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

type SymbolMap = Record<StudentSymbolName, {
  ios: SFSymbol;
  android: AndroidSymbol;
  web: AndroidSymbol;
}>;

export const studentSymbolMap: SymbolMap = {
  site: { ios: 'globe.americas.fill', android: 'public', web: 'public' },
  internships: { ios: 'briefcase.fill', android: 'business_center', web: 'business_center' },
  myPosts: { ios: 'square.and.pencil', android: 'edit_square', web: 'edit_square' },
  review: { ios: 'checkmark.seal', android: 'approval', web: 'approval' },
  publish: {
    ios: 'dot.radiowaves.left.and.right',
    android: 'campaign',
    web: 'campaign',
  },
  manage: {
    ios: 'slider.horizontal.3',
    android: 'tune',
    web: 'tune',
  },
  account: { ios: 'person.crop.circle', android: 'account_circle', web: 'account_circle' },
  saved: { ios: 'bookmark.fill', android: 'bookmark', web: 'bookmark' },
  home: { ios: 'house.fill', android: 'home', web: 'home' },
  more: { ios: 'ellipsis', android: 'more_horiz', web: 'more_horiz' },
  search: { ios: 'magnifyingglass', android: 'search', web: 'search' },
  back: { ios: 'chevron.left', android: 'arrow_back_ios_new', web: 'arrow_back_ios_new' },
  calendar: { ios: 'calendar', android: 'calendar_month', web: 'calendar_month' },
  clock: { ios: 'clock.fill', android: 'schedule', web: 'schedule' },
  location: { ios: 'mappin.and.ellipse', android: 'location_on', web: 'location_on' },
  building: { ios: 'building.2.fill', android: 'apartment', web: 'apartment' },
  share: { ios: 'square.and.arrow.up', android: 'share', web: 'share' },
  status: { ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' },
  document: { ios: 'doc.text.fill', android: 'description', web: 'description' },
  close: { ios: 'xmark', android: 'close', web: 'close' },
  chevronRight: { ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' },
  check: { ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' },
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
  return (
    <View
      accessibilityElementsHidden
      accessible={false}
      aria-hidden={true}
      importantForAccessibility="no-hide-descendants"
      pointerEvents="none"
      style={[styles.frame, { height: size, width: size }]}>
      <SymbolView
        fallback={fallback ?? <Text style={[styles.fallback, { color, fontSize: size, lineHeight: size }]}>?</Text>}
        name={studentSymbolMap[name]}
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
});
