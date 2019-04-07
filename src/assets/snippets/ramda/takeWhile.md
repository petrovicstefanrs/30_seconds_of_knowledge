### takeWhile

> ```(a → Boolean) → [a] → [a]```
> ```(a → Boolean) → String → String```

Returns a new list containing the first `n` elements of a given list, passing each value to the supplied predicate function, and terminating when the predicate function returns `false`. Excludes the element that caused the predicate function to fail. The predicate function is passed one argument: (value).

Dispatches to the `takeWhile` method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const isNotFour = x => x !== 4;

R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]

R.takeWhile(x => x !== 'd' , 'Ramda');         //=> 'Ram'
```