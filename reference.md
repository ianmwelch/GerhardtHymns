---
title: Template Reference
layout: post
---

## Javascript

Javascript is used sparingly in this template, and if solutions can be made through HTML and CSS, those are preferred. However for some special features, Javascript is almost unavoidable. The items below explain the few uses of Javascript and how to change them if necessary.

### Fading the Header and Footer

The headers and footers fade in and out when scrolling by default. This is done via Javascript in `/assets/js/functions.js`.  Three classes are called out (`.header`, `.bottom-nav`, `.footer`) and adjusted slightly different from one another. The moment in which the fading begins or ends can be adjusted using the `threshold` parameter:

```javascript
var threshold = 200
```

### Mobile Navigation Menu

Javascript controls the toggling of the mobile menu and shouldn't be changed. The menu can be styled through the `.main-menu-mobile` class found in `_sass/nordic/main-menu-mobile.scss`.

### Possible Dynamic Content

For content that you'd want to change periodically, Javascript may have to be used. Since the site uses Jekyll, a static website builder, dynamic content (e.g., changing featured content on the homepage) is impossible without Javascript. Without Javascript, new content can only be randomized on building the website. It cannot be randomized through timed events or on page loads. 

Content is currently randomized on the homepage only on build. This is done via Liquid in `_layouts/home.html`.

## Print

The website can be fine-tuned for printing in `_sass/nordic/print.scss`. Certain elements are omitted for printing (e.g., the main navigation, side navigation, and footer) while others are adapted for a printed page or PDF.

## Hamburger Animations






