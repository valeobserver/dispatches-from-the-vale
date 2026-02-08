# Dispatches from the Vale

A Jekyll-powered blog with automated post management.

## Quick Start

### Writing a New Post

1. Create a file in `_posts/` folder
2. Name it: `YYYY-MM-DD-title.md` (e.g., `2026-02-10-market-analysis.md`)
3. Add this at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-02-10
category: markets
tags: [markets, analysis, systems]
reading_time: 15
excerpt: "A brief summary of your post..."
---
```

4. Write your content in Markdown below the `---`
5. Commit and push to GitHub
6. Your homepage automatically updates!

## File Structure

```
├── _config.yml              # Site settings
├── index.html               # Auto-updating homepage
├── _layouts/
│   ├── default.html         # Main template
│   └── post.html            # Blog post template
├── _posts/                  # Your blog posts
│   └── 2026-02-07-example.md
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── particles.js
│       └── main.js
└── about.md                 # About page
```

## Local Development (Optional)

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

## Deployment

Push to GitHub - it automatically deploys!

```bash
git add .
git commit -m "New post"
git push
```

GitHub Pages detects Jekyll and builds your site automatically.

## Customization

- Edit `_config.yml` for site-wide settings
- Modify `assets/css/style.css` for styling
- Update `_layouts/` for template changes
- Add social links in `_layouts/default.html`

## Support

Check out the [Jekyll documentation](https://jekyllrb.com/docs/) for more info.
