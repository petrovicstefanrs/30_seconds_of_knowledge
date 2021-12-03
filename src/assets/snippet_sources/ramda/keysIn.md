### keysIn

> `{k: v} → [k]`

Returns a list containing the names of all the properties of the supplied object, including prototype properties. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.

`Example`

```js
const F = function () {
  this.x = 'X';
};

F.prototype.y = 'Y';

const f = new F();

R.keysIn(f); //=> ['x', 'y']
```
