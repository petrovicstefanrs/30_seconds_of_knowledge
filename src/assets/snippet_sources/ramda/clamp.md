### clamp

> `Ord a => a → a → a → a`

Restricts a number to be within a range.

Also works for other ordered types such as `Strings` and `Dates`.

`Example`

```js
R.clamp(1, 10, -5); // => 1
R.clamp(1, 10, 15); // => 10
R.clamp(1, 10, 4); // => 4
```
