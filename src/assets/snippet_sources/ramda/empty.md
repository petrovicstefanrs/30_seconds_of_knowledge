### empty

> `a → a`

Returns the empty value of its argument's type. Ramda defines the empty value of `Array ([])`, `Object ({})`, `String ('')`, and Arguments. Other types are supported if they define `<Type>.empty`, `<Type>.prototype.empty` or implement the `FantasyLand Monoid` spec.

Dispatches to the empty method of the first argument, if present.

`Example`

```js
R.empty(Just(42)); //=> Nothing()
R.empty([1, 2, 3]); //=> []
R.empty('unicorns'); //=> ''
R.empty({ x: 1, y: 2 }); //=> {}
```
