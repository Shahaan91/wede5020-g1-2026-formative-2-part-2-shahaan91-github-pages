# Part 2 Feedback Corrections — Applied in Part 3

**Part 2 result:** 88/100  
**Lecturer:** Hiren Thulasaie

This document records the formal Part 2 feedback and the corrective work carried into Part 3. The original marking sheet is included as `docs/part2-feedback.pdf`.

| Part 2 area | Awarded | Lecturer feedback / issue | Part 3 correction |
|---|---:|---|---|
| Part 1 feedback corrections | 9/10 | Improvements were recognised, but the changelog was not supplied as a separate file. | Added root-level `CHANGELOG.md` and kept the README summary consistent with the actual files. |
| Decoration and colour | 4/5 | Strong visual identity, but the site was image-light for a media business; About repeated the logo while Contact/Enquiry had little substantive imagery. | Added a dedicated Portfolio page using supplied advertisement/video work, replaced the About logo showcase with project media, and added visual portfolio content to Contact and Enquiry. |
| Pseudo-classes | 9.5/10 | Existing hover/focus/active states were strong; extend interaction feedback where appropriate. | Added hover/focus states to portfolio filters/media plus jQuery accordion, filtering and lightbox interaction. |
| Breakpoints | 10/10 | Responsive implementation was strong; test intermediate widths. | Retained the existing breakpoints and the 42–52rem intermediate typography/navigation tuning. |
| Responsive typography | 4.5/5 | `clamp()` and breakpoint rules were strong; smaller text/intermediate widths could be refined. | Kept the intermediate-width refinements for headings, navigation and cards. |
| Responsive images | 2.5/5 | Meaningful imagery was concentrated on Home/Services; add visual assets across more pages and responsive sourcing where appropriate. | Added substantive About, Enquiry, Contact and Portfolio media; supplied advertisement artwork has responsive variants and existing Ferrari images retain `srcset`/`sizes`. |
| Git commits | 1.5/5 | Commit messages should identify files/features so history better records development. | README now provides eight feature-specific Part 3 commit messages. These must be made as genuine Git commits. |
| README | 5/5 | README was comprehensive. | Updated it to accurately describe the six-page Part 3 site, jQuery usage, media assets and exact file tree. |
| Changelog | 2.5/5 | Development record needed more specific, accurate entries and a standalone changelog. | Added detailed dated entries to root-level `CHANGELOG.md` and documented the Part 2-to-Part 3 merge. |
| References | 4.5/5 | Technical references were relevant; sourced/borrowed media should be acknowledged. | README now acknowledges the directly supplied advertisement/videos, existing Part 2 Ferrari photography and official Instagram profile alongside technical sources. |

## General feedback addressed

The lecturer described the site as well styled and responsive but repeatedly highlighted three priorities: add meaningful imagery across more pages, make the submitted documentation match the files actually included, and provide a standalone changelog. Part 3 addresses all three.

## Student Part 2 wording preserved

The newly supplied Part 2 repository was used as the authoritative source for the student's comments and rewritten descriptions. Where an earlier Part 3 draft had replaced those comments/descriptions with more generic generated wording, the Part 2 versions were restored before the new functionality was added.

## Git commit requirement

The Part 2 commit-history score cannot be repaired by editing a ZIP after the fact. For Part 3, the commit sequence in the README should be made through Git so the GitHub history itself demonstrates regular, descriptive development.
