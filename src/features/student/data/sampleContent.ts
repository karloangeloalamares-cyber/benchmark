import type {
  InternshipPromo,
  StudentCategory,
  StudentInternship,
  StudentStory,
} from '../types';

export const studentCategories: StudentCategory[] = [
  { id: 'all', label: 'All', slug: 'all' },
  { id: 'cbe-news', label: 'CSE News', slug: 'cbe-news' },
  { id: 'seas', label: 'SEAS', slug: 'seas' },
  { id: 'campus-life', label: 'Student Spotlight', slug: 'campus-life' },
  { id: 'research', label: 'Research', slug: 'research' },
  { id: 'alumni', label: 'Alumni', slug: 'alumni' },
  { id: 'upcoming-events', label: 'Upcoming Events', slug: 'upcoming-events' },
];

export const internshipCategories: StudentCategory[] = [
  { id: 'all', label: 'All', slug: 'all' },
  { id: 'engineering', label: 'Software Engineering', slug: 'Engineering' },
  { id: 'business', label: 'Data Science', slug: 'Business' },
  { id: 'research', label: 'Research', slug: 'Research' },
  { id: 'public-service', label: 'Electrical Engineering', slug: 'Public Service' },
  { id: 'communications', label: 'Cybersecurity', slug: 'Communications' },
];

