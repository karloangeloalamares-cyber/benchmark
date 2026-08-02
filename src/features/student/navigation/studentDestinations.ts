import type { Href } from 'expo-router';

import type { StudentSymbolName } from '../components/StudentSymbol';

export type StudentPermission = 'review' | 'publish' | 'administer';

export type StudentDemoRole = 'contributor' | 'approver' | 'publisher' | 'administrator';

export type StudentDestinationKey =
  | 'site'
  | 'internships'
  | 'myPosts'
  | 'review'
  | 'publish'
  | 'manage'
  | 'account';

export type StudentDestination = {
  key: StudentDestinationKey;
  label: string;
  route: Href;
  symbol: StudentSymbolName;
  permission?: StudentPermission;
  order: number;
  overflowEligible: boolean;
};

export const activeStudentParityRole: StudentDemoRole = 'administrator';

export const studentRoleLabels: Record<StudentDemoRole, string> = {
  contributor: 'Contributor',
  approver: 'Approver',
  publisher: 'Publisher',
  administrator: 'Administrator',
};

export const studentDestinations: StudentDestination[] = [
  {
    key: 'site',
    label: 'Site',
    route: '/student/site' as Href,
    symbol: 'site',
    order: 1,
    overflowEligible: false,
  },
  {
    key: 'internships',
    label: 'Internships',
    route: '/student/internships' as Href,
    symbol: 'internships',
    order: 2,
    overflowEligible: false,
  },
  {
    key: 'myPosts',
    label: 'My Posts',
    route: '/student/my-posts' as Href,
    symbol: 'myPosts',
    order: 3,
    overflowEligible: false,
  },
  {
    key: 'review',
    label: 'Review',
    route: '/student/review' as Href,
    symbol: 'review',
    permission: 'review',
    order: 4,
    overflowEligible: true,
  },
  {
    key: 'publish',
    label: 'Publish',
    route: '/student/publish' as Href,
    symbol: 'publish',
    permission: 'publish',
    order: 5,
    overflowEligible: true,
  },
  {
    key: 'manage',
    label: 'Manage',
    route: '/student/manage' as Href,
    symbol: 'manage',
    permission: 'administer',
    order: 6,
    overflowEligible: true,
  },
  {
    key: 'account',
    label: 'Account',
    route: '/student/account' as Href,
    symbol: 'account',
    order: 7,
    overflowEligible: true,
  },
];

export function getStudentPermissions(role: StudentDemoRole) {
  return {
    canReview: role === 'approver' || role === 'administrator',
    canPublish: role === 'publisher' || role === 'administrator',
    canAdminister: role === 'administrator',
  };
}

export function canAccessDestination(role: StudentDemoRole, destination: StudentDestination) {
  const permissions = getStudentPermissions(role);

  switch (destination.permission) {
    case 'review':
      return permissions.canReview;
    case 'publish':
      return permissions.canPublish;
    case 'administer':
      return permissions.canAdminister;
    default:
      return true;
  }
}

export function getVisibleStudentDestinations(role: StudentDemoRole) {
  return studentDestinations
    .filter((destination) => canAccessDestination(role, destination))
    .sort((a, b) => a.order - b.order);
}

export function getStudentNavigationModel(role: StudentDemoRole, directLimit = 5) {
  const visibleDestinations = getVisibleStudentDestinations(role);

  if (visibleDestinations.length <= directLimit) {
    return {
      directDestinations: visibleDestinations,
      overflowDestinations: [] as StudentDestination[],
      hasOverflow: false,
    };
  }

  const directDestinations = visibleDestinations.slice(0, directLimit - 1);
  const overflowDestinations = visibleDestinations.slice(directLimit - 1);

  return {
    directDestinations,
    overflowDestinations,
    hasOverflow: true,
  };
}
