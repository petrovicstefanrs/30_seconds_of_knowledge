### diff

> def diff(that: GenSet[A]): This  

Used to find the difference between collections, `diff` finds elements from the first given collection that *aren't* present 
in the second one. To illustrate the point:

##### Example:

```scala
val aListOfIntegers = Seq(1,2,3,4,5,6,7,8,9)
val aSecondListOfIntegers = Seq(7,8,9,10,11)
val diffA = aListOfIntegers diff aSecondListOfIntegers
println(diffA)
val diffB = aSecondListOfIntegers diff aListOfIntegers
println(diffB)
```

##### Output:
```
List(1, 2, 3, 4, 5, 6)
List(10, 11)
```
