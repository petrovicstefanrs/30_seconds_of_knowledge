### startsWith

> ```[a] → [a] → Boolean```
> ```String → String → Boolean```

Checks if a list starts with the provided sublist.

Similarly, checks if a string starts with the provided substring.

`Example`

```js
R.startsWith('a', 'abc')                //=> true
R.startsWith('b', 'abc')                //=> false
R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
```