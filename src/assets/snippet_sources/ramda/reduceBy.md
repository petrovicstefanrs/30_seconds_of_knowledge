### reduceBy

> `((a, b) → a) → a → (b → String) → [b] → {String: a}`

Groups the elements of the list according to the result of calling the `String-returning` function `keyFn` on each element and reduces the elements of each group to a single value via the reducer function `valueFn`.

This function is basically a more general groupBy function.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const groupNames = (acc, { name }) => acc.concat(name);
const toGrade = ({ score }) =>
  score < 65
    ? 'F'
    : score < 70
    ? 'D'
    : score < 80
    ? 'C'
    : score < 90
    ? 'B'
    : 'A';

var students = [
  { name: 'Abby', score: 83 },
  { name: 'Bart', score: 62 },
  { name: 'Curt', score: 88 },
  { name: 'Dora', score: 92 },
];

reduceBy(groupNames, [], toGrade, students);
//=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
```