export const studentStories: StudentStory[] = [
  {
    id: 'story-seas-engineers',
    slug: 'sample-seas-engineering-pathways',
    title: 'Sample SEAS Spotlight: Engineering Pathways for Jaguars',
    summary:
      'A preview story showing how the student app can highlight alumni mentoring, scholarships, and industry pathways.',
    body:
      'This sample story demonstrates how a student-facing article can connect academic programs with career pathways. In a production release, this space could highlight verified mentoring programs, scholarship deadlines, and partner events from official university sources.\n\nThe article format is intentionally concise for mobile readers. Students can scan the topic, understand why it matters, and decide whether to open a related source without leaving the news flow.\n\nAll names, opportunities, and dates in this fixture are placeholders. The Benchmark team should replace this sample body with verified editorial content before publication.',
    categorySlug: 'seas',
    categoryLabel: 'SEAS',
    author: 'Benchmark Editorial Preview',
    publishedAt: '2026-07-29',
    imageUrl:
      'https://images.unsplash.com/photo-1594750852517-f37738fa2384?w=1200&q=80',
    imageAlt: 'Students working together in an engineering lab setting',
    readingMinutes: 4,
    isFeatured: true,
    isSample: true,
    ctaLabel: 'View official SEAS resources',
    ctaUrl: 'https://www.subr.edu/page/408',
    sourceLabel: 'Sample format based on a future official-source workflow',
  },
  {
    id: 'story-research-showcase',
    slug: 'sample-research-showcase',
    title: 'Research Preview: Student Work in AI, Energy, and Security',
    summary:
      'Sample coverage for a future research feed, including faculty labs, student posters, and project milestones.',
    body:
      'This sample research story models a digest-style update for student projects. The detail view can summarize several research themes while keeping the card feed short and easy to browse.\n\nA verified version could include faculty contacts, lab pages, poster-session schedules, and submission windows after those details are confirmed. The current content avoids current deadlines because no live source has been connected in this phase.\n\nThe goal is to prove the reading experience, not to represent active research openings.',
    categorySlug: 'research',
    categoryLabel: 'Research',
    author: 'College Research Desk',
    publishedAt: '2026-07-24',
    imageUrl:
      'https://images.unsplash.com/photo-1583911860345-9ae84483d7af?w=1200&q=80',
    imageAlt: 'Research equipment on a lab bench',
    readingMinutes: 3,
    isSample: true,
    ctaLabel: 'Open malformed sample link',
    ctaUrl: 'not-a-valid-url',
    sourceLabel: 'Sample research digest',
  },
  {
    id: 'story-campus-life',
    slug: 'sample-campus-life-welcome',
    title: 'Campus Life Preview: Welcome Week Story Package',
    summary:
      'A sample editorial card for student activities, campus resources, and first-week orientation coverage.',
    body:
      'Campus-life coverage needs to be readable during short breaks between classes. This sample detail page shows how announcements can carry more context than a feed card without adding social features or account requirements.\n\nA production story might include verified location details, student-organization contacts, and official event links. This fixture keeps the language generic so it cannot be mistaken for a current event notice.\n\nThe sample also verifies that longer paragraphs wrap cleanly on mobile.',
    categorySlug: 'campus-life',
    categoryLabel: 'Student Spotlight',
    author: 'Student Affairs Preview',
    publishedAt: '2026-07-21',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1683121441862-6655883f6f26?w=1200&q=80',
    imageAlt: 'Students walking through a campus area',
    readingMinutes: 2,
    isSample: true,
  },
  {
    id: 'story-cbe-news',
    slug: 'sample-cbe-news-program-update',
    title: 'CBE News Preview: Program Update for Student Readers',
    summary:
      'A concise sample announcement format for academic updates that students can scan quickly on mobile.',
    body:
      'Academic updates often need a clear headline, a short summary, and enough detail for students to understand what changed. This sample uses the same pattern while remaining fixture-only.\n\nA verified release could connect this screen to official departmental announcements, curriculum notices, advising windows, or scholarship updates. Until then, the sample badge and demo notice stay visible.\n\nNo advising instruction in this fixture should be treated as current guidance.',
    categorySlug: 'cbe-news',
    categoryLabel: 'CSE News',
    author: 'CBE Communications Preview',
    publishedAt: '2026-07-18',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=1200&q=80',
    imageAlt: 'Students reviewing notes in a business classroom',
    readingMinutes: 3,
    isSample: true,
  },
  {
    id: 'story-alumni',
    slug: 'sample-alumni-mentor-network',
    title: 'Alumni Preview: Mentors Supporting the Next Class',
    summary:
      'Sample story content showing how alumni features can connect students with career guidance and inspiration.',
    body:
      'Alumni stories can make career paths feel more concrete for students. This sample shows how a future article could introduce mentorship themes while sending students to verified sources for real programs.\n\nThe fixture avoids personal profiles, private contact details, and active application claims. A real editorial workflow should confirm names, titles, permissions, and links before publishing.\n\nThe detail page is designed to support that future content without adding accounts or saved-story behavior.',
    categorySlug: 'alumni',
    categoryLabel: 'Alumni',
    author: 'Alumni Relations Preview',
    publishedAt: '2026-07-16',
    imageUrl:
      'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=1200&q=80',
    imageAlt: 'A speaker addressing students in a lecture room',
    readingMinutes: 3,
    isSample: true,
  },
  {
    id: 'story-events',
    slug: 'sample-events-calendar-preview',
    title: 'Events Preview: How Upcoming Student Programs Will Appear',
    summary:
      'A sample event-style story card. Dates and announcements here are placeholders until verified sources are connected.',
    body:
      'Event-style stories need careful trust treatment because students may act on dates and locations. This sample detail page explains the intended format without presenting an active campus program.\n\nA production version could include an official event source, verified location, audience, and accessibility details. The current fixture intentionally avoids current timing.\n\nThis route also validates missing optional actions because no external link is provided.',
    categorySlug: 'upcoming-events',
    categoryLabel: 'Upcoming Events',
    author: 'Events Preview Desk',
    publishedAt: '2026-07-12',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1707155466125-a7943a37e8f9?w=1200&q=80',
    imageAlt: 'Students gathered for a campus event',
    readingMinutes: 2,
    isSample: true,
  },
];

