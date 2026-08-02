# Release Readiness

Date: 2026-08-02
Decision: READY_FOR_GITHUB_SETUP

## Current App State

The Expo student app is a stable web/mobile MVP baseline for GitHub setup. Core student routes, saved-content flow, invalid states, demo role routes, responsive layouts, TypeScript, Expo config, Expo export, and expo-doctor passed.

## Environment

- Node: `v20.19.0`
- npm: `10.8.2`
- Expo CLI: `57.0.11`
- Expo SDK package: `~57.0.9`
- React Native: `0.86.2`

Gap: React Native 0.86 packages warn for Node `^20.19.4 || ^22.13.0 || ^24.3.0 || >=25.0.0`. Upgrade local/CI Node before native or CI hardening.

## GitHub Readiness

Ready:

- Git history is coherent.
- No Rork repo mutation.
- No secrets found by text scan.
- Generated build output is ignored.
- Git object store is small.

Needs setup:

- Add GitHub remote.
- Decide whether to keep `master` or rename to `main`.
- Add README setup/build/test instructions.
- Add CI after lint configuration is stable.

Suggested push sequence after repository creation:

```powershell
git remote add origin <github-url>
git push -u origin master
```

## Native iOS Readiness

Ready:

- Expo app name, slug, version, portrait orientation, scheme, and router plugin are present.
- No native source directories are tracked.

Needs native configuration:

- `ios.bundleIdentifier`
- iOS icon and splash assets
- iOS build number
- Apple Developer team/account access
- macOS/Xcode or EAS build path
- Device validation for safe areas, Dynamic Type, VoiceOver, and keyboard behavior

## Native Android Readiness

Ready:

- Expo Android platform is enabled through config output.
- No Android native directory is tracked.

Needs native configuration:

- Android package id
- Adaptive icon and splash assets
- Android versionCode
- Signing/EAS build setup
- Device validation for TalkBack, font scaling, back behavior, and keyboard behavior

## Dependency And Security Notes

`npx --no-install expo-doctor` passed 18/18 checks.

`npm audit --omit=dev --audit-level=moderate` reports 10 moderate advisories through Expo's transitive `uuid` chain. The proposed force fix would install an old Expo version, so no dependency change was made in this QA phase.

## Validation Commands

Passed:

- `npx tsc --noEmit`
- `npx expo config --type public`
- `npx expo export --platform web`
- `npx --no-install expo-doctor`
- `git diff --check`

Blocked/deferred:

- `npm run lint -- --max-warnings=0` is not reliable until ESLint is intentionally configured. Expo CLI attempted an auto-install and then failed to resolve `eslint`; that side effect was reverted.

## Final Decision

READY_FOR_GITHUB_SETUP

Do not claim native app-store readiness yet. The next phase should configure native app identity/assets/build tooling and run iOS/Android device QA.
