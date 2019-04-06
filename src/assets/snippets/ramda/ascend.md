### ascend

> ```Ord b => (a → b) → a → a → Number```

Makes an ascending comparator function out of a function that returns a value that can be compared with `<` and `>`.

`Example`

```js
const byAge = R.ascend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByYoungestFirst = R.sort(byAge, people);
  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
```