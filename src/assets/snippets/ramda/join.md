### join

> ```String → [a] → String```

Returns a `string` made by inserting the separator between each element and concatenating all the elements into a single `string`.

`Example`

```js
const spacer = R.join(' ');

spacer(['a', 2, 3.4]);      //=> 'a 2 3.4'

R.join('|', [1, 2, 3]);     //=> '1|2|3'
```