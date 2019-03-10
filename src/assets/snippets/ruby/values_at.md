### values_at

Using `values_at`to retrieve multiple non-sequential values of arrays and hashes.

For a given array it will return an array of the values associated with the index position.

```bash
  irb> programming_languages = ['Ruby', 'Python', 'Golang', 'C++', 'C', 'D']
   => ["Ruby", "Python", "Golang", "C++", "C", "D"]
  irb> programming_languages.values_at(0, 2, 4)
   => ["Ruby", "Golang", "C"]
```

For a given hash it will return an array of the values associated with the given keys.

```bash
  irb> fruits = { 'orange' => '$2.00', 'apple' => '$3.00', 'grapes' => '$2.50' }
   => => {"orange"=>"$2.00", "apple"=>"$3.00", "grapes"=>"$2.50"}
  irb> fruits.values_at('orange')
   => ["$2.00"]
```

 ##### Additional links

* [Ruby Doc - Array#values_at](https://apidock.com/ruby/Array/values_at)
* [Ruby Doc - Hash#values_at](https://apidock.com/ruby/Hash/values_at)
