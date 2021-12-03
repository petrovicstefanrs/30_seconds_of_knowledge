### toPairsIn

> `{String: *} → [[String,*]]`

Converts an object into an array of key, value arrays. The object's own properties and prototype properties are used. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.

`Example`

```js
const F = function () {
  this.x = 'X';
};

F.prototype.y = 'Y';

const f = new F();

R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
```
