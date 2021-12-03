### nth

> `Number → [a] → a | Undefined` > `Number → String → String`

Returns the `nth` element of the given list or string. If `n` is negative the element at index length + `n` is returned.

`Example`

```js
const list = ['foo', 'bar', 'baz', 'quux'];

R.nth(1, list); //=> 'bar'
R.nth(-1, list); //=> 'quux'
R.nth(-99, list); //=> undefined

R.nth(2, 'abc'); //=> 'c'
R.nth(3, 'abc'); //=> ''
```
