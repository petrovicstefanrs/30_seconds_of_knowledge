### remove

> `Number → Number → [a] → [a]`

Removes the sub-list of list starting at index start and containing count elements. Note that this is not destructive: it returns a copy of the list with the changes. No lists have been harmed in the application of this function.

`Example`

```js
R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); //=> [1,2,6,7,8]
```
