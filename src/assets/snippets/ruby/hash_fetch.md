### Hash#fetch

Returns a value from the hash for the given key. If the key can't be found, there are several options:

- will raise a KeyError exception when no arguments given
- if a default is given, then that will be returned
- if the optional code block is specified, then that will be run and its result returned.

```bash
irb> user = {'first_name': 'Dummy', 'last_name': 'User'}
 => {:first_name=>"Dummy", :last_name=>"User"}
irb> user.fetch(:first_name)
 => "Dummy"
irb> user.fetch(:email)
KeyError: key not found: :email
  from (irb):5:in `fetch`
irb> user.fetch(:email, 'no email added')
 => "no email added"
irb> user.fetch(:email){ |e| "no #{e} added"}
 => "no email added"
```

##### Additional links

* [Ruby Doc - Hash#fetch](https://ruby-doc.org/core-2.2.0/Hash.html#method-i-fetch)
