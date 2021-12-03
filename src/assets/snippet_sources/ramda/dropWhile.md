### dropWhile

> `(a → Boolean) → [a] → [a]` > `(a → Boolean) → String → String`

Returns a new list excluding the leading elements of a given list which satisfy the supplied predicate function. It passes each value to the supplied predicate function, skipping elements while the predicate function returns true. The predicate function is applied to one argument: (value).

Dispatches to the `dropWhile` method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const lteTwo = (x) => x <= 2;

R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
R.dropWhile((x) => x !== 'd', 'Ramda'); //=> 'da'
```
