### words

Converts a given string into an array of words.

Use `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.
Omit the second argument to use the default regexp.

```js
const words = (str, pattern = /[ ?!|/\/@#$%^&*~+=_.,:;'"`<>{}()\[\]\-]+/) => str.split(pattern).filter(Boolean);
```

```js
words('I люблю  javaScript!!'); // ["I", "люблю", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
