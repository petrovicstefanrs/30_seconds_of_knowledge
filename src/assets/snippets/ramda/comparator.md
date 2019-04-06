### comparator

> ```((a, b) → Boolean) → ((a, b) → Number)```

Makes a comparator function out of a function that reports whether the first element is less than the second.

`Example`

```js
const byAge = R.comparator((a, b) => a.age < b.age);
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByIncreasingAge = R.sort(byAge, people);
  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
```