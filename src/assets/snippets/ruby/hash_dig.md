### Hash#dig

Ever wondered if there is a better way how you can traverse through multi-layer hashes or arrays to retrieve a specific value? Luckily Ruby 2.3 introduced a new method called `dig`.

```ruby
  catalogue = {
    drinks: {
      apple_juice: {
        stock: 8,
        price_per_unit: 2.4
      },
      orange_juice: {
        stock: 4,
        price_per_unit: 2.2
      }
    }
  }
```

Given the above hash, we would access the price per unit of the orange juice by the below line.

```ruby
  catalogue[:drinks][:carrot_juice][:price_per_unit]
  => NoMethodError: undefined method `[]' for nil:NilClass
```

To mitigate Rails to throw an error we need to check the existence of each key while navigating through the hash structure.

```ruby
  catalogue[:drinks] && catalogue[:drinks][:carrot_juice] && catalogue[:drinks][:carrot_juice][:price_per_unit]
```

By using `dig` we follow **DRY** and retrieve the value of each key object by dealing smoothly with nil values.

```ruby
  catalogue.dig(:drinks, :carrot_juice, :price_per_unit)
  => nil
  catalogue.dig(:drinks, :apple_juice, :price_per_unit)
  => 2.4
```

##### Additional links

* [Ruby Doc - Hash#dig](https://ruby-doc.org/core-2.3.0_preview1/Hash.html#method-i-dig)
