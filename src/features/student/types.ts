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
  categorySlug: string;
  categoryLabel: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  readingMinutes?: number;
  isFeatured?: boolean;
  isSample: boolean;
}

export interface InternshipPromo {
  id: string;
  title: string;
  description: string;
  statusLabel: string;
  isSample: boolean;
}
