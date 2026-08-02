# Student Home Rork Reference Notes

## Source

- Rork repo: `C:\Users\user\Documents\SU-BENCHMARK-Rork`
- Branch: `main`
- HEAD: `2d00958359ae6fb74380540e15d3510b81080f23`
- Files inspected:
  - `ios/BenchmarkCMS/Views/Public/SiteHomeView.swift`
  - `ios/BenchmarkCMS/Views/Shared/PostCardView.swift`
  - `ios/BenchmarkCMS/Utilities/BrandToolbar.swift`
  - `ios/BenchmarkCMS/Utilities/Theme.swift`
  - `ios/BenchmarkCMS/Views/Shared/FloatingHomeButton.swift`
  - `ios/BenchmarkCMS/Models/SeedData.swift`
  - `ios/BenchmarkCMS/Models/SiteSettings.swift`

## Home Hierarchy

1. Masthead
2. Category navigation
3. Internship Board banner
4. Featured story card, when present
5. Standard feed cards
6. Footer

## Masthead

- Compact navy header with rounded bottom corners.
- Brand title: `Benchmark`.
- Attribution: `powered by the College of Sciences and Engineering`.
- Tagline: `Showcasing Southern University's excellence to the world.`
- Guest state shows `Sign In` below the tagline and above search.
- Sign In opens the login presentation in Rork. Expo routes to the existing demo role selection because no real auth exists.
- Search is a capsule row with search icon, controlled input, and clear button only when populated.
- Header includes a large translucent blue circle overlay in the top-right.

## Category Order

Rork source order:

1. All
2. CSE News
3. SEAS
4. Research
5. Alumni Spotlight
6. Industry Partnerships
7. Student Spotlight
8. Upcoming Events

## Cards

- No visible `Featured story` label.
- No repetitive sample badge on public home cards.
- Image height is taller for featured card and shorter for standard cards.
- Metadata order is category left, date right, then title, reading time, summary, author/disclosure row.
- Card radius is 18 with soft navy shadow.
- Bookmark overlay appears at top-right in Expo to preserve saved-state behavior.

## Internship Banner

- Title: `Internship Board`.
- Subtitle when open listings exist: `5 open opportunities for students`.
- 48px gold icon well, concise copy, trailing arrow.

## Footer

- Divider line, footer text, then URL.
- Footer text: `© Southern University and A&M College`.
- URL: `subenchmark.blooksy.com`.

## Responsive Evidence

- `home-375x812.png`: production build, no horizontal overflow.
- `home-390x844.png`: production build, no horizontal overflow.
- `home-1366x900.png`: production build, no horizontal overflow.
- `tabs-regression-mobile.png`: all five tabs visible on Site.
- `search-active-mobile.png`: search icon, focused input, and clear action visible.
- `category-scroll-mobile.png`: selected chip state visible.
- `internship-banner-mobile.png`: banner parity crop.
- `featured-story-mobile.png`: featured card hierarchy.
- `standard-story-mobile.png`: standard card hierarchy.
- `footer-mobile.png`: footer clears tab bar.
- `demo-role-selection-smoke.png`: Sign In reaches existing demo role selection.
