# Zepto/jQuery CSS Detection
Provides a `$` method to determine whether a CSS property is supported. Tested in iOS, IE8+, Chrome, Firefox, Safari, and Opera.

## Usage

```javascript
$.cssDetect('text-align'); // true
$.cssDetect('textAlign'); // true

// Tests animation, webkitAnimation, mozAnimation,
// oAnimation, and msAnimation.
$.cssDetect('animation');
```
