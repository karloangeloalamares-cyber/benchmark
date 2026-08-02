import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants/theme';

export type PrimitiveIconName =
  | 'arrowRight'
  | 'bookmark'
  | 'briefcase'
  | 'check'
  | 'chevronLeft'
  | 'chevronRight'
  | 'clock'
  | 'close'
  | 'document'
  | 'home'
  | 'more'
  | 'plus'
  | 'review'
  | 'search'
  | 'site'
  | 'user';

type PrimitiveIconProps = {
  name: PrimitiveIconName;
  color?: string;
  size?: number;
};

export function PrimitiveIcon({
  name,
  color = colors.primaryNavy,
  size = 20,
}: PrimitiveIconProps) {
  const stroke = Math.max(1.5, Math.round(size * 0.1));
  const dot = Math.max(3, Math.round(size * 0.18));
  const scaled = (value: number) => (value / 20) * size;

  const strokeStyle = {
    borderColor: color,
    borderWidth: stroke,
  };

  return (
    <View
      accessible={false}
      pointerEvents="none"
      style={[styles.root, { height: size, width: size }]}>
      {name === 'site' ? (
        <>
          <View style={[styles.circle, strokeStyle, styles.fill]} />
          <View style={[styles.siteVertical, { backgroundColor: color, width: stroke }]} />
          <View style={[styles.siteHorizontal, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'user' ? (
        <>
          <View style={[styles.circle, strokeStyle]} />
          <View style={[styles.userHead, { backgroundColor: color }]} />
          <View style={[styles.userShoulders, strokeStyle]} />
        </>
      ) : null}

      {name === 'briefcase' ? (
        <>
          <View style={[styles.briefcase, strokeStyle]} />
          <View style={[styles.briefcaseHandle, strokeStyle]} />
          <View style={[styles.briefcaseLine, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'document' ? (
        <>
          <View style={[styles.document, strokeStyle]} />
          <View style={[styles.documentLine, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.documentLineShort, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'review' ? (
        <>
          <View style={[styles.circle, strokeStyle]} />
          <View style={[styles.checkShort, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.checkLong, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'more' ? (
        <View style={styles.dotRow}>
          {[0, 1, 2].map((item) => (
            <View key={item} style={{ backgroundColor: color, borderRadius: dot / 2, height: dot, width: dot }} />
          ))}
        </View>
      ) : null}

      {name === 'home' ? (
        <>
          <View style={[styles.homeRoofLeft, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.homeRoofRight, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.homeBody, strokeStyle]} />
        </>
      ) : null}

      {name === 'bookmark' ? (
        <>
          <View style={[styles.bookmark, strokeStyle]} />
          <View
            style={[
              styles.bookmarkCutout,
              {
                borderBottomColor: colors.surface,
                borderLeftWidth: scaled(4),
                borderRightWidth: scaled(4),
                borderTopWidth: scaled(5),
              },
            ]}
          />
        </>
      ) : null}

      {name === 'search' ? (
        <>
          <View style={[styles.searchCircle, strokeStyle]} />
          <View style={[styles.searchHandle, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'close' ? (
        <>
          <View style={[styles.closeLineA, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.closeLineB, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'clock' ? (
        <>
          <View style={[styles.circle, strokeStyle]} />
          <View style={[styles.clockHandHour, { backgroundColor: color, width: stroke }]} />
          <View style={[styles.clockHandMinute, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'arrowRight' || name === 'chevronRight' || name === 'chevronLeft' ? (
        <>
          {name === 'arrowRight' ? (
            <View style={[styles.arrowBody, { backgroundColor: color, height: stroke }]} />
          ) : null}
          <View
            style={[
              styles.chevronTop,
              name === 'chevronLeft' && styles.chevronLeftTop,
              { backgroundColor: color, height: stroke },
            ]}
          />
          <View
            style={[
              styles.chevronBottom,
              name === 'chevronLeft' && styles.chevronLeftBottom,
              { backgroundColor: color, height: stroke },
            ]}
          />
        </>
      ) : null}

      {name === 'check' ? (
        <>
          <View style={[styles.checkShort, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.checkLong, { backgroundColor: color, height: stroke }]} />
        </>
      ) : null}

      {name === 'plus' ? (
        <>
          <View style={[styles.plusHorizontal, { backgroundColor: color, height: stroke }]} />
          <View style={[styles.plusVertical, { backgroundColor: color, width: stroke }]} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  fill: {
    backgroundColor: 'transparent',
  },
  circle: {
    borderRadius: 999,
    height: '86%',
    width: '86%',
  },
  siteVertical: {
    height: '78%',
    position: 'absolute',
  },
  siteHorizontal: {
    position: 'absolute',
    width: '78%',
  },
  userHead: {
    borderRadius: 999,
    height: '24%',
    position: 'absolute',
    top: '24%',
    width: '24%',
  },
  userShoulders: {
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 999,
    bottom: '20%',
    height: '26%',
    position: 'absolute',
    width: '46%',
  },
  briefcase: {
    borderRadius: 3,
    height: '58%',
    marginTop: '20%',
    width: '82%',
  },
  briefcaseHandle: {
    borderBottomWidth: 0,
    borderRadius: 3,
    height: '24%',
    position: 'absolute',
    top: '8%',
    width: '38%',
  },
  briefcaseLine: {
    position: 'absolute',
    top: '50%',
    width: '78%',
  },
  document: {
    borderRadius: 3,
    height: '82%',
    width: '66%',
  },
  documentLine: {
    marginTop: '16%',
    position: 'absolute',
    width: '36%',
  },
  documentLineShort: {
    marginTop: '36%',
    position: 'absolute',
    width: '26%',
  },
  checkShort: {
    borderRadius: 999,
    position: 'absolute',
    right: '48%',
    top: '53%',
    transform: [{ rotate: '45deg' }],
    width: '28%',
  },
  checkLong: {
    borderRadius: 999,
    left: '42%',
    position: 'absolute',
    top: '48%',
    transform: [{ rotate: '-48deg' }],
    width: '44%',
  },
  dotRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'center',
  },
  homeRoofLeft: {
    borderRadius: 999,
    left: '17%',
    position: 'absolute',
    top: '33%',
    transform: [{ rotate: '-42deg' }],
    width: '42%',
  },
  homeRoofRight: {
    borderRadius: 999,
    position: 'absolute',
    right: '17%',
    top: '33%',
    transform: [{ rotate: '42deg' }],
    width: '42%',
  },
  homeBody: {
    borderTopWidth: 0,
    height: '40%',
    marginTop: '32%',
    width: '56%',
  },
  bookmark: {
    borderRadius: 3,
    height: '82%',
    width: '58%',
  },
  bookmarkCutout: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.surface,
    bottom: '9%',
    height: 0,
    position: 'absolute',
    width: 0,
  },
  searchCircle: {
    borderRadius: 999,
    height: '58%',
    left: '13%',
    position: 'absolute',
    top: '13%',
    width: '58%',
  },
  searchHandle: {
    borderRadius: 999,
    bottom: '18%',
    position: 'absolute',
    right: '14%',
    transform: [{ rotate: '45deg' }],
    width: '34%',
  },
  closeLineA: {
    borderRadius: 999,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    width: '72%',
  },
  closeLineB: {
    borderRadius: 999,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    width: '72%',
  },
  clockHandHour: {
    height: '28%',
    position: 'absolute',
    top: '25%',
  },
  clockHandMinute: {
    left: '48%',
    position: 'absolute',
    top: '50%',
    width: '25%',
  },
  arrowBody: {
    borderRadius: 999,
    position: 'absolute',
    width: '62%',
  },
  chevronTop: {
    borderRadius: 999,
    position: 'absolute',
    right: '17%',
    top: '36%',
    transform: [{ rotate: '45deg' }],
    width: '38%',
  },
  chevronBottom: {
    borderRadius: 999,
    position: 'absolute',
    right: '17%',
    top: '59%',
    transform: [{ rotate: '-45deg' }],
    width: '38%',
  },
  chevronLeftTop: {
    left: '17%',
    right: undefined,
    transform: [{ rotate: '-45deg' }],
  },
  chevronLeftBottom: {
    left: '17%',
    right: undefined,
    transform: [{ rotate: '45deg' }],
  },
  plusHorizontal: {
    borderRadius: 999,
    position: 'absolute',
    width: '70%',
  },
  plusVertical: {
    borderRadius: 999,
    height: '70%',
    position: 'absolute',
  },
});
