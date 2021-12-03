### allPass

> `[(*… → Boolean)] → (*… → Boolean)`

Takes a list of predicates and returns a predicate that returns true for a given list of arguments if every one of the provided predicates is satisfied by those arguments.

The function returned is a curried function whose arity matches that of the highest-arity predicate.

`Example`

```js
const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({ rank: 'Q', suit: '♣︎' }); //=> false
isQueenOfSpades({ rank: 'Q', suit: '♠︎' }); //=> true
```
