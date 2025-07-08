# Simple Jekyll Starter

A clean Jekyll starter project with a minimal theme. Focused on clean typography, semantic HTML, and simple interactions without excessive animations.

## What This Is

This is a **starter foundation** that provides:
- **Simple, clean design** - Clean typography with automatic dark mode
- **Semantic HTML structure** - Accessible markup with proper form elements
- **Organized CSS architecture** - Modular SCSS files for easy extension
- **Essential components** - Forms, navigation, typography ready to use
- **Clean aesthetic** - Bold borders and typography without excessive effects

Perfect for projects that need strong visual hierarchy without distracting animations.

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
└── _navigation.scss   # Header and mobile navigation

_layouts/default.html  # Base template
style.html            # Component showcase
index.html            # Homepage
```

## Available Components

### Typography
- Semantic headings (h1-h3) with consistent uppercase styling
- Clean links with simple hover color changes
- Blockquotes with accent borders
- Lists with custom bullets/numbering
- Code blocks and inline code with inverted colors

### Forms
- Individual inputs in simple divs (text, email, textarea, select)
- Fieldsets for grouped elements (radio buttons, checkboxes, actions)
- Clean borders without shadows
- Semantic labels and proper grouping

### Navigation
- Clean header with responsive hamburger menu
- Mobile drawer with overlay
- Automatic page discovery via front matter

### UI Components
- `<button>` - Clean styling with simple hover effects
- `<hr>` - Accent-colored horizontal rule divider

### Layout Elements
- `<section>` - Content container with bold borders (no shadows)

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
    <label><input type="radio" name="option" value="1"> Choice 1</label>
    <label><input type="radio" name="option" value="2"> Choice 2</label>
  </fieldset>
  
  <div>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </div>
</form>

<!-- Navigation (in _layouts/default.html) -->
<header>
  {% include navigation.html %}
</header>

<!-- To add a page to navigation, add front matter to any page:
---
layout: default
title: About
nav_order: 3
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
$font-family: 'Geist Mono', monospace;
$base-font-size: 16px;
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
- Adding custom styling to existing SCSS files
- Extending forms and navigation as needed
- Customizing colors in `_sass/_variables.scss`

### Common Tasks

**Adding new styling:**
- Add CSS to the appropriate SCSS file (`_forms.scss`, `_layout.scss`, etc.)
- Follow existing patterns (clean borders, simple hover states, semantic selectors)
- Use CSS custom properties for colors
- Test in both light and dark modes

**Modifying colors/theme:**
- Edit `_sass/_variables.scss` only
- Change CSS custom properties in `:root` blocks
- Dark mode variants in `@media (prefers-color-scheme: dark)`

**Adding new pages:**
- Create HTML files in root directory
- Use `layout: default` in front matter
- Add `title: "Name"` and `nav_order: #` to automatically include in navigation

**Form modifications:**
- Edit `_sass/_forms.scss` for styling
- Use divs for individual inputs, fieldsets for grouped elements
- Proper semantic HTML with labels
- Clean styling without excessive effects

**Navigation changes:**
- Header/mobile nav in `_sass/_navigation.scss`
- Update both desktop and mobile versions
- Test hamburger menu functionality

### File Responsibilities

- `_variables.scss` - Colors, fonts, breakpoints only
- `_layout.scss` - Basic layout, containers, section styling, accessibility
- `_typography.scss` - Text styling, horizontal rules
- `_forms.scss` - Form elements, button styling, semantic HTML
- `_navigation.scss` - Header and mobile navigation

### Best Practices

✅ **Do:**
- Keep semantic HTML structure
- Use CSS custom properties for theming
  - Test responsive behavior
- Maintain clean aesthetic (simple borders, bold typography)
  - Use existing component patterns
- Keep interactions simple and functional

❌ **Avoid:**
- Inline styles
- Excessive animations or transforms
- Box shadows and complex effects
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
  padding: 1rem;
  
  &:hover {
    background: $accent-color;
    color: $background;
  }
}
```

Breakpoint variable:
```scss
@media (max-width: $mobile-breakpoint) {
  // Mobile styles
}
```

This starter gives you a clean foundation to build upon without excessive styling distractions.

