# Dependency Verification

Baseline before install:

- Expo repo branch: master
- Expo HEAD: 2257734eab9c61b8e18e09c2e2be27e08db5b3de
- Expo remote: none
- Expo worktree: clean
- Rork repo branch: main
- Rork HEAD: 2d00958359ae6fb74380540e15d3510b81080f23
- Rork worktree: clean

Install command:

```powershell
npx expo install expo-symbols
```

Installed packages:

```text
expo-symbols@57.0.1
expo-font@57.0.1
```

Dependency diff:

- `package.json`: added `expo-symbols` at `~57.0.1` and `expo-font` at `~57.0.1`.
- `package-lock.json`: added only the root `expo-symbols` and `expo-font` dependency lines; the package records already existed in the lockfile.
- Expo, React Native, Expo Router, and unrelated root dependencies were not upgraded.

Installed package API inspection:

- `SymbolView` is exported by `expo-symbols`.
- `name` accepts an SF Symbol name or per-platform `{ ios, android, web }` mapping.
- Web and Android use Material Symbols fallbacks.
- Props include `fallback`, `type`, `scale`, `weight`, `colors`, `size`, `tintColor`, `resizeMode`, and `animationSpec`.
- Package description states SF Symbols on iOS and Material Symbols on Android/web.
- Package peer dependencies include `expo-font`; the final unblock installed it directly.

Validation status:

- `npm ls expo-symbols --depth=0`: pass, `expo-symbols@57.0.1`.
- `npm ls expo-font --depth=0`: pass, `expo-font@57.0.1`.
- `npx expo config --type public`: pass.
- `npx expo export --platform web`: pass, exported `dist`.
- `npx expo-doctor`: pass, 18/18 checks.

Boundary note:

No `expo-font` config plugin, `useFonts` call, custom font file, typography change, or splash-screen change was kept.
