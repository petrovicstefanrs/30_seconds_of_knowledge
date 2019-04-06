### descend

> ```Ord b => (a → b) → a → a → Number```

Makes a descending comparator function out of a function that returns a value that can be compared with `<` and `>`.

`Example`

```js
const byAge = R.descend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge, people);
  //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
```