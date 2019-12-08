### copy

`Copy` method is used for case classes where you need an another case class instance which may differ from the first one by 
one or more properties, passed as parameters. It, when invoked without any parameters, basically creates a shallow copy of a case class instance. Returns a case class instance.

##### Example:

```scala
case class Airliner(name: String, manufacturer: String, countryOfOrigin: String, ceiling: Double, numberOfEngines: Int)
val one = Airliner("777", "Boeing", "United States", 13.100, 2)
val two = one copy("747", one.manufacturer, one.countryOfOrigin, 13.700, 4)
println(one)
println(two)
```

It's helpful to predict copying so that you move the parameters that you expect to be different for instances to the front of the parameter list. Thusly, you could only pass the wanted parameters for the new instance, without having to specify the previous instance's ones. To illustrate the point on the example above:

```scala
case class Airliner(name: String, ceiling: Double, numberOfEngines: Int, manufacturer: String, countryOfOrigin: String)
val one = Airliner("777", 13.100, 2, "Boeing", "United States")
val two = one copy("747", 13.700, 4)
```

##### Output:
```
Airliner(777,Boeing,United States,13.1,2)
Airliner(747,Boeing,United States,13.7,4)
```
