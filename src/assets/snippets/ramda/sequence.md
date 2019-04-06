### sequence

> ```(Applicative f, Traversable t) => (a → f a) → t (f a) → f (t a)```

Transforms a Traversable of Applicative into an Applicative of Traversable.

Dispatches to the sequence method of the second argument, if present.

`Example`

```js
R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()

R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
R.sequence(R.of, Nothing());       //=> [Nothing()]
```