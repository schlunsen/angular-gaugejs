# angular-gaugejs

Angular directive to show a gauge (using [gauge.js](http://bernii.github.io/gauge.js/))

Copyright (C) 2014, Rasmus Schlünsen 

## Usage

Include both gauge.js and angular-gauge.js in your application.

```html
<script src="components/gauge.js/dist/gauge.js"></script>
<script src="components/angular-gaugejs/angular-gauge.js"></script>
```

Add the module `gaugejs` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['gaugejs']);
```

You can now start using the gaugejs directive to display an animated gauge. 
Currently the directive must be used on canvas tags

```html
<canvas gaugejs></canvas>
```
