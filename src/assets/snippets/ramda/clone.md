### clone

> ```{*} → {*}```

Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates. Functions are assigned by reference rather than copied

Dispatches to a clone method if present.

`Example`

```js
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);

objects === objectsClone;       //=> false
objects[0] === objectsClone[0]; //=> false
```