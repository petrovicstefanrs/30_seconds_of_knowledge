### intersperse

> `a → [a] → [a]`

Creates a new list with the separator interposed between elements.

Dispatches to the intersperse method of the second argument, if present.

`Example`

```js
R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
```
