### converge

> `((x1, x2, …) → z) → [((a, b, …) → x1), ((a, b, …) → x2), …] → (a → b → … → z)`

Accepts a converging function and a list of branching functions and returns a new function. The arity of the new function is the same as the arity of the longest branching function. When invoked, this new function is applied to some arguments, and each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

`Example`

```js
const average = R.converge(R.divide, [R.sum, R.length]);

average([1, 2, 3, 4, 5, 6, 7]); //=> 4

const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower]);

strangeConcat('Yodel'); //=> "YODELyodel"
```
