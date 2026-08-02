# Student Secondary Rork Reference Notes

## Source

- Rork repo: `C:\Users\user\Documents\SU-BENCHMARK-Rork`
- Branch: `main`
- HEAD: `2d00958359ae6fb74380540e15d3510b81080f23`
- Files inspected:
  - `ios/BenchmarkCMS/Views/Public/InternshipsView.swift`
  - `ios/BenchmarkCMS/Views/Contributor/MyPostsView.swift`
  - `ios/BenchmarkCMS/Views/Approver/ReviewQueueView.swift`
  - `ios/BenchmarkCMS/Views/SavedPostsView.swift`
  - `ios/BenchmarkCMS/Views/MainTabView.swift`
  - `ios/BenchmarkCMS/Views/Shared/StatusBadge.swift`
  - `ios/BenchmarkCMS/Utilities/BrandToolbar.swift`
  - `ios/BenchmarkCMS/Models/UserRole.swift`
  - `ios/BenchmarkCMS/Models/SeedData.swift`

## Fidelity Matrix

| Area | Rork | Expo Before | Correction |
|---|---|---|---|
| Page header | Compact nav title/brand toolbar; Internships uses navy search header | Mixed Back/Benchmark/title row on tab roots | Compact shared header, tab roots hide Back, detail keeps labeled Back |
| Title hierarchy | Serif titles, small subtitles | Mostly close, some flat hierarchy | Added subtitles/read-only context on secondary tabs |
| Search/filter placement | Internship search in navy header; chips below | Close | Kept header search, removed dead plus, added result count |
| Card radius/spacing | 16-18 radius, 14 spacing, soft shadow | Close | Reused Rork-like radii/shadow and status pills |
| Status badges | Dot/icon plus text capsule, uppercase | Mixed bordered/sample badges | Added shared `WorkflowStatusPill` with text + dot |
| Empty states | Icon, headline, helper copy | Present | Kept, adjusted no-result copy through existing `EmptyState` |
| Read-only messaging | Rork mutates through SwiftData roles | Expo cannot mutate | Added explicit demo/read-only notes; removed fake action affordances |
| Action affordances | Rows navigate where real routes exist | Some chevrons implied unavailable actions | Removed nonfunctional chevrons; kept only working Pressables |
| More option order | Account includes profile, Saved, Permissions, About, Sign Out | Fake profile plus embedded saved | Reworked to Saved, Account/Permissions, About with no fake identity/sign-out |
| Saved access | Account -> Saved list; rows open story; delete possible | Embedded saved list | Kept through More, rows open story, clear-all only when populated |
| Account sections | Signed-in user card, permissions, about, sign out | Fake name/email/title | Replaced with demo access card and role-surface explanation |
| Footer/bottom spacing | Clears tab bar/floating Home | Existing shell padding | Preserved container bottom padding |
| Mobile density | Content-dense secondary screens | Close | Kept compact cards and chip rows |
| Desktop adaptation | Same product, centered readable content | Existing centered column | Preserved no separate desktop design |

## Rork Behaviors

- Internships: title `Internships`, subtitle `Opportunities for Southern University students`, search capsule, category chips, Closed toggle, cards with category/status/title/company/location/summary/paid/deadline.
- Internship detail: image, category, title, company/location, paid/deadline, gold rule, summary, body, `Apply Now` only when application URL is present and listing is open.
- My Posts: stats row for Drafts/In Review/Live, filter menu, row status badge, category, feedback if needed, updated timestamp, draft creation for signed-in users.
- Review: segmented Queue/Approved/Scheduled/Live/Resolved, pending banner, card rows with thumbnail, status, category, author/submitted metadata.
- Saved: navigation title `Saved`, list rows with thumbnail/category/title/saved date, empty state `Nothing saved yet`.
- Account: signed-in profile, Saved Stories, permissions, assigned categories, Sign Out, About.
- Main tabs: Site, Internships, My Posts, Review when role permits, Account. Expo keeps five fixed tabs from prior phase.

## Accepted Expo Adaptations

- No real auth or role state; More presents account capability as demo access context.
- No SwiftData mutation; My Posts and Review are read-only and say so.
- No persistent bookmarks; Saved remains session-only and visible through More.
- No new dependencies; icons stay in local primitive icon system.
- No Rork Swift copied.
