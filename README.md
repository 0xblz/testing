# Simple Jekyll Site

A clean Jekyll site with minimal design, automatic dark/light mode, and responsive navigation.

## Features

- **Clean typography** with Geist Mono font
- **Theme toggle** (🌙/☀️) with localStorage persistence
- **Responsive navigation** with mobile hamburger menu
- **Dark/light mode** that follows system preference or manual selection
- **Semantic HTML** and accessible markup

## Quick Start

```bash
bundle install
bundle exec jekyll serve
```

Visit `/style` to see all available components.

## File Structure

```
_sass/
├── _variables.scss    # Theme colors and settings
├── _layout.scss       # Basic layout styles
├── _typography.scss   # Text and heading styles
├── _forms.scss        # Form components
└── _navigation.scss   # Header and navigation

_layouts/default.html  # Base template
_includes/navigation.html  # Navigation component
assets/js/menu.js     # Navigation and theme toggle
```

## Adding Pages

Create HTML files with front matter:

```yaml
---
layout: default
title: "About"
nav_order: 2
---
```

Pages with `nav_order` automatically appear in navigation.

## Customizing

Edit colors in `_sass/_variables.scss`:

```scss
:root {
  --background: #ffffff;
  --text-color: #000000;
  --accent-color: #000000;
  --border-color: #000000;
}
```

## Theme Toggle

The theme toggle button appears in the header on both desktop and mobile. It cycles between:
- 🌙 Light mode → Dark mode
- ☀️ Dark mode → Light mode

User preference is saved in localStorage and restored on page load.

