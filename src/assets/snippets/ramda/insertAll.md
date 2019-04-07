### insertAll

> ```Number → [a] → [a] → [a]```

Inserts the sub-list into the list, at the specified index. Note that this is not destructive: it returns a copy of the list with the changes. No lists have been harmed in the application of this function.

`Example`

```js
R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
```