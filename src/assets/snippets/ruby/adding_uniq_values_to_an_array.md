### Adding uniq values to an array

Let's say we wanna add a new element to an array but we want to make sure to keep each element uniq. One way to achieve this would be:

```bash
irb> alphabet = ['a','b','c']
 => ["a", "b", "c"]
irb> alphabet << 'c'
 => ["a", "b", "c", "c"]
irb> alphabet.uniq
 => ["a", "b", "c"]
```

Luckily Ruby offers Bitwise OR operator:

```ruby
x |= y
is shorthand for:
x = x | y
```

So our example from above would become:

```bash
irb> alphabet = ['a','b','c']
 => ["a", "b", "c"]
irb> alphabet | ['c']
 => ["a", "b", "c"]
```

We can also assign more then one element at the same time:

```bash
irb> alphabet = ['a','b','c']
 => ["a", "b", "c"]
irb> alphabet | ['c','d']
 => ["a", "b", "c", "d"]
```
