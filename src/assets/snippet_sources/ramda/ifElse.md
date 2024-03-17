### ifElse

> `(*… → Boolean) → (*… → *) → (*… → *) → (*… → *)`

Creates a function that will process either the `onTrue` or the `onFalse` function depending upon the result of the condition predicate.

`Example`

```js
const incCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
);

incCount({}); //=> { count: 1 }
incCount({ count: 1 }); //=> { count: 2 }
```
