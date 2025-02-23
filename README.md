# ScrollMotion Library Docs

Visit [scrollmotion.vercel.app](https://scrollmotion.vercel.app) to see how the library works.

## Description

ScrollMotion is a JavaScript library for scroll animations that uses the IntersectionObserver functionality, designed to make implementation easier and faster in HTML.

## Installation

**NPM**
```bash
# Install ScrollMotion via NPM
npm install @kubapiw15/scrollmotion 
```
```js
// Import the library in your JavaScript file
import SM from '@kubapiw15/scrollmotion';
```

**CDN**

```html
<!-- Include the ScrollMotion script in the HEAD section -->
<script src="https://unpkg.com/@kubapiw15/scrollmotion@0.3.0/dist/index.js"></script>
```

**Initialize the library**
```html
<!-- Initialize ScrollMotion at the end of the BODY -->
<script>
    SM.init();
</script>
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

Explanation:
```html
<div data-sm="left"></div>
```
>^ The element moves from right to left when revealed.

Additional: 
- `zoom` - The element zooms in on scroll
- `blur` - The element is blurry when hidden
- `once` - The animation runs only once

## Additional attributes
You can add additional attributes (except data-sm) to customize animation settings.
- `data-sm-duration` - Animation duration in **milliseconds** (changes the element's **transition-duration** style)
- `data-sm-delay` - Animation delay in **milliseconds** (changes the element's **transition-delay** style)
- `data-sm-opacity` - Opacity of the **hidden** element (from `0` to `1`, works well with the blur effect)
- `data-sm-shift` - Shift of the **hidden** element (`[value][unit]`, for example: `30px`)
- `data-sm-visibility` - Portion of the element that must be **visible** to trigger the animation (from `0` to `1`. `0` - any part of the element must be visible, `1` - the whole element must be visible)
- `data-sm-scale` - The **hidden** element's scale (recomended range: `0.75` to `0.99`. Only if using a zoom effect)

tbc...