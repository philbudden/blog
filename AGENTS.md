# Blog repository guidance

## Social cards

All blog social cards must use `tools/create_social_card.py`. Do not create a
bypass template, hand-edit a card image, or introduce a separate colour palette
for an individual article. The generator is the canonical design system: it
uses the website's CSS colour tokens, serif display stack, fixed 1200 by 627
pixel canvas, theme marker, article title, short subtitle, and site domain.

Create each asset under `assets/social/<article-slug>.png`, then inspect the
PNG at full size and confirm its 1200 by 627 pixel dimensions with `sips`.
Shorten source content when the generator rejects it; do not reduce the type
size or alter the layout to force text to fit.

For any article with a social card, preserve both fields in the published
Jekyll frontmatter:

```yaml
social_image: /assets/social/<article-slug>.png
social_image_alt: "A concise description of the card's visible title and subject."
```

The matching ready item in the SecondBrain writing workspace must carry the
same metadata before publication. Articles without a social card intentionally
keep the standard text-only link preview.
