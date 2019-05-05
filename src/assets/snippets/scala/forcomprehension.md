### For comprehensions

For comprehensions, similar but more powerful than Python's `list comprehensions` could, besides various inclusion and transformation functionalities, provide a way to generate helpful iterable structures from scratch. Say that you want to create a coordinate system grid and add some events/places to each ordered pair. Here's how one could do that using a `for comprehesion` for a coord grid with a precision of half of a degree:

##### Example:

```scala
def generateCoordSystem: Map[(Double, Double), List[String]] = {
  val coordGridSeq: IndexedSeq[(Double, Double)] = for {
      /* Note that Double ranges are deprecated in newer versions, you should use BigDecimal instead */
      lat: Double ← -90.00 to 90.00 by 0.5
      long: Double ← -180.00 to 180.00 by 0.5
    } yield lat → long

  coordGridSeq
    .groupBy(t ⇒ t)
    .mapValues(_ ⇒ List.empty[String])
}

println(generateCoordSystem)
```

##### Output:
```
Map((84.0,45.0) -> List(), (87.0,143.5) -> List(), ...)
```
