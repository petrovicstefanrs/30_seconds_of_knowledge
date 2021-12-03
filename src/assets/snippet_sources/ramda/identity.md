### identity

> `a → a`

A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.

`Example`

```js
R.identity(1); //=> 1

const obj = {};

R.identity(obj) === obj; //=> true
```
