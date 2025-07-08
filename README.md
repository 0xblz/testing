# Brutalist Jekyll Starter

A complete Jekyll starter project with a clean brutalist theme. Ready for AI assistants to build upon for rapid project development.

## What This Is

This is a **starter foundation** that provides:
- **Complete base theme** - Brutalist design with automatic dark mode
- **Semantic HTML structure** - Clean, accessible markup patterns
- **Modular CSS architecture** - Organized SCSS files for easy extension
- **Essential components** - Forms, navigation, typography ready to use
- **AI-friendly structure** - Clear patterns for AI assistants to follow

Perfect for starting new projects without building basic styling from scratch.

## Quick Start

```bash
bundle install
bundle exec jekyll serve
```

Visit `/style.html` to see all available components and styling.

## File Structure

```
_sass/
├── _variables.scss    # Theme colors and settings
├── _layout.scss       # Basic layout styles
├── _typography.scss   # Text and heading styles
├── _forms.scss        # Form components
├── _navigation.scss   # Header and mobile navigation
└── _components.scss   # UI components

_layouts/default.html  # Base template
style.html            # Component showcase
index.html            # Homepage
```

## Available Components

### Typography
- Semantic headings (h1-h3) with consistent styling
- Links with hover effects
- Blockquotes with styling
- Lists with custom bullets/numbering
- Code blocks and inline code

### Forms
- Text inputs, email, textarea, select
- Radio buttons and checkboxes in semantic fieldsets
- Submit and reset buttons
- Proper labels and grouping

### Navigation
- Fixed header with responsive hamburger menu
- Mobile drawer with overlay
- Semantic HTML structure

### UI Components
- `.mono-button` - Primary button component
- `<section>` - Content container with brutalist styling
- `<hr>` - Horizontal rule section divider

## Usage Examples

```html
<!-- Content container -->
<section>
  <h1>Project Title</h1>
  <p>Content goes here</p>
</section>

<!-- Form structure -->
<form>
  <div>
    <label for="input">Label</label>
    <input type="text" id="input">
  </div>
  
  <fieldset>
    <legend>Options</legend>
    <label><input type="radio" name="option"> Choice</label>
  </fieldset>
  
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

<!-- Navigation (in _layouts/default.html) -->
<header>
  {% include navigation.html %}
</header>

<!-- To add a page to navigation, add front matter to any page:
---
layout: default
nav_order: 3
nav_title: About
---
-->
```

## Theme Customization

Colors in `_sass/_variables.scss`:
```scss
:root {
  --background: #ffffff;
  --text-color: #000000;
  --accent-color: #000000;
  --border-color: #000000;
}
```

Typography:
```scss
$font-family: 'Space Mono', monospace;
$base-font-size: 18px;
```

## AI Assistant Guidelines

### This Starter Provides

**Ready-to-use foundation:**
- Complete theme with light/dark modes
- Responsive navigation system
- Form styling and components
- Typography hierarchy
- Semantic HTML patterns

**Build upon this by:**
- Adding new pages with `layout: default`
- Creating new components in `_sass/_components.scss`
- Extending forms and navigation as needed
- Customizing colors in `_sass/_variables.scss`

### Common Tasks

**Adding new components:**
- Add CSS to `_sass/_components.scss`
- Follow existing patterns (`.component-name`, hover states, responsive variants)
- Use CSS custom properties for colors
- Test in both light and dark modes

**Modifying colors/theme:**
- Edit `_sass/_variables.scss` only
- Change CSS custom properties in `:root` blocks
- Dark mode variants in `@media (prefers-color-scheme: dark)`

**Adding new pages:**
- Create HTML files in root directory
- Use `layout: default` in front matter
- Add `nav_order: #` and `nav_title: "Name"` to automatically include in navigation

**Form modifications:**
- Edit `_sass/_forms.scss` for styling
- Use semantic HTML: `<fieldset>`, `<legend>`, proper labels
- Forms inherit button styling from `.mono-button`

**Navigation changes:**
- Header/mobile nav in `_sass/_navigation.scss`
- Update both desktop and mobile versions
- Test hamburger menu functionality

### File Responsibilities

- `_variables.scss` - Colors, fonts, breakpoints only
- `_layout.scss` - Basic layout, containers, accessibility
- `_typography.scss` - Text styling, no containers
- `_forms.scss` - Form elements, semantic HTML
- `_navigation.scss` - Header and mobile navigation
- `_components.scss` - UI components (buttons, boxes, separators)

### Best Practices

✅ **Do:**
- Keep semantic HTML structure
- Use CSS custom properties for theming
- Test responsive behavior
- Maintain brutalist aesthetic (sharp edges, bold borders)
- Use existing component patterns

❌ **Avoid:**
- Inline styles
- Complex animations
- Rounded corners or gradients
- Breaking semantic HTML
- Adding unused CSS

### Testing

- Check `/style.html` for component reference
- Test both light and dark modes
- Verify mobile responsiveness
- Ensure semantic HTML accessibility

### Quick Reference

Component pattern:
```scss
.new-component {
  border: 3px solid $border-color;
  background: $background;
  color: $text-color;
  box-shadow: 4px 4px 0px $shadow-color;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 6px 6px 0px var(--shadow-rgba);
  }
}
```

This starter gives you everything needed to build a complete project without starting from scratch.
