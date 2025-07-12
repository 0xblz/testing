# Testing Site

A minimal Jekyll-based website with a clean, modern design using Tailwind-like color schemes.

## Features

- Responsive layout with max-width container
- Modern typography using Inter font family
- Organized SCSS architecture
- Tailwind-inspired color palette system
- Minimal JavaScript integration
- Custom 404 error page

## Project Structure

```
.
├── _layouts/       # Layout templates
├── _sass/         # SCSS partials
│   ├── _colors.scss    # Color palette definitions
│   ├── _layout.scss    # Main layout styles
│   ├── _reset.scss     # CSS reset
│   └── _variables.scss # Theme variables
└── assets/
    ├── css/       # Main stylesheet
    └── js/        # JavaScript files
```

## Development

### Prerequisites

- Ruby
- Jekyll ~> 4.3

### Setup

1. Install dependencies:
```sh
bundle install
```

2. Run the development server:
```sh
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### Customization

- Color schemes can be modified in `_sass/_colors.scss`
- Typography and layout variables in `_sass/_variables.scss`
- Main layout styles in `_sass/_layout.scss`

## Deployment

The site is configured to deploy to `testing.blaze.design`

## License

This project is open source. Feel free to use it as a template for your own site.
