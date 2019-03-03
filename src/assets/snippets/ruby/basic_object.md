### BasicObject

The BasicObject class is the top parent of all class. It is a blank instance of class `class` with no superclass and contains a minimum of methods for object creation and comparison.

``` bash
irb> class User
irb> end
 => nil
irb> User
 => User
irb> User.class
 => Class
irb> User.superclass
 => Object
irb> Object.ancestors
 => [Object, Kernel, BasicObject]
irb> BasicObject.class
 => Class
irb> BasicObject.superclass
 => nil
irb> BasicObject.ancestors
 => [BasicObject]
```

##### Additional links

* [Ruby Doc - BasicObject](https://ruby-doc.org/core-1.9.3/BasicObject.html)
