### anyPass

> `[(*… → Boolean)] → (*… → Boolean)`

Takes a list of predicates and returns a predicate that returns `true` for a given list of arguments if at least one of the provided predicates is satisfied by those arguments.

The function returned is a curried function whose arity matches that of the highest-arity predicate.

`Example`

```js
const isClub = R.propEq('suit', '♣');
const isSpade = R.propEq('suit', '♠');
const isBlackCard = R.anyPass([isClub, isSpade]);

isBlackCard({ rank: '10', suit: '♣' }); //=> true
isBlackCard({ rank: 'Q', suit: '♠' }); //=> true
isBlackCard({ rank: 'Q', suit: '♦' }); //=> false
```
