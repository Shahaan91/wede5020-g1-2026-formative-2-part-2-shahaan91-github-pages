# Part 3 Rubric Coverage Guide

This guide maps the supplied Part 3 marking criteria to the implementation so each feature can be demonstrated quickly during marking.

| Rubric criterion | Implementation / evidence |
|---|---|
| Feedback for Part 2 | Formal feedback is included as `docs/part2-feedback.pdf`; corrections are documented in `docs/part2-feedback-corrections.md` and `CHANGELOG.md`. |
| Interactive elements | jQuery FAQ accordion on `services.html`; category filter buttons on `portfolio.html`; scroll-reveal behaviour in `js/main.js`. |
| Interactive maps | Leaflet 1.9.4 + OpenStreetMap in `contact.html`, created by `js/map.js`. |
| Gallery lightbox | Ferrari gallery on `services.html` and two selected still images on `portfolio.html` open in native `<dialog>` lightboxes controlled with jQuery. |
| Dynamic content and search | jQuery filters the original Part 2 service cards live and updates the result count; Portfolio jQuery dynamically inserts a featured-project summary and filters work by category. |
| SEO — title tags | Unique descriptive `<title>` on all six HTML pages. |
| SEO — meta keywords | Page-specific `<meta name="keywords">` on all six pages because the rubric explicitly assesses them. |
| SEO — meta descriptions | Unique `<meta name="description">` on all six pages. |
| SEO — image names and alt text | Descriptive local filenames, meaningful `alt` text, responsive advertisement/Ferrari image variants and video poster frames. |
| Enquiry controls | Name, business, email, phone, service, timeline and project brief in `enquiry.html`. |
| Enquiry validation | HTML constraints plus jQuery/JavaScript inline validation and errors in `js/forms.js`. |
| Enquiry process response | Valid submission produces service, demonstration cost range and scheduling guidance in `#enquiry-response`. |
| Contact controls | Name, email, message type and full message controls in `contact.html`. |
| Contact validation | HTML constraints plus jQuery/JavaScript inline validation/errors in `js/forms.js`. |
| Contact process / email | Valid data uses jQuery `$.ajax()` to submit to FormSubmit without reloading; compiled `mailto:` fallback is provided if unavailable. |
| Multiple descriptive commits | Eight suggested feature-specific commits are listed in `README.md`; they must be genuinely committed/pushed by the student. |
| README | `README.md` documents Part 2 preservation, six pages, jQuery, media, forms, SEO, feedback corrections, structure and references. |
| Changelog | Required standalone `CHANGELOG.md` records Part 2 and Part 3 changes. |
| Website deployment | Root-level `index.html`, `.nojekyll`, `robots.txt` and `sitemap.xml` are GitHub Pages-ready. |
| References | Harvard-style technical/media acknowledgements in `README.md`. |

## Suggested demonstration sequence

1. Open **Services** and type `editing`, `drone` or `audio` in the search box; then open/close an FAQ item to demonstrate jQuery.
2. Click either of the two Ferrari photographs to demonstrate the lightbox.
3. Open **Portfolio**, filter by Advertisements / Video / Photography and play either supplied MP4.
4. Open **Enquiry**, submit incomplete input to show errors, then valid input to show the processed response.
5. Open **Contact**, demonstrate the map, then the validation and jQuery AJAX/fallback behaviour.
6. Show page metadata plus `robots.txt` and `sitemap.xml` for SEO.
7. Show `README.md`, standalone `CHANGELOG.md`, Part 2 feedback documents, Git history and the deployed GitHub Pages site.
