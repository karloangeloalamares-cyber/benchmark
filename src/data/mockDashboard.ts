import type {
  AdminActivity,
  ApproverSubmission,
  ContributorSubmission,
  DashboardStat,
  RoleDefinition,
} from '@/types';

export const roleDefinitions: RoleDefinition[] = [
  {
    role: 'contributor',
    title: 'Contributor',
    description: 'Create, save, and submit university content.',
    route: '/demo/contributor',
  },
  {
    role: 'approver',
    title: 'Approver',
    description: 'Review submissions and manage publishing decisions.',
    route: '/demo/approver',
  },
  {
    role: 'administrator',
    title: 'Administrator',
    description: 'Manage users, categories, content, and settings.',
    route: '/demo/administrator',
  },
];

export const contributorStats: DashboardStat[] = [
  { label: 'Drafts', value: 3, tone: 'neutral' },
  { label: 'Pending Review', value: 2, tone: 'info' },
  { label: 'Returned', value: 1, tone: 'warning' },
  { label: 'Published', value: 8, tone: 'success' },
];

export const contributorSubmissions: ContributorSubmission[] = [
  {
    id: 'demo-contrib-1',
    title: 'Fall Orientation Schedule Announced',
    category: 'Student Life',
    lastUpdated: '2026-07-26',
    status: 'pending',
  },
  {
    id: 'demo-contrib-2',
    title: 'Alumni Scholarship Applications',
    category: 'Alumni Affairs',
    lastUpdated: '2026-07-24',
    status: 'draft',
  },
  {
    id: 'demo-contrib-3',
    title: 'Community Service Weekend',
    category: 'Campus Events',
    lastUpdated: '2026-07-22',
    status: 'returned',
  },
];

export const approverStats: DashboardStat[] = [
  { label: 'Pending Review', value: 5, tone: 'info' },
  { label: 'Scheduled', value: 2, tone: 'warning' },
  { label: 'Published Today', value: 3, tone: 'success' },
];

export const approverSubmissions: ApproverSubmission[] = [
  {
    id: 'demo-approval-1',
    title: 'Jaguars Prepare for Homecoming Game',
    contributor: 'Athletics Communications',
    category: 'Athletics',
    submittedDate: '2026-07-27',
    status: 'pending',
  },
  {
    id: 'demo-approval-2',
    title: 'New Research Center Opens',
    contributor: 'Research Office',
    category: 'Academics',
    submittedDate: '2026-07-26',
    status: 'pending',
  },
  {
    id: 'demo-approval-3',
    title: 'Community Service Weekend',
    contributor: 'Student Affairs',
    category: 'Campus Events',
    submittedDate: '2026-07-25',
    status: 'pending',
  },
];

export const administratorStats: DashboardStat[] = [
  { label: 'Active Users', value: 24, tone: 'neutral' },
  { label: 'Categories', value: 10, tone: 'info' },
  { label: 'Published Content', value: 86, tone: 'success' },
  { label: 'Pending Review', value: 5, tone: 'warning' },
];

export const managementCards = [
  'Manage Users',
  'Manage Categories',
  'Manage Content',
  'Site Settings',
];

export const administratorActivity: AdminActivity[] = [
  {
    id: 'demo-admin-1',
    title: 'Category review completed',
    detail: 'Campus Events labels were checked for demo consistency.',
    occurredAt: '2026-07-27',
  },
  {
    id: 'demo-admin-2',
    title: 'Published content reviewed',
    detail: 'Homecoming and scholarship announcements were included in the mock audit.',
    occurredAt: '2026-07-26',
  },
  {
    id: 'demo-admin-3',
    title: 'Demo settings prepared',
    detail: 'Role dashboards were staged with mock-only university content.',
    occurredAt: '2026-07-25',
  },
];
