### project

> `[k] → [{k: v}] → [{k: v}]`

Reasonable analog to SQL select statement.

`Example`

```js
const abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 };
const fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 };
const kids = [abby, fred];

R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
```
