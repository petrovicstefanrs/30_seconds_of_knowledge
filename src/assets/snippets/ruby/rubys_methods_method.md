### Ruby's .methods method

If you've ever wondering what methods are available for a specific object, just call `.methods` on it:

``` bash
irb> name = 'Bob'
 => "Bob"
irb> name.methods
 => [:include?, :%, :unicode_normalize, :*, :+, :to_c, ...]
 ```

This will return an array of symbols (names) of all publicly accessible methods of the object and its ancestors.
