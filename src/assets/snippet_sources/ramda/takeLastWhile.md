### takeLastWhile

> `(a → Boolean) → [a] → [a]` > `(a → Boolean) → String → String`

Returns a new list containing the last `n` elements of a given list, passing each value to the supplied predicate function, and terminating when the predicate function returns `false`. Excludes the element that caused the predicate function to fail. The predicate function is passed one argument: (value).

`Example`

```js
const isNotOne = (x) => x !== 1;

R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]

R.takeLastWhile((x) => x !== 'R', 'Ramda'); //=> 'amda'
```
