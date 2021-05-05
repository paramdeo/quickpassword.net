# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2020-05-04

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