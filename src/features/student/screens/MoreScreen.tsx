import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol } from '../components/StudentSymbol';
import {
  activeStudentParityRole,
  getStudentNavigationModel,
  studentRoleLabels,
} from '../navigation/studentDestinations';

export function MoreScreen() {
  const router = useRouter();
  const { overflowDestinations } = getStudentNavigationModel(activeStudentParityRole);

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        showBack={false}
        subtitle="Overflow destinations for the administrator parity preview"
        title="More"
      />
      <View style={styles.content}>
        <View style={styles.notice}>
          <StudentSymbol color={colors.primaryNavy} name="more" size={24} weight="semibold" />
          <View style={styles.noticeCopy}>
            <Text style={styles.noticeTitle}>Native overflow model</Text>
            <Text style={styles.noticeText}>
              Demo role: {studentRoleLabels[activeStudentParityRole]}. More represents destinations
              beyond the five-slot iOS tab capacity.
            </Text>
          </View>
        </View>

        <View style={styles.list}>
          {overflowDestinations.map((destination) => (
            <Pressable
              accessibilityLabel={`Open ${destination.label}`}
              accessibilityRole="button"
              key={destination.key}
              onPress={() => router.push(destination.route)}
              style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
              <View style={styles.iconBox}>
                <StudentSymbol color={colors.primaryNavy} name={destination.symbol} size={23} />
              </View>
              <View style={styles.rowCopy}>
                <Text style={styles.rowTitle}>{destination.label}</Text>
                <Text style={styles.rowDetail}>
                  {destination.key === 'account'
                    ? 'Profile context, Saved Stories, permissions, and About'
                    : 'Read-only parity destination'}
                </Text>
              </View>
              <StudentSymbol color={colors.textSecondary} name="chevronRight" size={18} />
            </Pressable>
          ))}
        </View>
      </View>
    </StudentScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    minWidth: 0,
    gap: 14,
    padding: spacing.lg,
  },
  notice: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.tintGold,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  noticeCopy: {
    flex: 1,
    minWidth: 0,
    gap: spacing.xs,
  },
  noticeTitle: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  noticeText: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  list: {
    minWidth: 0,
    gap: spacing.md,
  },
  row: {
    minWidth: 0,
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadows.soft,
  },
  iconBox: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 12,
  },
  rowCopy: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  rowTitle: {
    color: colors.primaryNavy,
    fontSize: typography.body,
    fontWeight: fontWeights.bold,
    lineHeight: 22,
  },
  rowDetail: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.82,
  },
});
