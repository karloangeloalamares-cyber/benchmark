import type { InternshipPromo, StudentCategory, StudentStory } from '../types';

export const studentCategories: StudentCategory[] = [
  { id: 'all', label: 'All', slug: 'all' },
  { id: 'cbe-news', label: 'CBE News', slug: 'cbe-news' },
  { id: 'seas', label: 'SEAS', slug: 'seas' },
  { id: 'campus-life', label: 'Campus Life', slug: 'campus-life' },
  { id: 'research', label: 'Research', slug: 'research' },
  { id: 'alumni', label: 'Alumni', slug: 'alumni' },
  { id: 'upcoming-events', label: 'Upcoming Events', slug: 'upcoming-events' },
];

export const studentStories: StudentStory[] = [
  {
    id: 'story-seas-engineers',
    slug: 'sample-seas-engineering-pathways',
    title: 'Sample SEAS Spotlight: Engineering Pathways for Jaguars',
    summary:
      'A preview story showing how the student app can highlight alumni mentoring, scholarships, and industry pathways.',
    categorySlug: 'seas',
    categoryLabel: 'SEAS',
    author: 'Benchmark Editorial Preview',
    publishedAt: '2026-07-29',
    imageUrl:
      'https://images.unsplash.com/photo-1594750852517-f37738fa2384?w=1200&q=80',
    readingMinutes: 4,
    isFeatured: true,
    isSample: true,
  },
  {
    id: 'story-research-showcase',
    slug: 'sample-research-showcase',
    title: 'Research Preview: Student Work in AI, Energy, and Security',
    summary:
      'Sample coverage for a future research feed, including faculty labs, student posters, and project milestones.',
    categorySlug: 'research',
    categoryLabel: 'Research',
    author: 'College Research Desk',
    publishedAt: '2026-07-24',
    imageUrl:
      'https://images.unsplash.com/photo-1583911860345-9ae84483d7af?w=1200&q=80',
    readingMinutes: 3,
    isSample: true,
  },
  {
    id: 'story-campus-life',
    slug: 'sample-campus-life-welcome',
    title: 'Campus Life Preview: Welcome Week Story Package',
    summary:
      'A sample editorial card for student activities, campus resources, and first-week orientation coverage.',
    categorySlug: 'campus-life',
    categoryLabel: 'Campus Life',
    author: 'Student Affairs Preview',
    publishedAt: '2026-07-21',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1683121441862-6655883f6f26?w=1200&q=80',
    readingMinutes: 2,
    isSample: true,
  },
  {
    id: 'story-cbe-news',
    slug: 'sample-cbe-news-program-update',
    title: 'CBE News Preview: Program Update for Student Readers',
    summary:
      'A concise sample announcement format for academic updates that students can scan quickly on mobile.',
    categorySlug: 'cbe-news',
    categoryLabel: 'CBE News',
    author: 'CBE Communications Preview',
    publishedAt: '2026-07-18',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=1200&q=80',
    readingMinutes: 3,
    isSample: true,
  },
  {
    id: 'story-alumni',
    slug: 'sample-alumni-mentor-network',
    title: 'Alumni Preview: Mentors Supporting the Next Class',
    summary:
      'Sample story content showing how alumni features can connect students with career guidance and inspiration.',
    categorySlug: 'alumni',
    categoryLabel: 'Alumni',
    author: 'Alumni Relations Preview',
    publishedAt: '2026-07-16',
    imageUrl:
      'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=1200&q=80',
    readingMinutes: 3,
    isSample: true,
  },
  {
    id: 'story-events',
    slug: 'sample-events-calendar-preview',
    title: 'Events Preview: How Upcoming Student Programs Will Appear',
    summary:
      'A sample event-style story card. Dates and announcements here are placeholders until verified sources are connected.',
    categorySlug: 'upcoming-events',
    categoryLabel: 'Upcoming Events',
    author: 'Events Preview Desk',
    publishedAt: '2026-07-12',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1707155466125-a7943a37e8f9?w=1200&q=80',
    readingMinutes: 2,
    isSample: true,
  },
];

export const internshipPromo: InternshipPromo = {
  id: 'internship-board-preview',
  title: 'Internship Board',
  description:
    'Explore internship opportunities in the next student-app phase. Listings shown later will be clearly marked as sample or verified.',
  statusLabel: 'Next phase',
  isSample: true,
};
