import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, fontWeights, layout, radii, spacing, typography } from '@/constants/theme';
import type { StudentInternship } from '../types';
import { getSafeExternalLink } from '../utils/externalLinks';
import { DemoContentNotice } from './DemoContentNotice';
import { ExternalActionButton } from './ExternalActionButton';
import { SampleBadge, SAMPLE_CONTENT_DISCLOSURE } from './SampleBadge';
import { StudentSymbol, type StudentSymbolName } from './StudentSymbol';
import { WorkflowStatusPill } from './WorkflowStatusPill';

type InternshipDetailContentProps = {
  internship: StudentInternship;
};

function formatCompensation(value?: boolean) {
  if (value === undefined) {
    return undefined;
  }

  return value ? 'Paid' : 'Unpaid';
}

function InternshipMetaItem({
  icon,
  label,
}: {
  icon: StudentSymbolName;
  label?: string;
}) {
  if (!label) {
    return null;
  }

  return (
    <View style={styles.metaItem}>
      <StudentSymbol color={colors.textSecondary} name={icon} size={15} />
      <Text style={styles.meta}>{label}</Text>
    </View>
  );
}

export function InternshipDetailContent({ internship }: InternshipDetailContentProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(internship.imageUrl) && !imageFailed;
  const compensation = formatCompensation(internship.isPaid);
  const paragraphs = internship.description
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const hasApplicationLink = getSafeExternalLink(internship.applicationUrl).isAvailable;
  const hasSourceLink = getSafeExternalLink(internship.sourceUrl).isAvailable;

  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        {hasImage ? (
          <Image
            accessibilityLabel={internship.imageAlt ?? `Image for ${internship.title}`}
            onError={() => setImageFailed(true)}
            resizeMode="cover"
            source={{ uri: internship.imageUrl }}
            style={styles.image}
          />
        ) : (
          <View style={styles.imageFallback}>
            <Text style={styles.imageFallbackText}>Internship preview</Text>
          </View>
        )}

        <View style={styles.heroBody}>
          <View style={styles.badgeRow}>
            <Text style={styles.category}>{internship.category}</Text>
            <WorkflowStatusPill label="Open" tone="success" />
            {internship.isSample ? <SampleBadge label="Sample opportunity" /> : null}
          </View>
          <Text style={styles.title}>{internship.title}</Text>
          <Text style={styles.organization}>{internship.organization}</Text>

          <View style={styles.metaGrid}>
            <InternshipMetaItem icon="location" label={internship.location} />
            <InternshipMetaItem icon="status" label={internship.arrangement} />
            <InternshipMetaItem icon="check" label={compensation} />
            <InternshipMetaItem icon="calendar" label={internship.deadline} />
          </View>

          <Text style={styles.summary}>{internship.summary}</Text>
        </View>
      </View>

      {internship.isSample ? <DemoContentNotice /> : null}

      <View style={styles.detailCard}>
        <Text style={styles.sectionTitle}>Opportunity details</Text>
        {paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>{SAMPLE_CONTENT_DISCLOSURE}</Text>
        </View>

        {hasApplicationLink ? (
          <ExternalActionButton label="Open application link" url={internship.applicationUrl} />
        ) : (
          <Text style={styles.unavailable}>
            No external application link is available for this sample opportunity.
          </Text>
        )}
        {hasSourceLink ? (
          <ExternalActionButton label="View source" url={internship.sourceUrl} variant="secondary" />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 0,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  heroCard: {
    minWidth: 0,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderRadius: radii.xl,
  },
  image: {
    width: '100%',
    aspectRatio: 1.8,
  },
  imageFallback: {
    width: '100%',
    aspectRatio: 1.8,
    justifyContent: 'flex-end',
    padding: spacing.lg,
    backgroundColor: colors.tintBlue,
  },
  imageFallbackText: {
    color: colors.primaryNavy,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.8,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  heroBody: {
    minWidth: 0,
    gap: spacing.md,
    padding: spacing.lg,
  },
  badgeRow: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: spacing.sm,
  },
  category: {
    color: colors.universityGold,
    fontSize: typography.label,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.7,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  title: {
    flexShrink: 1,
    color: colors.primaryNavy,
    fontFamily: 'serif',
    fontSize: typography.screenTitle,
    fontWeight: fontWeights.bold,
    lineHeight: 34,
  },
  organization: {
    flexShrink: 1,
    color: colors.secondaryNavy,
    fontSize: typography.body,
    fontWeight: fontWeights.semibold,
    lineHeight: 24,
  },
  metaGrid: {
    minWidth: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  metaItem: {
    minWidth: 0,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  meta: {
    maxWidth: '100%',
    flexShrink: 1,
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
  summary: {
    flexShrink: 1,
    color: colors.secondaryNavy,
    fontSize: typography.body,
    lineHeight: 24,
  },
  detailCard: {
    maxWidth: layout.maxReadableWidth,
    minWidth: 0,
    gap: spacing.md,
    alignSelf: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.xl,
  },
  sectionTitle: {
    color: colors.primaryNavy,
    fontSize: typography.subtitle,
    fontWeight: fontWeights.bold,
    lineHeight: 25,
  },
  paragraph: {
    flexShrink: 1,
    color: colors.textPrimary,
    fontSize: typography.body,
    lineHeight: 25,
  },
  warningBox: {
    padding: spacing.md,
    backgroundColor: colors.tintGoldStrong,
    borderColor: colors.tintGoldBorder,
    borderWidth: 1,
    borderRadius: radii.lg,
  },
  warningText: {
    flexShrink: 1,
    color: colors.secondaryNavy,
    fontSize: typography.small,
    lineHeight: 20,
  },
  unavailable: {
    color: colors.textSecondary,
    fontSize: typography.small,
    lineHeight: 20,
  },
});
