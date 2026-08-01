export type UserRole =
  | 'contributor'
  | 'approver'
  | 'administrator';

export type SubmissionStatus =
  | 'draft'
  | 'pending'
  | 'returned'
  | 'approved'
  | 'published'
  | 'rejected';

export type DashboardStat = {
  label: string;
  value: number;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
};

export type RoleDefinition = {
  role: UserRole;
  title: string;
  description: string;
  route: '/demo/contributor' | '/demo/approver' | '/demo/administrator';
};

export type ContributorSubmission = {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  status: SubmissionStatus;
};

export type ApproverSubmission = {
  id: string;
  title: string;
  contributor: string;
  category: string;
  submittedDate: string;
  status: SubmissionStatus;
};

export type AdminActivity = {
  id: string;
  title: string;
  detail: string;
  occurredAt: string;
};
