### hasIn

> `s → {s: x} → Boolean`

Returns whether or not an object or its prototype chain has a property with the specified name

`Example`

```js
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const square = new Rectangle(2, 2);

R.hasIn('width', square); //=> true
R.hasIn('area', square); //=> true
```
