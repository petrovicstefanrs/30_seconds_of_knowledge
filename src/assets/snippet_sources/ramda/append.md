### append

> `a → [a] → [a]`

Returns a new list containing the contents of the given list, followed by the given element.

`Example`

```js
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
```
