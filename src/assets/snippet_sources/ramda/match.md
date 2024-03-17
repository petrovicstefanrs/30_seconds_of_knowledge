### match

> `RegExp → String → [String | Undefined]`

Tests a regular expression against a `String`. Note that this function will return an empty array when there are no matches. This differs from `String.prototype.match` which returns null when there are no matches.

`Example`

```js
R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
R.match(/a/, 'b'); //=> []
R.match(/a/, null); //=> TypeError: null does not have a method named "match"
```
