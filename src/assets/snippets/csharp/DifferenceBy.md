### DifferenceBy

#### Description
Returns the difference between two collections, after applying the provided function to each element of both.

Use `IEnumerable.Select()` to map each element of either collection to the desired type.
Use `IEnumerable.Except()` to only return elements in the second enumerable object and not the first one.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<R> DifferenceBy<T,R>(IEnumerable<T> a, IEnumerable<T> b, Func<T,R> map)
  {
    return a.Select(map).Except(b.Select(map));
  }
}
```

```csharp
var p = new[] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};
var q = new[] {
  new { a = 6, b = 2}
};

_30s.DifferenceBy(p, q, x => x.b); // { 1 }
```
