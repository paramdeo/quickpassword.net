# Changelog

All notable changes to this project will be documented in this file.

## [2022.6.1]

- Refactored the project scaffolding using `Svelte` + `Vite`
- Removed `ChanceJS` dependency and wrote pure JavaScript instead for password generation
- Changed the project's CSS framework from `Tailwind` to `Bootstrap` (will add custom styling in a future update)

## [2021.10.3]

- Added minification of CSS and HTML via NPM package `html-minify`
- Changed all instances of `var` to `let` in keeping with ES2015 syntax
- Changed project description and Open Graph image

## [2021.10.2]

- Added GoatCounter Analytics via self-hosted `/count.js`
- Added GoatCounter endpoints to the Content Security Policy in `netlify.toml`

## [2021.9.1]

- Updated NPM package `path-parse` to fix GitHub Dependabot alert relating to `CVE-2021-23343`.

## [2021.5.3]

- Changed the project's CSS framework from `Bootstrap` to `Tailwind`
- Changed font family from `IBM Plex` to `Fira`
- Changed color scheme
- Removed `Jekyll` build pipeline entirely
- Removed `PurgeCSS` workflow as the `Tailwind` JIT compiler optimizes critical CSS
- Notification toast removed in favor of a simple confirmation message

## [2021.5.2]

- Added PurgeCSS for optimized removal of unused styles
- Toast now has solid background color and white text for clearer notification
- Sanitized string being written to clipboard that fixes `&` symbol being copied as `&amp;`

## [2021.5.1]

- Clicking on a password field copies the password to the clipboard
- Added custom pointer and title when hovering over password fields
- Toasts are shown for password copy confirmation
- Added security headers for
    - `Permissions-Policy`
    - `X-Frame-Options`
    - `X-XSS-Protection`
    - `Referrer-Policy`
    - `Strict-Transport-Security`
    - `Content-Security-Policy`
- Upgraded to Bootstrap 5
- Now using `Clipboard Web API` to copy passwords to clipboard
- Removed `jQuery` dependency
- Removed `ClipboardJS` dependency
- Removed SVG icons for copying to clipboard
- Removed popovers shown for password copy confirmation
- Fixed whitespace that was prepended to passwords when using Mozilla Firefox

## [2020.8.1]

- Initial release
