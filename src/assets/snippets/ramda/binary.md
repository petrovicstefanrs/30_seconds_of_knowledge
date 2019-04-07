### binary

> ```(* → c) → (a, b → c)```

Wraps a function of any arity (including nullary) in a function that accepts exactly 2 parameters. Any extraneous parameters will not be passed to the supplied function.

`Example`

```js
const takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};

takesThreeArgs.length;    //=> 3
takesThreeArgs(1, 2, 3);  //=> [1, 2, 3]

const takesTwoArgs = R.binary(takesThreeArgs);

takesTwoArgs.length;    //=> 2
// Only 2 arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3);  //=> [1, 2, undefined]
```