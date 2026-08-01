export interface StudentCategory {
  id: string;
  label: string;
  slug: string;
}

export interface StudentStory {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  categorySlug: string;
  categoryLabel: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  imageAlt?: string;
  readingMinutes?: number;
  isFeatured?: boolean;
  isSample: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
  sourceLabel?: string;
}

export interface InternshipPromo {
  id: string;
  title: string;
  description: string;
  statusLabel: string;
  isSample: boolean;
}

export interface StudentInternship {
  id: string;
  slug: string;
  title: string;
  organization: string;
  summary: string;
  description: string;
  category: string;
  location: string;
  arrangement?: 'On-site' | 'Remote' | 'Hybrid';
  isPaid?: boolean;
  deadline?: string;
  imageUrl?: string;
  imageAlt?: string;
  applicationUrl?: string;
  sourceUrl?: string;
  isSample: boolean;
}
