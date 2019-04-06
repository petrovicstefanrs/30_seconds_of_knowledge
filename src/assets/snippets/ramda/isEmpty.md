### isEmpty

> ```a → Boolean```

Returns `true` if the given value is its type's empty value; `false` otherwise.

`Example`

```js
R.isEmpty([1, 2, 3]);   //=> false
R.isEmpty([]);          //=> true
R.isEmpty('');          //=> true
R.isEmpty(null);        //=> false
R.isEmpty({});          //=> true
R.isEmpty({length: 0}); //=> false
```