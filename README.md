# BRUTA • MONO Testing Template

A minimal Jekyll-based testing environment with a complete brutalist/monochrome design system. This project serves as a **barebone template** for rapid prototyping and testing UI components with a built-in, production-ready styling framework.

## 🎯 Project Purpose

This is a **testing and prototyping template** designed for:

- **Rapid UI Testing**: Quickly test new components and layouts
- **Design System Foundation**: Pre-built monochrome styling system ready to use
- **AI Development**: Structured for AI-assisted development and iteration
- **Template Base**: Foundation for new projects requiring clean, modern aesthetics
- **Component Testing**: Isolated environment for testing individual UI elements

## 🎨 Design System

### **BRUTA • MONO Aesthetic**
- **Brutalist Design**: Raw geometric shapes, stark contrasts, bold typography
- **Monochrome Palette**: Pure black and white for maximum focus and clarity
- **Space Mono Font**: Consistent monospace typography from Google Fonts
- **Geometric Elements**: Sharp edges, no rounded corners, bold borders and shadows

### **Automatic Dark Mode**
- Seamlessly switches between light and dark themes
- Respects system `prefers-color-scheme` setting
- Smooth transitions with CSS custom properties
- Maintains brutalist aesthetic in both modes

## 📁 File Structure

```
├── _sass/
│   ├── _variables.scss    # Theme variables and CSS custom properties
│   ├── _layout.scss       # Basic layout and container styles
│   ├── _typography.scss   # All text and heading styles
│   ├── _forms.scss        # Form components and styling
│   ├── _components.scss   # Reusable UI components
│   └── _reset.scss        # CSS reset
├── assets/css/
│   └── style.scss         # Main stylesheet (imports all partials)
├── _layouts/
│   └── default.html       # Base HTML template
├── style.html             # Component showcase and documentation
└── index.html             # Homepage
```

## 🧩 Available Components

### **Typography**
- Hierarchical headings (H1-H3) with geometric borders
- Text utility classes (`.text-large`, `.text-caps`, `.text-highlight`, etc.)
- Code blocks and inline code styling
- Lists with custom geometric bullet points
- Blockquotes with quotation marks

### **Forms**
- Styled input fields with geometric shadows
- Custom checkbox and radio buttons
- Select dropdowns with theme-aware arrows
- Form validation states
- Responsive form layouts

### **UI Components**
- **`.mono-button`**: Primary button component
- **`.bruta-box`**: Geometric container with double borders
- **`.bruta-separator`**: Decorative divider with pattern
- **`.text-box`**: Content containers (standard and inverse)
- **`.text-grid`**: Responsive grid layout system
- **`.theme-indicator`**: Shows current theme mode

## 🚀 Quick Start

### **For Testing/Development:**
1. Clone or download this repository
2. Run `bundle install` (if using Jekyll locally)
3. Start development: `bundle exec jekyll serve`
4. Visit `/style.html` to see all available components

### **For AI Development:**
- Use `/style.html` as component reference
- All styles are modular and can be copied independently
- CSS custom properties make theming easy to modify
- Semantic HTML structure for accessibility

### **As a Template:**
1. Copy the `_sass/` directory for the complete design system
2. Import the stylesheets in your main CSS file
3. Use the HTML structure from `style.html` as component examples
4. Customize CSS custom properties in `_variables.scss` for different themes

## 💡 Usage Examples

### **Testing New Components**
```html
<!-- Add to any page for instant styling -->
<div class="bruta-box">
  <h2>New Component</h2>
  <p>Test content with automatic styling</p>
  <button class="mono-button">Action</button>
</div>
```

### **Custom Themes**
```scss
// Override in _variables.scss
:root {
  --background: #your-bg-color;
  --text-color: #your-text-color;
  --accent-color: #your-accent-color;
}
```

### **Form Testing**
```html
<!-- Instantly styled forms -->
<form>
  <div class="form-group">
    <label for="test">Test Input</label>
    <input type="text" id="test" placeholder="Styled automatically">
  </div>
  <button type="submit">Submit</button>
</form>
```

## 🎛️ Features

- **📱 Responsive Design**: Mobile-first approach with flexbox
- **🌓 Automatic Dark Mode**: System preference detection
- **♿ Accessibility**: Semantic HTML and proper contrast ratios
- **⚡ Performance**: Minimal, efficient CSS
- **🔧 Modular Architecture**: Easy to extend and customize
- **📚 Self-Documenting**: Live component showcase included

## 🔧 Customization

### **Colors**
Modify CSS custom properties in `_variables.scss`:
```scss
:root {
  --background: #ffffff;    // Background color
  --text-color: #000000;    // Text color
  --accent-color: #000000;  // Borders, highlights
  --shadow-color: #000000;  // Box shadows
}
```

### **Typography**
Change fonts in `_variables.scss`:
```scss
$font-family: 'Your Font', monospace;
$base-font-size: 18px;
```

### **Components**
Add new components to `_components.scss` following the existing patterns:
- Use CSS custom properties for colors
- Include hover states with geometric shadows
- Add responsive variants

## 🤖 AI Development Notes

- **Component Reference**: `/style.html` shows all available components
- **Modular Styles**: Each SCSS file has a single responsibility
- **CSS Custom Properties**: Easy to modify colors programmatically
- **Semantic Structure**: HTML follows accessibility best practices
- **Template Ready**: Can be copied and modified for any project
- **Testing Friendly**: Minimal setup required for component testing

## 📋 Dependencies

- **Jekyll** (for static site generation)
- **Sass** (for CSS preprocessing)
- **Google Fonts** (Space Mono)

## 📄 License

This is a testing template - use freely for any purpose.

---

**Perfect for**: UI testing, rapid prototyping, design system foundations, AI-assisted development, and as a starting point for projects requiring clean, modern aesthetics.
