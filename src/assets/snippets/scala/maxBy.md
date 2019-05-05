### maxBy

> def maxBy\[B\](f: (A) ⇒ B): A

An amazingly simple yet helpful function for getting the element with the maximum wanted value from a collection. 
Note that there's, of course, `minBy` with the same signature.

##### Example:

```scala
case class ReconnaissanceAircraft(codename: String, avionicsFactor: Double)
val listOfSpyPlanes = List(
  ReconnaissanceAircraft("Blackbird", 3.42),
  ReconnaissanceAircraft("Dragon lady", 1.23),
  ReconnaissanceAircraft("Orion", 4.22),
)
val mostAdvancedPlane = listOfSpyPlanes.maxBy(_.avionicsFactor)
println(mostAdvancedPlane.codename)
```

##### Output:
```
Orion
```
