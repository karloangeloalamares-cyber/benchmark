# Rork Reference Notes

## Source Files Inspected

- `BenchmarkCMSApp.swift`: app root, model container, splash wrapper, global tint.
- `ContentView.swift`: public default state, login state, signed-in `MainTabView`.
- `Views/MainTabView.swift`: role-aware tab shell, Account screen, floating home modifier.
- `Views/Public/SiteHomeView.swift`: public masthead, search, category chips, internship banner, story feed, footer.
- `Views/Shared/PostCardView.swift`: image-forward editorial cards, category/date/read-time hierarchy, bookmark overlay.
- `Views/Public/PostDetailView.swift`: reader detail layout, gallery, metadata, toolbar bookmark/share.
- `Views/Public/InternshipsView.swift`: internships header, search, chips, cards, detail navigation.
- `Views/SavedPostsView.swift`: saved reading list location and empty state.
- `Views/Contributor/MyPostsView.swift`: contributor post list, stats, filters, status rows.
- `Views/Approver/ReviewQueueView.swift`: review queue segments, banners, review rows.
- `Views/Shared/BookmarkButton.swift`: card and toolbar bookmark states.
- `Views/Shared/FloatingHomeButton.swift`: floating circular home action.
- `Utilities/Theme.swift`: Benchmark color tokens and header gradient.
- `Utilities/BrandToolbar.swift`: Benchmark logo toolbar usage.
- `Services/SessionManager.swift`: public default, persisted signed-in user, home reset behavior.
- `Models/UserRole.swift`: role permissions and tab gating.
- `Models/SeedData.swift`: seeded site settings, categories, users, and workflow content.

## Tab and Role Findings

Rork source defines `MainTabView` tabs as:

- `Site`, always visible to signed-in users.
- `Internships`, always visible to signed-in users.
- `My Posts`, always visible to signed-in users.
- `Review`, visible when `user.role.canReview`.
- `Publish`, visible when `user.role.canPublish`.
- `Manage`, visible when `user.role.canAdminister`.
- `Account`, always visible to signed-in users.

The public default state in `ContentView` is not a tab shell; it shows `SiteHomeView(user: nil)` with a `Sign In` button.

The approved five-tab screenshot direction appears to represent iOS tab overflow for an admin-like role: first four primary tabs plus native `More`. Expo reproduces that visible shell as `Site`, `Internships`, `My Posts`, `Review`, and `More`. `More` contains Account, Saved Stories, Permissions, and About content.

## Parity Matrix

| Element | Status | Expo Translation |
| --- | --- | --- |
| Masthead | EXACT_PARITY_REQUIRED | Compact navy header, `Benchmark`, university attribution, tagline, search in masthead. |
| Logo placement | PLATFORM_ADAPTATION_REQUIRED | Text wordmark used; Rork bitmap logo assets were not copied. |
| Supporting university text | EXACT_PARITY_REQUIRED | `powered by the College of Sciences and Engineering`. |
| Sign-in control | PLATFORM_ADAPTATION_REQUIRED | `Sign In` pill routes to existing demo role selector; no real auth added. |
| Search field | EXACT_PARITY_REQUIRED | Rounded translucent masthead field with Rork placeholder text. |
| Category chips | EXACT_PARITY_REQUIRED | Compact horizontal navy/soft navy chips. |
| Internship banner | EXACT_PARITY_REQUIRED | White card, gold icon block, title/subtitle, arrow. |
| Featured story card | EXACT_PARITY_REQUIRED | Image-first card with category/date/read-time/title/summary/author hierarchy. |
| Standard story cards | EXACT_PARITY_REQUIRED | Same Rork card hierarchy at smaller scale. |
| Metadata/dates | EXACT_PARITY_REQUIRED | Category left, abbreviated date right, read-time row. |
| Image ratios | PLATFORM_ADAPTATION_REQUIRED | Existing remote fixtures retained with close height/aspect behavior. |
| Bookmark control | PLATFORM_ADAPTATION_REQUIRED | Local text glyph in circular material-like button; SF Symbols unavailable without dependency. |
| Floating action control | EXACT_PARITY_REQUIRED | Bottom-trailing circular home control over the tab shell. |
| Tab bar | PLATFORM_ADAPTATION_REQUIRED | Expo Router tabs reproduce visible order/labels; text glyphs stand in for SF Symbols. |
| More menu | PLATFORM_ADAPTATION_REQUIRED | Expo implements explicit `More` tab for iOS overflow behavior. |
| Role-specific tabs | PLATFORM_ADAPTATION_REQUIRED | Admin-like parity preview exposes My Posts, Review, and More without backend auth. |
| Footer | EXACT_PARITY_REQUIRED | Site URL footer restored. |
| Safe area handling | EXACT_PARITY_REQUIRED | Student container retains safe area and bottom-tab clearance. |
| Loading states | DEFERRED_BY_EXPLICIT_SCOPE | Static local fixtures only. |
| Empty states | EXACT_PARITY_REQUIRED | Saved, My Posts, Review, internships, and search empty states are textual. |
| Signed-out state | PLATFORM_ADAPTATION_REQUIRED | Sign In control remains visible; real login is not introduced. |
| Signed-in state | PLATFORM_ADAPTATION_REQUIRED | Admin-like local preview for Rork navigation parity. |

## Platform Adaptations

- SF Symbols are represented by restrained single-letter text glyphs because no icon dependency may be added.
- Rork bitmap logo assets are not copied; Expo uses a text wordmark.
- Rork SwiftData persistence is not reproduced; saved stories remain in-memory only.
- Native iOS automatic tab overflow is represented as an explicit Expo `More` tab.
