### Append only uniq elements to array

You an call `.uniq` on the array after appending all elements. This will remove all elemnts that occure more than once in the array.

```bash
irb> array = []
=> []
irb> array << 1
=> [1]
irb> array << 2
=> [1, 2]
irb> array << 1
=> [1, 2, 1]
irb> array.uniq
=> [1, 2]
```

An ohter way is to only append an element if the array does not contain it already by using the **'|'**.

```bash
irb> array = []
=> []
irb> array << 1
=> [1]
irb> array << 2
=> [1, 2]
irb> array | [1]
=> [1, 2]
irb> array
=> [1, 2]
```
