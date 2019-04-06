### scan

> ```((a, b) → a) → a → [b] → [a]```

Scan is similar to `reduce`, but returns a list of successively reduced values from the left

`Example`

```js
const numbers = [1, 2, 3, 4];
const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
```