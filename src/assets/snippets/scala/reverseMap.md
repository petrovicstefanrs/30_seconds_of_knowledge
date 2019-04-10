### reverseMap

Switches the keys and values of a given `Map`. 

#####Example:
```scala

val beASimpleMap = Map(
    "me" → "Nibiru",
    "you" → "Earth",
    "aliens" → "Sag A*"
    )

val thatMapReversed = for ((k, v) ← beASimpleMap) yield (v, k)
println(thatMapReversed)
```

#####Output:
```
Map(Nibiru -> me, Earth -> you, Sag A* -> aliens)
```