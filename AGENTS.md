# DWIZ project context

Updated: 8 September 2026. This file records the current user decisions; later user instructions take precedence.

## Design decisions

- The user selected **Layout 01 Cinema** as the direction for the site.
- References: [A24](https://a24films.com) for UI and navigation; [Field Day Sound](https://www.fielddaysound.tv) for clean composition and a premium feel.
- Keep the presentation restrained: clear typography, generous spacing, real artwork and film stills. Avoid generic marketing filler, decorative gradients, excessive cards/pills and invented statistics.
- The site copy is currently English; conversation with the user is Italian.
- Work is divided into **Sync** (`/work`) and **Production** (`/work/production`).
- Three Production proposals are still under review: **Sleeves**, **Index**, **Spotlight**, selected with `?layout=`. No final Production layout has been chosen. Sleeves is the URL fallback, not an approved final choice.
- Earlier Editorial and Studio concepts remain reachable using `?v=editorial` and `?v=studio`. The selected Cinema direction no longer shows their global comparison bar. The Production comparison bar remains for review.

## Approved content

Identity: **DWIZ — Davide Zonta**, a producer with rap/trap beatmaking roots and a focus on music for picture.

Preserve both original Sync projects and their source material:

1. **A casa di Nerissima Serpe** — esse Magazine.
2. **Super 9000 || The Sound of Hip-Hop with 65 Lanta** — Solid State Logic.

Their verified credit remains **Music contribution**. Do not infer sole composition, ownership, commissioning or additional roles from a video placement. Legacy `/work/placement-one` and `/work/placement-two` redirects remain in place.

The user replaced the initial request for a top ten by listens with this definitive selection, in this order:

1. **Despedida** — BAIXADA, GB Trem, Rei Bxd, Js da Torre, Lyhen & Modern.
2. **ADDERALL** — Glocky & Faneto.
3. **LAST KRY** — Stunna Gambino.
4. **Medicine & Fentanyl** — Fashion Forty.
5. **Aw Yeah** — Quando Rondo.
6. **+TRAP** — TIARA & YP.
7. **Don’t Panic** — Jay Montana.

**Every release must be labelled “Co-production”.** The user explicitly asked for no distinction for loop contributions. Despedida's co-production is confirmed directly by the user; it does not have a verified Genius credit page. Do not add “loop” to its public label or fabricate a credits link.

`app/work/production/releases.ts` is the source of truth for release metadata and order. Six records have verified Spotify links; +TRAP uses its official YouTube audio. Individual Genius links exist for the other six records. The user's source profile is https://genius.com/artists/Dwiz-ita.

The seven entries are **Selected releases**, not a verified stream ranking. The earlier provisional ten-track catalogue is superseded. Do not restore excluded tracks, display unverified counts or confuse Genius views with platform listens.

## Implementation boundaries

- Reuse the current React components and plain CSS; no added carousel, player or animation dependency is needed.
- Keep artwork local and preserve the included font license.
- Listening links open the verified release on Spotify or YouTube. Sync video iframes load only after the user presses Play, using YouTube's privacy-enhanced host.
- Keep keyboard navigation, visible focus, labelled controls and reduced-motion support. Index preview must work on focus as well as hover; mobile uses visible row artwork.
- Contact email and social links are not supplied: `siteConfig.email` is null and `socials` is empty. Do not invent contact details or make a form appear to submit successfully.
- Social preview artwork and its existing alt text are preserved. Metadata and sitemap use the request host; review the legacy fallback `siteConfig.url` when preparing a future deployment/domain change.
- No Sites publication was performed for this design pass. A Git push is not evidence that the hosted site was updated.

See [README.md](README.md) for setup, source locations and validation. Keep these context files aligned with later user decisions.
