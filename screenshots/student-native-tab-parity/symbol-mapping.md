# Student Symbol Mapping

`expo-symbols` is imported only by `src/features/student/components/StudentSymbol.tsx`.

| Semantic name | iOS SF Symbol | Android/Web Material fallback |
| --- | --- | --- |
| `site` | `globe.americas.fill` | `public` |
| `internships` | `briefcase.fill` | `business_center` |
| `myPosts` | `square.and.pencil` | `edit_square` |
| `review` | `checkmark.seal` | `approval` |
| `publish` | `dot.radiowaves.left.and.right` | `campaign` |
| `manage` | `slider.horizontal.3` | `tune` |
| `account` | `person.crop.circle` | `account_circle` |
| `saved` | `bookmark.fill` | `bookmark` |
| `home` | `house.fill` | `home` |
| `more` | `ellipsis` | `more_horiz` |
| `search` | `magnifyingglass` | `search` |
| `back` | `chevron.left` | `arrow_back_ios_new` |
| `calendar` | `calendar` | `calendar_month` |
| `clock` | `clock.fill` | `schedule` |
| `location` | `mappin.and.ellipse` | `location_on` |
| `building` | `building.2.fill` | `apartment` |
| `share` | `square.and.arrow.up` | `share` |
| `status` | `checkmark.circle.fill` | `check_circle` |

Additional local UI helpers:

| Semantic name | iOS SF Symbol | Android/Web Material fallback |
| --- | --- | --- |
| `document` | `doc.text.fill` | `description` |
| `close` | `xmark` | `close` |
| `chevronRight` | `chevron.right` | `chevron_right` |
| `check` | `checkmark.circle.fill` | `check_circle` |

Web validation:

- Chrome rendered 31 nonblank `MaterialSymbols_400Regular` glyph nodes on `/student/site`.
- Captured examples include site, internships, my posts, review, More, Home, search, bookmark, and row chevrons.
- No letter or emoji fallbacks are used for student navigation icons.
