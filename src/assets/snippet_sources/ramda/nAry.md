### nAry

> `Number → (* → a) → (* → a)`

Wraps a function of any arity (including nullary) in a function that accepts exactly `n` parameters. Any extraneous parameters will not be passed to the supplied function.

`Example`

```js
const takesTwoArgs = (a, b) => [a, b];

takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

const takesOneArg = R.nAry(1, takesTwoArgs);
takesOneArg.length; //=> 1
// Only `n` arguments are passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]
```
