### splitWhen

> ```(a → Boolean) → [a] → [[a], [a]]```

Takes a list and a predicate and returns a pair of lists with the following properties:

The result of concatenating the two output lists is equivalent to the input list, none of the elements of the first output list satisfies the predicate and if the second output list is non-empty, its first element satisfies the predicate.

`Example`

```js
R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
```