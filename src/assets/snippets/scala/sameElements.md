### sameElements

> def sameElements(that: GenIterable\[A\]): Boolean

Used to check equality of two iterables by inspecting the equality **and order** between elements.
One can even use different collection types and the function will still return true if the elements are the same.

##### Example:

```scala
val aListOfIntegers = List(1,2,3,4,5)
val anArrayOfIntegers = Array(1,2,3,4,5)
val secondArrayOfIntegers = Array(3,2,1,4,5)
println(aListOfIntegers sameElements anArrayOfIntegers)
println(anArrayOfIntegers sameElements secondArrayOfIntegers)
```

##### Output:
```
true
false
```
