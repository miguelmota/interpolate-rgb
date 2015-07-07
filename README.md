# interpolate-rgb

> Interpolate RGB colors.

[![NPM](https://nodei.co/npm/interpolate-rgb.png)](https://nodei.co/npm/interpolate-rgb)

# Install

```bash
npm install interpolate-rgb
```

```bash
bower install interpolate-rgb
```

# Usage

```javascript
var interpolateRGB = require('interpolate-rgb');

// Get RGB color in middle of white and black colors
console.log(interpolateRGB([0, 0, 0], [255, 255, 255], 0.5)); // [127.5, 127.5, 127.5]

// with alpha channels
console.log(interpolateRGB([0, 0, 0, 0], [255, 255, 255, 1], 0.5)); // [127.5, 127.5, 127.5, 0.5]

// Using partial application
var interpolator = interpolateRGB([0, 0, 0], [255, 255, 255]);
console.log(interpolator(0.5)); // [127.5, 127.5, 127.5]
```

# API

```
interpolateRGB(rgb1 /* array of rgb(a) values */, rgb2, t /* target value 0-1 */)
```

# Test

```bash
npm test
```

# License

MIT
