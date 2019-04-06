### ap

> ```[a → b] → [a] → [b]```
> ```Apply f => f (a → b) → f a → f b```
> ```(r → a → b) → (r → a) → (r → b)```

`ap` applies a list of functions to a list of values.

Dispatches to the ap method of the second argument, if present. Also treats curried functions as applicatives.

`Example`

```js
R.ap([R.multiply(2), R.add(3)], [1,2,3]);                   //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']);  //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
R.ap(R.concat, R.toUpper)('Ramda')                          //=> 'RamdaRAMDA'
```