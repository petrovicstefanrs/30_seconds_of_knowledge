### Where do methods live?

Ever wondered how you can find out where exactly a method lives inside Ruby?

Ruby offers two helpful methods here. By passing the name of the method as a symbol to `owner` will reveal where a method lives inside Ruby. If you curious about who receives s specific method, just pass the name again as a symbol to `receiver`.

``` bash
irb> method(:initialize).owner
 => BasicObject
irb> method(:initialize).receiver
 => main
```

##### Additional links

* [Ruby Doc - owner](https://apidock.com/ruby/v1_9_3_392/Method/owner)
* [Ruby Doc - receiver](https://apidock.com/ruby/v1_9_3_392/Method/receiver)
