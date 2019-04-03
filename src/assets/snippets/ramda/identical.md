### identical

> ```a → a → Boolean```

Returns `true` if its arguments are identical, `false` otherwise. Values are identical if they reference the same memory. NaN is identical to `NaN`; 0 and -0 are not identical.

Note this is merely a curried version of ES6 Object.is.

`Example`

```js
const o = {};

R.identical(o, o);      //=> true
R.identical(1, 1);      //=> true
R.identical(1, '1');    //=> false
R.identical([], []);    //=> false
R.identical(0, -0);     //=> false
R.identical(NaN, NaN);  //=> true
```