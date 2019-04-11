### intersect

> def intersect(that: GenSet\[A\]): Repr

Used with types implementing the `TraversableLike` trait, `partition` 
method splits a sequence into two (sub)collections based on the function
that you define.

##### Example:

```scala
val aListOfIntegers = List(1,2,3,4,5,6,7,8,9)
val splitterFunction: Int ⇒ Boolean = (someNum: Int) => someNum > 5
val (biggerOnes, smallerOnes) = aListOfIntegers partition splitterFunction

println(s"""Numbers higher than 5: $biggerOnes \nNumbers smaller than 5: $smallerOnes""")
```

##### Output:
```
Numbers higher than 5: List(6, 7, 8, 9) 
Numbers smaller than 5: List(1, 2, 3, 4, 5)
```
