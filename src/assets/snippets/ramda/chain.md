### chain

> ```Chain m => (a → m b) → m a → m b```

`chain` maps a function over a list and concatenates the results. `chain` is also known as `flatMap` in some libraries.

Dispatches to the chain method of the second argument, if present, according to the FantasyLand Chain spec.

If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const duplicate = n => [n, n];

R.chain(duplicate, [1, 2, 3]);        //=> [1, 1, 2, 2, 3, 3]
R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
```