export const studentInternships: StudentInternship[] = [
  {
    id: 'internship-gulf-engineering',
    slug: 'sample-gulf-engineering-systems',
    title: 'Sample Engineering Systems Intern',
    organization: 'Gulf Coast Infrastructure Studio',
    summary:
      'A sample hybrid internship for students interested in civil systems, project documentation, and field reporting.',
    description:
      'This fixture models an engineering-focused listing with a clear organization, arrangement, and safe external action. A verified listing would include official eligibility, dates, required materials, and contact information from the employer or university.\n\nStudents should treat this as sample content only. The application link opens a general HTTPS page for validation and does not submit an application.',
    category: 'Engineering',
    location: 'Baton Rouge, LA',
    arrangement: 'Hybrid',
    isPaid: true,
    deadline: 'Sample deadline to be verified',
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    imageAlt: 'Engineering plans and construction tools on a desk',
    applicationUrl: 'https://www.subr.edu/',
    sourceUrl: 'https://www.subr.edu/',
    isSample: true,
  },
  {
    id: 'internship-campus-research',
    slug: 'sample-campus-research-assistant',
    title: 'Sample Undergraduate Research Assistant',
    organization: 'Center for Applied Learning Preview Program',
    summary:
      'A sample research-support role for students exploring data collection, lab operations, and faculty-led projects.',
    description:
      'This sample listing demonstrates a research opportunity with no enabled application link. The detail screen should still be useful by explaining the role, showing sample status, and directing students to verify opportunities through official channels.\n\nBecause no valid application URL is attached, the app must not render an enabled primary action for this item.',
    category: 'Research',
    location: 'Southern University campus',
    arrangement: 'On-site',
    isPaid: false,
    imageUrl: '',
    imageAlt: 'Research assistant sample listing',
    isSample: true,
  },
  {
    id: 'internship-public-service',
    slug: 'sample-public-service-policy',
    title: 'Sample Public Service Policy Intern',
    organization: 'Capital Region Civic Fellows Preview Office',
    summary:
      'A sample public-service opportunity focused on policy briefs, community meetings, and program evaluation.',
    description:
      'Public-service listings often require careful context about location, supervision, and eligibility. This fixture uses fictional program language and a malformed source URL to validate that unsafe external actions stay hidden.\n\nThe app should show the sample warning, present the details, and avoid implying that a student has applied.',
    category: 'Public Service',
    location: 'Baton Rouge, LA',
    arrangement: 'On-site',
    deadline: 'Sample rolling review',
    sourceUrl: 'ftp://invalid.example.org/listing',
    isSample: true,
  },
  {
    id: 'internship-business-analytics',
    slug: 'sample-business-analytics',
    title: 'Sample Business Analytics Intern',
    organization: 'River Parish Market Insights and Operations Collaborative',
    summary:
      'A sample remote role for dashboards, spreadsheet cleanup, stakeholder summaries, and weekly reporting.',
    description:
      'This fixture checks long organization-name wrapping and remote arrangement filtering. In production, a verified employer page would provide the actual work schedule, compensation, requirements, and application workflow.\n\nThe sample source link is valid so the detail page can show a secondary external action without claiming submission.',
    category: 'Business',
    location: 'Remote',
    arrangement: 'Remote',
    isPaid: true,
    deadline: 'Sample date pending verification',
    sourceUrl: 'https://www.subr.edu/',
    isSample: true,
  },
  {
    id: 'internship-communications',
    slug: 'sample-campus-communications',
    title: 'Sample Campus Communications Fellow',
    organization: 'Benchmark Student Media Preview Desk',
    summary:
      'A sample communications role for writing short posts, preparing interview notes, and supporting editorial calendars.',
    description:
      'This listing helps validate communications-category filtering and detail rendering for a role with both application and source links. The content remains sample-only and should be replaced by verified program information before any student action is requested.\n\nThe action labels describe opening links, not submitting applications.',
    category: 'Communications',
    location: 'Baton Rouge, LA',
    arrangement: 'Hybrid',
    applicationUrl: 'https://www.subr.edu/',
    sourceUrl: 'https://www.subr.edu/',
    isSample: true,
  },
];

export const internshipPromo: InternshipPromo = {
  id: 'internship-board-preview',
  title: 'Internship Board',
  description:
    'Browse sample internship listings and see how verified opportunities can be presented in a future release.',
  statusLabel: 'Sample board',
  isSample: true,
};
