### uniq

> ```[a] → [a]```

Returns a new list containing only one copy of each element in the original list. `R.equals` is used to determine equality.

`Example`

```js
R.uniq([1, 1, 2, 1]); //=> [1, 2]
R.uniq([1, '1']);     //=> [1, '1']
R.uniq([[42], [42]]); //=> [[42]]
```