# Identity experiments — not approved

These are two interactive full-Hero explorations, not release candidates. The previously rejected junction remains in Git history and is not the current experiment. Neither option should be merged as a final identity without the owner's explicit approval.

## Run

Download and unzip this branch, then open `experiments/flow/index.html` or `experiments/facet/index.html` in a browser. Each includes the full portfolio layout and uses only local HTML, CSS and JavaScript plus optional Google Fonts. These are previews; they do not change the published site.

## Concepts and assessment

- **Flow:** five unevenly bounded paths move from differing tensions into a coherent field. A nearby pointer changes the paths; activation temporarily resolves them into straight lines. Advantage: legible interaction story and quiet composition. Weakness: the resting shape reads as a generic pattern and the small mark is not sufficiently distinctive.
- **Facet:** crossing paths form a structured weave; the same responsive field changes curvature and activation aligns it. Advantage: a more distinctive interlaced structure. Weakness: overlapping lines are crowded and become indistinct at small size; it may read as a generic technical motif.
- **Letterform study:** a custom personal-letter-inspired stroke was explored as a third, separate direction. It was not taken to a finished interactive prototype because its resting form looked too much like a generic Latin S.

The two full-Hero prototypes were compared with the current live layout. Neither is a final brand identity; Flow is the more restrained direction to refine, while Facet demonstrates a stronger but busier weave. Scores are provisional design judgments: Flow 58/100, Facet 54/100; no user preference, trademark clearance or independently measured memorability is implied.

![Live, Flow and Facet hero comparison](../evidence/hero-comparison.webp)

## Motion evidence

[Flow: arrival, slow and fast pointer, return and activation](../evidence/flow.webm) · [Facet: same interaction sequence](../evidence/facet.webm) · [Flow: touch and reduced-motion demonstration](../evidence/mobile.webm). The on-screen circular pointer marker tracks actual test pointer events and is not part of the site.

## Verification and limits

Edge and Firefox were exercised locally for pointer path deformation, keyboard activation, touch activation, reduced-motion changes, and eight viewport widths in English and Arabic. The dynamic paths run through one requestAnimationFrame loop that stops after settling or when the document is hidden. Automated axe checks of the tested Flow page states found no violations; this is not a WCAG conformance finding. Mobile Lighthouse was measured on a local Flow prototype; `noindex` is intentional for these nonproduction previews. Safari, a screen reader, actual browser zoom at 200% and 400%, field INP and third-party social preview rendering remain unverified.

## Research

Principles studied include matching interaction to identity rather than adding a generic effect ([Codrops](https://tympanus.net/codrops/2026/07/21/magnetic-commerce-building-the-dash-creative-website/)), explaining motion through working prototypes ([Codrops](https://tympanus.net/codrops/2026/02/13/1820-productions-minimal-design-maximal-motion/)), and adapting visual weight to smaller contexts ([Google Design](https://design.google/library/evolving-google-identity)). These references informed the approach; they are not copied assets. No claim of legal uniqueness is made.

## Trajectory — additional direction (unapproved)

A connected, architectural M explores the path from idea to working system. Its five strokes bend locally with pointer proximity and open briefly on activation. The prototype includes entrance, return, touch, keyboard and reduced-motion behavior. The straight baseline gives the small mark a crown-like resemblance; the personal meaning is still too weak to establish it as the final identity. Compare it against Flow before approval. No production identity is changed.

[Desktop and pointer recording](../evidence/trajectory.webm) · [Mobile recording](../evidence/trajectory-mobile.webm) · [Desktop screenshot](../evidence/trajectory-desktop.png) · [Mobile screenshot](../evidence/trajectory-mobile.png)

## M / The Invisible Builders — working exploration

This is a draft, not an approved identity or production release. The M shares one continuous cubic-path topology across Precision, Intelligence and Systems; the same geometry interpolates rather than crossfading. Click or press Enter/Space to cycle. The short scroll section illustrates a workflow with decorative cursors; it does not represent live agents. Skip is available and reduced motion shows the completed illustration. [Morph recording](../evidence/builders-morph.webm) · [Scroll recording](../evidence/builders-scroll.webm) · [Mobile recording](../evidence/builders-mobile.webm) · [Four-way comparison](../evidence/builders-comparison.webp).

**Critical limitations:** the three shapes are recognizable but too similar for a strong brand system. The cursor choreography and final reveal remain basic, and the replay only returns to the beginning so the visitor can scroll through again. This first implementation is not a final creative acceptance. The favicon, social card and GitHub profile have deliberately not been updated pending an approved mark. The mobile video is browser emulation, not a physical device. Safari, screen readers, real-device performance, field INP and a second genuinely different direction have not been verified. No claim of 100/100 is made.

**Local evidence:** Edge/Chromium, eight widths in Arabic and English, pointer, keyboard, emulated touch, reduced motion and no JavaScript checks passed. Axe found no violations in the tested English/Arabic states. Lighthouse lab on this noindex preview: performance 100, accessibility 100, best practices 100, SEO 63 (intentional noindex), LCP 1.1 s, CLS 0; these are not production field metrics. Raw reports: [Lighthouse](../evidence/builders-lighthouse.json) · [axe](../evidence/builders-axe.json).

To try locally, download the branch ZIP, extract it, and open `experiments/builders/index.html`. The external Google Fonts are optional; local fallbacks work without them.

The small circular pointer shown in the morph recording is a visual overlay following actual automated browser pointer events; it is not part of the website.
