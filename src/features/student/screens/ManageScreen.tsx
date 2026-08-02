import { StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol, type StudentSymbolName } from '../components/StudentSymbol';

const managementRows: Array<{
  id: string;
  title: string;
  detail: string;
  symbol: StudentSymbolName;
  value: string;
}> = [
  {
    id: 'users',
    title: 'Users',
    detail: 'Roles and access',
    symbol: 'account',
    value: 'Demo only',
  },
  {
    id: 'categories',
    title: 'Categories',
    detail: 'Site navigation labels',
    symbol: 'manage',
    value: '8',
  },
  {
    id: 'content',
    title: 'All Content',
    detail: 'Every sample workflow state',
    symbol: 'document',
    value: '12',
  },
  {
    id: 'internships',
    title: 'Internships',
    detail: 'Opportunity listings',
    symbol: 'internships',
    value: '5',
  },
];

const statRows = [
  ['Live on site', '0'],
  ['Awaiting review', '1'],
  ['Approved, awaiting publish', '2'],
  ['Scheduled', '0'],
  ['Drafts', '1'],
] as const;

export function ManageScreen() {
  return (
    <StudentScreenContainer>
      <StudentPageHeader
        subtitle="Administration shell shown as a read-only demo"
        title="Manage"
      />
      <View style={styles.content}>
        <View style={styles.notice}>
          <StudentSymbol color={colors.primaryNavy} name="manage" size={24} />
          <Text style={styles.noticeText}>
            Admin tools are represented for navigation parity only. User, category, content, and
            settings changes are not available in this Expo phase.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Administration</Text>
          {managementRows.map((row) => (
            <View key={row.id} style={styles.adminRow}>
              <View style={styles.iconBox}>
                <StudentSymbol color={colors.primaryNavy} name={row.symbol} size={22} />
              </View>
              <View style={styles.rowCopy}>
                <Text style={styles.rowTitle}>{row.title}</Text>
                <Text style={styles.rowDetail}>{row.detail}</Text>
              </View>
              <Text style={styles.value}>{row.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>At a Glance</Text>
          {statRows.map(([label, value]) => (
            <View key={label} style={styles.statRow}>
              <Text style={styles.statLabel}>{label}</Text>
              <Text style={styles.statValue}>{value}</Text>
            </View>
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
    padding: spacing.md,
    backgroundColor: colors.tintGold,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  noticeText: {
    flex: 1,
    minWidth: 0,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  section: {
    minWidth: 0,
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadows.soft,
  },
  sectionTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  adminRow: {
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  iconBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 10,
  },
  rowCopy: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  rowTitle: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  rowDetail: {
    color: colors.textSecondary,
    fontSize: typography.label,
    lineHeight: 16,
  },
  value: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.bold,
    lineHeight: 20,
  },
  statRow: {
    minWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingVertical: spacing.xs,
  },
  statLabel: {
    flex: 1,
    minWidth: 0,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  statValue: {
    color: colors.primaryNavy,
    fontSize: typography.body,
    fontWeight: fontWeights.bold,
    lineHeight: 22,
  },
});
