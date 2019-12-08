### union

> def union(that: GenSet[A]): This

Used to find a union between two collections in Scala. Usually used with sets.
Should you use the function with other types, you should be aware of the fact that it *does include duplicates*, 
hence precautionary measures, as illustrated below, should be taken.

##### Example:

```scala
val aListOfIntegers = Seq(1,2,3,4,5,6,7,8,9)
val aSecondListOfIntegers = Seq(7,8,9,10,11)
val simpleUnion = aListOfIntegers union aSecondListOfIntegers
println("Simple union =>", simpleUnion)
// Now, to eliminate duplicates
println("Union with duplicates removed =>", simpleUnion distinct)
```

##### Output:
```
(Simple union => List(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11))
(Union with duplicates removed => List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))
```
