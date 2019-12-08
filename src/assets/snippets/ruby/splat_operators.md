### Splat operators

The splat operator has almost endless uses. But the main idea is that whenever you don’t want to specify the number of arguments you have, you would use a splat operator. The simplest example would be something like this: 

```bash
irb> def foo(*args)
irb>  args
irb> end
 => :foo
irb> foo(1,5,9)
[1, 5, 9]
 => [1, 5, 9] 
```

You can also use the splat operator to grab any segment of an array:

```bash
irb> first, second, *last = ["x", "y", "w", "z"] 
 => ["x", "y", "w", "z"]
irb> first
 => "x"
irb> second
 => "y"
irb> last
 => ["w", "z"]
```

##### Additional links

* [Splat operators](https://medium.freecodecamp.org/rubys-splat-and-double-splat-operators-ceb753329a78)
