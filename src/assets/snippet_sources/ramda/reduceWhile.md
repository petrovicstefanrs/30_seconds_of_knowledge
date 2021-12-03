### reduceWhile

> `((a, b) → Boolean) → ((a, b) → a) → a → [b] → a`

Like `reduce`, `reduceWhile` returns a single item by iterating through the list, successively calling the iterator function. `reduceWhile` also takes a predicate that is evaluated before each step. If the predicate returns `false`, it "short-circuits" the iteration and returns the current value of the accumulator.

`Example`

```js
const isOdd = (acc, x) => x % 2 === 1;
const xs = [1, 3, 5, 60, 777, 800];

R.reduceWhile(isOdd, R.add, 0, xs); //=> 9

const ys = [2, 4, 6];

R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
```
