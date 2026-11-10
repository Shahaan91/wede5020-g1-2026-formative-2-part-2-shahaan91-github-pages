# Changelog — Meliora Media WEDE5020 POE

This standalone changelog records the development of the website across the POE and is kept separate because the formal Part 2 feedback specifically requested a standalone changelog file.

## 2026-11-10 — Part 3: functionality, portfolio, SEO and Part 2 restructuring

### Portfolio layout refinement
- Changed the Portfolio advertisement from a cropped card image to a full-frame portrait presentation.
- Reworked both video entries as wide media-and-copy rows so the video cards no longer inherit large empty areas from taller neighbouring cards.
- Reduced the Portfolio Ferrari set from three images to two selected photographs.
- Kept responsive stacking so the revised layout remains usable on tablet and mobile screens.

### Part 2 source carried forward

- Rebuilt Part 3 on top of the newly supplied Part 2 repository rather than treating the earlier generated Part 3 wording as authoritative.
- Restored the student's own Part 2 comments where they existed, including the homepage CSS/navigation comments.
- Restored the student's rewritten page descriptions and service copy where Part 3 had previously replaced them.
- Only changed older Part 2 wording where Part 3 functionality made it inaccurate, such as the Enquiry page saying that form processing would be added later.
- Retained the later Lucida Handwriting display-font change and cleaner Trebuchet MS logo tagline.

### Part 2 feedback corrections

- Added a dedicated `portfolio.html` page so the site presents more substantive media-production work.
- Replaced the repeated About-page logo image with a frame from supplied promotional video work.
- Added portfolio imagery to Enquiry and Contact so meaningful media is no longer limited mainly to Home and Services.
- Added responsive versions of the supplied Craving-Co advertisement.
- Included the formal Part 2 feedback as `docs/part2-feedback.pdf` and kept the corrective-action document accurate.
- Retained intermediate-width typography/navigation refinements and interaction feedback improvements.
- Kept this standalone `CHANGELOG.md` in the project root.

### Portfolio media

- Added the supplied Craving-Co Father's Day promotional advertisement.
- Added the supplied longer vertical local-business promotional video and re-encoded it to reduce web file size without changing its content.
- Added the supplied short restaurant/gyoza social reel.
- Added local poster frames for both videos for faster preview loading.
- Reused the Ferrari 812 GTS photography already included in Part 2.
- Added portfolio filters for advertisements, video and photography.

### jQuery and JavaScript functionality

- Added a local jQuery 3.7.1 file for interaction and AJAX examples.
- Reworked Services search so jQuery filters the original Part 2 service cards instead of replacing the student's descriptions with generated data.
- Added a jQuery FAQ accordion using `slideUp()` and `slideDown()`.
- Added jQuery-generated featured project content and category filtering to the new Portfolio page.
- Added lightboxes for Services and Portfolio still images.
- Added Enquiry validation, character counting and a processed planning response.
- Added Contact validation and asynchronous `$.ajax()` submission with a `mailto:` fallback.
- Retained Leaflet/OpenStreetMap for the interactive Malvern service-area map.

### SEO and deployment

- Updated unique page titles, descriptions, rubric-requested keywords, canonical links and Open Graph metadata for all six pages.
- Added Portfolio to `sitemap.xml` and internal navigation.
- Kept `robots.txt`, `.nojekyll` and root-level `index.html` ready for GitHub Pages.

## 2026-10-05 — Part 2: CSS styling and responsive design

- Created one shared external stylesheet and linked it to all five original pages.
- Added reset/base styles, colour variables, typography rules, Grid/Flexbox layouts and responsive breakpoints.
- Added responsive images and hover/focus/active states.
- Moved navigation into the semantic `<header>` in response to Part 1 feedback.
- Added desktop, tablet and mobile screenshot evidence.
- Updated the README and documented Part 1 corrections.

## Part 1 foundation

- Created the initial semantic HTML website and navigation.
- Added researched business content, initial imagery and organised project folders.

## Git history note

The Part 2 feedback requested clearer, more descriptive commit history. Commit history cannot be recreated honestly inside a ZIP. The README therefore supplies a feature-specific Part 3 commit sequence that should be made and pushed through Git/GitHub.
