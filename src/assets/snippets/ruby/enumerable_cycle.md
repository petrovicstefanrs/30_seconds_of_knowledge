### Enumerable#cycle

Ruby's `Enumerable#cycle` offers an easy way to either repeat a certain pattern n times or just to switch between two predefined states.

Repeating a certain pattern:

```bash
irb> array = [1, 2, 3]
 => [1, 2, 3]
irb> array.cycle(3).to_a
 => [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Switching between two states:

```bash
irb> button = ['on', 'off'].cycle
 => #<Enumerator: ["on", "off"]:cycle>
irb> button.next
 => "on"
irb> button.next
 => "off"
```

##### Additional links

* [Ruby Doc - Enumerable#cycle](https://ruby-doc.org/core-2.6.1/Enumerable.html#method-i-cycle)
