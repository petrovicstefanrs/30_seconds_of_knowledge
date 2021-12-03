### not

> `* → Boolean`

A function that returns the `!` of its argument. It will return `true` when passed false-y value, and `false` when passed a truth-y one.

`Example`

```js
R.not(true); //=> false
R.not(false); //=> true
R.not(0); //=> true
R.not(1); //=> false
```
