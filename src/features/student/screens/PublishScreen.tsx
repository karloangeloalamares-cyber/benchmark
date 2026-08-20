import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, radii, shadows, spacing, typography } from '@/constants/theme';
import { StudentPageHeader } from '../components/StudentPageHeader';
import { StudentScreenContainer } from '../components/StudentScreenContainer';
import { StudentSymbol } from '../components/StudentSymbol';
import { WorkflowStatusPill } from '../components/WorkflowStatusPill';

const segments = ['Ready', 'Scheduled', 'Live', 'Archived'] as const;

const publishItems = [
  {
    id: 'ready-research',
    title: 'Research Preview: Student Work in AI, Energy, and Security',
    status: 'Approved',
    category: 'Research',
    detail: 'Ready sample item',
  },
  {
    id: 'ready-alumni',
    title: 'Alumni Preview: Mentors Supporting the Next Class',
    status: 'Approved',
    category: 'Alumni Spotlight',
    detail: 'Ready sample item',
  },
] as const;

export function PublishScreen() {
  const [selectedSegment, setSelectedSegment] = useState<(typeof segments)[number]>('Ready');
  const visibleItems = selectedSegment === 'Ready' ? publishItems : [];

  return (
    <StudentScreenContainer>
      <StudentPageHeader
        subtitle="Approved-content publishing queue, shown as a read-only demo"
        title="Publish"
      />
      <View style={styles.content}>
        <View style={styles.notice}>
          <StudentSymbol color={colors.universityGold} name="publish" size={24} />
          <Text style={styles.noticeText}>
            Publishing controls are intentionally disabled. This Expo parity shell models the
            Rork destination without mutating content.
          </Text>
        </View>

        <View style={styles.segmentRow}>
          {segments.map((segment) => {
            const active = selectedSegment === segment;

            return (
              <Pressable
                accessibilityLabel={`Show ${segment} publish items`}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                key={segment}
                onPress={() => setSelectedSegment(segment)}
                style={({ pressed }) => [
                  styles.segment,
                  active && styles.segmentActive,
                  pressed && styles.pressed,
                ]}>
                <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
                  {segment}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.list}>
          {visibleItems.map((item) => (
            <View key={item.id} style={styles.row}>
              <View style={styles.thumbnail}>
                <StudentSymbol color={colors.textSecondary} name="document" size={24} />
              </View>
              <View style={styles.rowCopy}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <View style={styles.metaRow}>
                  <WorkflowStatusPill label={item.status} tone="success" />
                  <Text style={styles.meta}>{item.category}</Text>
                </View>
                <Text style={styles.detail}>{item.detail}</Text>
                <Text style={styles.readOnly}>View-only publishing queue item</Text>
              </View>
            </View>
          ))}
          {visibleItems.length === 0 ? (
            <View style={styles.emptyState}>
              <StudentSymbol color="rgba(74,95,120,0.55)" name="publish" size={38} />
              <Text style={styles.emptyTitle}>Nothing here</Text>
              <Text style={styles.emptyDetail}>Content in this state will appear here.</Text>
            </View>
          ) : null}
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
  segmentRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    padding: spacing.xs,
    backgroundColor: colors.tintNavy,
    borderRadius: radii.lg,
  },
  segment: {
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
  },
  segmentActive: {
    backgroundColor: colors.surface,
  },
  segmentText: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.semibold,
    lineHeight: 15,
  },
  segmentTextActive: {
    color: colors.primaryNavy,
  },
  list: {
    minWidth: 0,
    gap: 14,
  },
  row: {
    minWidth: 0,
    flexDirection: 'row',
    gap: spacing.md,
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 16,
    ...shadows.soft,
  },
  thumbnail: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.tintNavy,
    borderRadius: 10,
  },
  rowCopy: {
    flex: 1,
    minWidth: 0,
    gap: spacing.xs,
  },
  rowTitle: {
    color: colors.primaryNavy,
    fontSize: typography.small,
    fontWeight: fontWeights.semibold,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  detail: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    lineHeight: 15,
  },
  readOnly: {
    color: colors.textSecondary,
    fontSize: typography.meta,
    fontWeight: fontWeights.medium,
    lineHeight: 15,
  },
  emptyState: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 54,
  },
  emptyTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  emptyDetail: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.82,
  },
});
