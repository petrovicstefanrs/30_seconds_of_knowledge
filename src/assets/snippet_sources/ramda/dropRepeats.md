### dropRepeats

> `[a] → [a]`

Returns a new list without any consecutively repeating elements. `R.equals` is used to determine equality.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
```
