# Changelog

All notable changes to this project will be documented in this file.

## [1.1.3] - 2021-09-18

## Fixed

- Updated NPM package `path-parse` to fix GitHub Dependabot alert relating to `CVE-2021-23343`.

## [1.1.2] - 2021-05-14

### Changed

- Changed the project's CSS framework from `Bootstrap` to `Tailwind`
- Changed font family from `IBM Plex` to `Fira`
- Changed color scheme

### Removed

- Removed `Jekyll` build pipeline entirely
- Removed `PurgeCSS` workflow as the `Tailwind` JIT compiler optimizes critical CSS
- Notification toast removed in favor of a simple confirmation message

## [1.1.1] - 2021-05-09

### Added

- Added PurgeCSS for optimized removal of unused styles

### Changed

- Toast now has solid background color and white text for clearer notification

### Fixed

- Sanitized string being written to clipboard that fixes `&` symbol being copied as `&amp;`

## [1.1.0] - 2021-05-04

### Added

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

### Changed

- Upgraded to Bootstrap 5
- Now using `Clipboard Web API` to copy passwords to clipboard

### Removed

- Removed `jQuery` dependency
- Removed `ClipboardJS` dependency
- Removed SVG icons for copying to clipboard
- Removed popovers shown for password copy confirmation

### Fixed

- Fixed whitespace that was prepended to passwords when using Mozilla Firefox

## [1.0.0] - 2020-08-08

### Added

- Initial release
