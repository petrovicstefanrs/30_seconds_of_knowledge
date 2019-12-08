### exists

> def exists(p: (A) => Boolean): Boolean

Checks for an element's existence inside a collection. It does so by checking for the first element that matches the predicate.
You should use `exists` instead of `find()` combined with a `isDefined` for this purpose as it gives no such overhead.

##### Example:

```scala
val listy = List(1,2,3,4,5,6,7,8,9,10)
println(listy.exists(el => el > 3))
```

##### Output:
```
true
```
