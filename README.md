# ScrollMotion Library Docs

Visit [scrollmotion.vercel.app](https://scrollmotion.vercel.app) to see how the library works.

## Description

ScrollMotion is a JavaScript library for scroll animations that uses the IntersectionObserver functionality, designed to make implementation easier and faster in HTML.

## Installation

**NPM**
```bash
npm install @kubapiw15/scrollmotion 
```

**CDN**

```html
<script src="https://unpkg.com/@kubapiw15/scrollmotion@0.3.0/dist/index.js" defer></script>
```

## Usage

**Use animations by adding the `data-sm` attribute to your HTML element. This will hide the element and make it appear when the user scrolls to it.**

Standard fade-in animation
```html
<div data-sm></div>
<!-- OR -->
<div data-sm=""></div>
```

Use parameters to customize the animation
```html
<div data-sm="zoom up"></div>
```
```html
<div data-sm="right blur once"></div>
```
## Available parameters
**Directions**:
- `up`
- `down`
- `left`
- `right`
>^ Only one of them should be used in the element.

Explaination:
```html
<div data-sm="left"></div>
```
>^ The element moves from right to left when revealed.

Additional: 
- `zoom` - The element zooms in on scroll
- `blur` - The element is blurry when hidden
- `once` - The animation runs only once

tbc...