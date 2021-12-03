### objOf

> `String → a → {String:a}`

Creates an object containing a single `key:value` pair.

`Example`

```js
const matchPhrases = R.compose(R.objOf('must'), R.map(R.objOf('match_phrase')));

matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
```
