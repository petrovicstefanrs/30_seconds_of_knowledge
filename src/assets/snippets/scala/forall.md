### Forall

> def forall(p: (A) ⇒ Boolean): Boolean

A helpful function whenever you need to verify that all elements of a collection correspond to the given condition.

##### Example:

```scala
val listy = List(1,2,3,4,5,6,7,8,9,10)

println(listy.forall(el => el > 0))
```

##### Output:
```
true
```
