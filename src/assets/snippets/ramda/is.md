### is

> ```(* → {*}) → a → Boolean```

See if an object (val) is an instance of the supplied constructor. This function will check up the inheritance chain, if any.

`Example`

```js
R.is(Object, {});             //=> true
R.is(Number, 1);              //=> true
R.is(Object, 1);              //=> false
R.is(String, 's');            //=> true
R.is(String, new String('')); //=> true
R.is(Object, new String('')); //=> true
R.is(Object, 's');            //=> false
R.is(Number, {});             //=> false
```