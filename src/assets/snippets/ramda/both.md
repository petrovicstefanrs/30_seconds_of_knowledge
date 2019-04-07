### both

> ```(*… → Boolean) → (*… → Boolean) → (*… → Boolean)```

A function which calls the two provided functions and returns the && of the results. It returns the result of the first function if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a false-y value.

In addition to functions, `R.both` also accepts any `fantasy-land` compatible applicative functor.

`Example`

```js
const gt10 = R.gt(R.__, 10)
const lt20 = R.lt(R.__, 20)
const f = R.both(gt10, lt20);

f(15); //=> true
f(30); //=> false

R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
R.both([false, false, 'a'], [11]);         //=> [false, false, 11]
```