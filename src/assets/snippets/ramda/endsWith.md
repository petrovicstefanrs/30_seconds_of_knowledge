### endsWith

> ```[a] → [a] → Boolean```
> ```String → String → Boolean```

Checks if a list ends with the provided sublist.

Similarly, checks if a string ends with the provided substring.

`Example`

```js
R.endsWith('c', 'abc')                //=> true
R.endsWith('b', 'abc')                //=> false
R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
```