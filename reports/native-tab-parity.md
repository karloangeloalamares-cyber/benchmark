# Native Tab Parity Report

## Baseline

- Expo repo: `master` at `2257734eab9c61b8e18e09c2e2be27e08db5b3de`, remote none, clean before edits.
- Rork repo: `main` at `2d00958359ae6fb74380540e15d3510b81080f23`, clean before and after edits.

## Dependency

- Installed `expo-symbols` through `npx expo install expo-symbols`.
- Installed authorized peer dependency `expo-font` through `npx expo install expo-font`.
- Confirmed `expo-symbols@57.0.1` and `expo-font@57.0.1`.
- `package.json` and `package-lock.json` show no Expo, React Native, Expo Router, or unrelated root dependency upgrade.
- The installer briefly added an `expo-font` config plugin; it was removed because no custom font configuration is required for this phase.
- `expo-doctor` passes: 18/18 checks.

## Symbol API

- `SymbolView` supports platform-specific symbol names with `{ ios, android, web }`.
- iOS uses SF Symbols.
- Android and web use Material Symbols from the package fallback path.
- Supported props include `fallback`, `type`, `scale`, `weight`, `colors`, `size`, `tintColor`, `resizeMode`, and `animationSpec`.
- All app symbol usage is routed through `StudentSymbol`.

## Exact Mapping

See `screenshots/student-native-tab-parity/symbol-mapping.md`.

## Role Model

Local fixture roles:

- `contributor`: Site, Internships, My Posts, Account.
- `approver`: Site, Internships, My Posts, Review, Account.
- `publisher`: direct destinations up to five, overflow for remaining destinations.
- `administrator`: Site, Internships, My Posts, Review, More.

Current parity preview role: `administrator`.

This model is UI fixture logic only, not secure authorization.

## More Overflow

Administrator direct bottom tabs:

1. Site
2. Internships
3. My Posts
4. Review
5. More

More contains Publish, Manage, and Account. More is not Account.

## Account And Saved

Account is its own destination under More. Account contains:

- Saved Stories
- Permissions
- About

Saved Stories is nested under Account and is session-only in this Expo parity shell.

## Publish And Manage

- Publish route is a read-only queue shell with Ready, Scheduled, Live, and Archived segments.
- Manage route is a read-only administration shell.
- No fake publish, user, category, or settings mutation controls were added.

## Floating Home

- Visible on Site and secondary signed-in student tab screens.
- Size: 52 by 52.
- Position: trailing 18, bottom 88 on mobile captures.
- Style: navy surface, darker navy shade, gold border, gold `house.fill`.
- Accessibility label: `Home`.
- Accessibility hint: `Return to the Benchmark home page`.
- Pressing Home from Publish returns to `/student/site`.

## Responsive Evidence

Captured:

- `tabs-rork-width.png`
- `tabs-375x812.png`
- `tabs-390x844.png`
- `tabs-430x932.png`
- `tabs-1366x900.png`

Checks:

- five equal tab destinations at 375, 390, 430, and 1366 widths;
- no horizontal page overflow;
- tab labels not clipped;
- active tint navy, inactive tint subdued;
- no heavy tab shadow or active pill.

## Functional Evidence

Captured:

- `more-overflow-mobile.png`
- `publish-read-only-mobile.png`
- `manage-read-only-mobile.png`
- `account-mobile.png`
- `saved-from-account-mobile.png`
- `story-direct-route-smoke.png`
- `internship-direct-route-smoke.png`
- `demo-role-selection-smoke.png`

Browser checks passed:

- More contains Publish, Manage, Account.
- Account opens Saved Stories.
- Saving a story then opening Account -> Saved shows one saved item.
- Publish and Manage routes load.
- Home reset returns to Site.
- Direct story and internship routes load.
- `/demo/role-select` loads and remains unchanged in git diff.

## Accessibility

- Tabs use `accessibilityRole="tab"`, `accessibilityState.selected`, labels, and web `aria-selected`.
- More tab has overflow hint.
- Floating Home has exact requested label and hint.
- Symbol wrapper hides decorative glyphs from accessibility trees.
- Rows use descriptive labels and working press targets where navigable.

## Command Results

- `npx tsc --noEmit`: pass.
- `npm ls expo-symbols --depth=0`: pass.
- `npx expo config --type public`: pass.
- `npx expo export --platform web`: pass.
- `npx expo-doctor`: pass, 18/18 checks.
- `git diff -- src/app/demo`: no diff.
- Rork `git status --short`: clean.

## Boundary

All validation gates pass after installing authorized `expo-font`. No remote is configured and nothing was pushed.
