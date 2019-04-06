### traverse

> ```(Applicative f, Traversable t) => (a → f a) → (a → f b) → t a → f (t b)```

Maps an `Applicative-returning` function over a `Traversable`, then uses sequence to transform the resulting `Traversable` of `Applicative` into an `Applicative` of `Traversable`.

Dispatches to the traverse method of the third argument, if present.

`Example`

```js
// Returns `Maybe.Nothing` if the given divisor is `0`
const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)

R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
```