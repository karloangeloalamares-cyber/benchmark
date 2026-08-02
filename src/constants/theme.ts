import type { SubmissionStatus } from '@/types';

export const colors = {
  primaryNavy: '#051838',
  navyDeep: '#020B1C',
  secondaryNavy: '#243A5E',
  universityGold: '#FECE34',
  benchmarkBlue: '#59B6E8',
  benchmarkLightBlue: '#63AEE3',
  background: '#FFFFFF',
  backgroundSoft: '#F6F8FB',
  surface: '#FFFFFF',
  textPrimary: '#172033',
  textSecondary: '#4A5F78',
  border: '#E4E7EC',
  borderStrong: '#D0D5DD',
  success: '#2E7D32',
  warning: '#B76E00',
  danger: '#B42318',
  info: '#175CD3',
  tintGold: '#FFF7D8',
  tintGoldBorder: '#F8D47B',
  tintGoldStrong: '#FFF4D6',
  tintBlue: '#ECF8FE',
  tintNavy: '#EEF2F7',
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
  lg: 14,
  xl: 18,
  pill: 999,
};

export const typography = {
  brand: 18,
  screenTitle: 28,
  title: 22,
  subtitle: 18,
  body: 16,
  small: 14,
  label: 12,
  meta: 11,
};

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
} as const;

export const layout = {
  maxContentWidth: 680,
  maxReadableWidth: 560,
  studentMaxContentWidth: 760,
  studentCompactNavWidth: 375,
  studentRorkTabBarWidth: 375,
  studentTabBarHeight: 70,
  touchTarget: 48,
};

export const shadows = {
  card: {
    shadowColor: colors.primaryNavy,
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  soft: {
    shadowColor: colors.primaryNavy,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
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
  pending: colors.benchmarkBlue,
  returned: colors.warning,
  approved: colors.success,
  published: colors.benchmarkBlue,
  rejected: colors.danger,
};

export const toneColors = {
  neutral: colors.secondaryNavy,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.benchmarkBlue,
};
