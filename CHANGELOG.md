# Changelog

All notable changes to the Yumma CSS Library will be documented in this file.

## v0.0.1

### Added
- Initial release of Yumma CSS.

### Changed
- None

### Fixed
- None

### Deprecated
- None

## v0.1.0

### Added
- Improved utility class generation for Height, Margin, Padding, and Width.
- Added new classes and selectors for Height, Margin, Padding, and Width properties.

### Changed
- Replaced the `copyStyles` function with `minifyStyles` for faster CDN loading.

### Fixed
- None

### Deprecated
- None

## v0.1.1

### Added
- None

### Changed
- Updated readme file

### Fixed
- None

### Deprecated
- None

## v0.2.0

### Added
- Added the `!default` flag to variables and maps in the _variables.scss file

### Changed
- None

### Fixed
- None

### Deprecated
- None

## v1.0.0

### Added
- Added `flow-root` property to **Display** classes.
- Added `inline-start` and `inline-end` properties to **Float** classes.
- Added `justify-all` and `match-parent` properties to **Text Align** classes.
- Added `overline` property to **Text Decoration Line** classes.
- Added `flex-start` and `flex-end` properties to **Align Items** classes.
- Added `end`, `flex-start`, `flex-end`, `left`, `right`, `normal` and `stretch` properties to **Justify Content** classes.
- Added `.mx` and `.my` **Margin** classes.
- Added `.px` and `.py` **Padding** classes.
- Added viewport values for **Height** and **Width** classes.
- Added the color `lead` in the Color Palette.
- Added **Align Content** classes.
- Added **Align Self** classes.
- Added **Flex Basis** classes.
- Added **Flex Grow** classes.
- Added **Grid Auto Columns** classes.
- Added **Grid Auto Flow** classes.
- Added **Grid Auto Rows** classes.
- Added **Justify Items** classes.
- Added **Justify Self** classes.
- Added **Cursor** classes.
- Added **List Style Type** classes.
- Added **Appearance** classes.
- Added **Pointer Events** classes.
- Added **User Select** classes.
- Added **Caret Colors** classes.
- Added **Font Family** classes.
- Added **Text Decoration** classes.

### Changed
- Updated display class syntax from `dis-{value}` to `d-{value}`.
- Updated hover state class syntax from `{value}-h-{value}` to `h:{value}`.
- Updated `greet()` function name to `showVer()`.
- Color palettes now use RGB.

### Fixed
- Small CSS resetting improvements.

### Deprecated
- Removed `break-all` and `keep-all` properties from **Overflow Wrap** classes.
- Removed duplicate classes for **Justify Content** classes.
- Removed class `nav-l` from navbar.scss.

## v1.0.1

### Added
- None

### Changed
- Changing Height and Width viewports from dynamic to standard.

### Fixed
- Updated minify version.

### Deprecated
- None

## v1.0.2

### Added
- None

### Changed
- Small CSS resetting improvements.

### Fixed
- Fixed viewport classes from not working.
- Fixed caret color light and dark variations.

### Deprecated
- None

## v1.0.3

### Added
- None

### Changed
- Minified CSS file moved to the `/dist` folder.

### Fixed
- None

### Deprecated
- None

## v1.1.0

### Added
- Added responsive classes for utility classes.
- Added transition property to button component.
- Added extra small variant for font size classes.
- Added `.dim-{value}` classes.

### Changed
- Updated syntax for column responsive classes.
- Updated box shadow syntax from `bs-xsm` to `bs-xs` and `bs-xlg` to `bs-xl`.
- Updated box shadow syntax from `fs-xlg` to `bs-xl`.
- Updated box shadow syntax from `col-{value}` to `cols-{value}`.

### Fixed
- Fixed list style type syntax from `tst-{value}` to `lst-{value}`.
- Fixed `fs-md` class not working.
- Fixed caret color variants.

### Deprecated
- None

## v1.2.0

### Added
- Added `fit-content` to **Height** and **Width** classes.
- Added **Max Dimension** and **Min Dimension** classes.
- Added `auto`, `full`, and `half` value to the **Flex** classes.
- Added Indigo color to the color palette.
- Added `transparent` to the color palette.
- Added `none` property to **Box Shadow** class.
- Added `.max-dim-{}` and `.min-dim-{}` classes.
- Added responsive media queries to `.dim-{}`,`.max-dim-{}` and `.min-dim-{}` classes.
- Added **Line Height** classes.
- The `.btn{}` component is now smaller by default.
- Improvements to the `_base.scss` partial file.
- Improvements in the **Direction** classes.
- Improvements to **Grid Template Columns** classes.
- Improvements to **Grid Template Rows** classes.
- Improvements to the **Flex Shrin**k clasess.
- Improvements to the **Font Sizes** classes.
- Improvements to the **Flex** classes.
- Color palette redesign.

### Changed
- Viewports units are not dynamic.
- Removed default shadow in the `.nav{}` component.
- **Border Radius** default value is now 4px instead of 8px.
- Removed `.bs{}` class from **Box Shadow**.

### Fixed
- None

### Deprecated
- Removed complement button component.
- Removed the `!default` flag from all variables.
- Magenta color is deprecated.
- The `showVer()` function is no longer available.