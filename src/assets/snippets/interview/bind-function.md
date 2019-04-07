### Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.

```js
function example(foo, bar) {
  console.log("args:", foo, bar)
  console.log("context:", this)
}
const boundExample = bind(example, { a: true }, "baz")
boundExample.call({ b: true }, 42)
// output:
// args: "baz" 42
// context: { a: true }
```

#### Answer

Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args])
```

#### Good to hear

##### Additional links

<!-- Whenever possible, link a more detailed explanation. -->

<!-- tags: (javascript) -->

<!-- expertise: (1) -->
