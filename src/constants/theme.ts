import type { SubmissionStatus } from '@/types';

export const colors = {
  primaryNavy: '#14213D',
  secondaryNavy: '#243A5E',
  universityGold: '#F2B134',
  background: '#F7F8FA',
  surface: '#FFFFFF',
  textPrimary: '#172033',
  textSecondary: '#667085',
  border: '#E4E7EC',
  success: '#2E7D32',
  warning: '#B76E00',
  danger: '#B42318',
  info: '#175CD3',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radii = {
  sm: 6,
  md: 8,
  lg: 12,
};

export const typography = {
  screenTitle: 30,
  title: 24,
  subtitle: 18,
  body: 16,
  small: 14,
  label: 12,
};

export const statusLabels: Record<SubmissionStatus, string> = {
  draft: 'Draft',
  pending: 'Pending Review',
  returned: 'Returned',
  approved: 'Approved',
  published: 'Published',
  rejected: 'Rejected',
};

export const statusColors: Record<SubmissionStatus, string> = {
  draft: colors.textSecondary,
  pending: colors.info,
  returned: colors.warning,
  approved: colors.success,
  published: colors.success,
  rejected: colors.danger,
};

export const toneColors = {
  neutral: colors.secondaryNavy,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.info,
};
