### createNDArray

> def createNDArray\[T\](rows: Int, cols: Int): Array\[Array\[T\]\]

Creates an N-dimensional array leveraging Scala's `Array.ofDim[Int]` method.
You can set and access the elements using parentheses, similar to a simple Array.

##### Example:

```scala
val a = Array.ofDim[Int](3, 2)
a(0)(0) = 20
val firstAdded = a(0)(0)
println(firstAdded)
```

##### Output:
```
20
```
