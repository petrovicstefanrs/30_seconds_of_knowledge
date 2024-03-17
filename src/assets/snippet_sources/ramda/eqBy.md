### eqBy

> `(a → b) → a → a → Boolean`

Takes a function and two values in its domain and returns `true` if the values map to the same value in the codomain; `false` otherwise.

`Example`

```js
R.eqBy(Math.abs, 5, -5); //=> true
```
