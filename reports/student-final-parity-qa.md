# Student Final Parity QA

Date: 2026-08-02
Expo repo: `C:\Users\user\Documents\Southern-University-Benchmark-MVP`
Baseline commit: `92a0661b003e7f1f3ae810d2dae1828a52eb9ccc`
Rork reference repo: `C:\Users\user\Documents\SU-BENCHMARK-Rork`
Rork baseline commit: `2d00958359ae6fb74380540e15d3510b81080f23`

## 1. Decision

READY_FOR_GITHUB_SETUP

No P0 or P1 student-shell defects were found. The Expo app is ready to be put under GitHub setup as a clean web/mobile MVP baseline. Native store-build work remains a later phase.

## 2. Scope

- Phase 6 final parity QA, release-readiness audit, and evidence capture.
- No Rork files modified.
- No Expo source fix was required.
- New artifacts are limited to `screenshots/student-final-qa/` and `reports/`.

## 3. Screenshot Evidence

Captured files:

- `site-375x812.png`
- `site-390x844.png`
- `site-430x932.png`
- `site-768x1024.png`
- `site-1366x900.png`
- `story-detail-mobile.png`
- `internships-mobile.png`
- `internship-detail-mobile.png`
- `my-posts-mobile.png`
- `review-mobile.png`
- `more-mobile.png`
- `saved-empty-mobile.png`
- `saved-populated-mobile.png`
- `account-mobile.png`
- `invalid-story-mobile.png`
- `invalid-internship-mobile.png`
- `keyboard-focus-web.png`
- `five-tabs-mobile.png`
- `demo-role-selection-smoke.png`

## 4. Routes

Browser: Playwright Chromium, Expo dev server at `http://localhost:8102`.

All checked routes rendered expected visible content with zero horizontal overflow:

- `/`, `/student`, `/student/site`
- `/student/internships`, `/student/my-posts`, `/student/review`, `/student/more`
- `/student/posts/story-seas-engineers`, `/student/posts/bad-story-id`
- `/student/internships/internship-gulf-engineering`, `/student/internships/bad-internship-id`
- `/demo/role-select`, `/demo/contributor`, `/demo/approver`, `/demo/administrator`

Invalid story and internship routes render the `Content unavailable` state.

## 5. Navigation Shell

Passed:

- Five tabs are present in order: Site, Internships, My Posts, Review, More.
- Tabs expose `role="tab"` and labels: `Site tab`, `Internships tab`, `My Posts tab`, `Review tab`, `More tab`.
- Floating `Return to Site` is hidden on Site.
- Floating `Return to Site` is visible on secondary tab screens and returns to `/student/site`.
- Detail screens use Back navigation rather than the floating tab-home affordance.
- Root redirect lands on student Site.

Accepted adaptation: details are outside the tab shell, matching the current Expo architecture and preserving a focused detail reading flow.

## 6. Home

Passed:

- Search matches story summary and title text.
- Category filters work.
- Combined search plus category filter works.
- No-results state appears for unmatched searches.
- Clear search resets input.
- Featured story opens detail.
- Bookmark save action persists during the app session.

## 7. Internships

Passed:

- Search matches internship title, organization, and summary fields.
- Category filters work.
- Combined internship search plus category works.
- No-results state appears for unmatched searches.
- Valid internship detail route loads.
- Invalid internship with malformed external URL does not render an enabled Apply link.

## 8. My Posts

Passed:

- Filter chips work, including `Needs Attention`.
- Read-only sample records are clearly labeled.
- No Edit, Delete, or Submit action buttons are exposed.

## 9. Review

Passed:

- Segment controls work, including `Approved`.
- Read-only queue item text is present.
- No exact Approve or Reject action buttons are exposed.

## 10. More, Saved, Account

Passed:

- Empty saved state renders.
- Saved story appears after bookmark action and client navigation to More.
- `Clear saved stories` clears the session list.
- Account and permissions block communicates demo-mode limitations.

Accepted adaptation: saved stories are in-memory only and reset on app reload because no backend/auth persistence is in scope.

## 11. Responsive

All checked Site viewports had `overflowX: 0`:

- 375x812
- 390x844
- 430x932
- 768x1024
- 1366x900

Screenshots show the 5-tab bar fits on mobile and desktop without clipped labels.

## 12. Accessibility And Keyboard

Passed:

- Search fields expose accessible labels.
- Main touch controls expose button/tab roles.
- First keyboard Tab on story detail focuses the Back button with browser default focus outline.
- Invalid external actions are hidden instead of exposing broken links.

Notes:

- React Native Web does not expose `aria-selected` for the custom tab Pressables in the browser DOM, although `accessibilityState={{ selected: focused }}` is set in source.
- Native Dynamic Type and TalkBack/VoiceOver need device validation in a native phase.

## 13. Browser Console

No console errors and no failed requests were detected in the route and functional probes.

Observed warnings:

- React Native Web deprecation: `shadow*` style props should move to `boxShadow`.
- React Native Web deprecation: `props.pointerEvents` should move to `style.pointerEvents`.

These are P2 cleanup items, not release blockers for GitHub setup.

## 14. Build And Config Commands

Passed:

- `npx tsc --noEmit`
- `npx expo config --type public`
- `npx expo export --platform web`
- `npx --no-install expo-doctor` reported 18/18 checks passed.
- `git diff --check`

Not passed:

- `npm run lint -- --max-warnings=0` attempted to auto-install ESLint because no local ESLint config/package was available, then failed with `Cannot find module 'eslint'`. The auto-install side effects were removed. Treat lint setup as a P2 repository-hardening item.

## 15. Git And Rork Boundary

Expo baseline was clean before evidence capture. Rork repo remained clean and stayed at `2d00958359ae6fb74380540e15d3510b81080f23`.

No Rork source files were read for mutation or edited.

## 16. Open Items

P2:

- Add stable lint configuration and committed lint dependencies if lint is required in CI.
- Update React Native Web style deprecations: `shadow*` and `pointerEvents`.
- Configure native identifiers, icons, splash, build numbers, and EAS/native build settings.
- Use Node `>=20.19.4`; current machine reported `v20.19.0`.
- Resolve or accept current `npm audit --omit=dev` moderate advisory chain through Expo dependencies. `npm audit fix --force` would downgrade Expo and is not acceptable in this QA phase.
- Add GitHub README setup/build guidance before external handoff.

Final marker: `SU_BENCHMARK_EXPO_FINAL_QA_COMPLETE`
