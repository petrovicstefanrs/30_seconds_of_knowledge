### until

> `(a → Boolean) → (a → a) → a → a`

Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as the initial value. It does so by applying the transformation until the predicate is satisfied, at which point it returns the satisfactory value.

`Example`

```js
R.until(R.gt(R.__, 100), R.multiply(2))(1); // => 128
```
