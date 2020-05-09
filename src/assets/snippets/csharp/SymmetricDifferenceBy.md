### SymmetricDifferenceBy

#### Description
Returns the symmetric difference betweend two collections, after applying the provided function to each element of both.

Use `IEnumerable.Select()` to map each element of either collection to the desired type.
Use `IEnumerable.Except()` to only return elements in one enumerable object and not the other.
Use `IEnumerable.Union()` to combine the result of applying that to each object.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<R> SymmetricDifferenceBy<T,R>(IEnumerable<T> a, IEnumerable<T> b, Func<T,R> map) 
  {
    IEnumerable<R> mapA = a.Select(map);
    IEnumerable<R> mapB = b.Select(map);
    return mapA.Except(mapB).Union(mapB.Except(mapA));
  }
}
```

```csharp
var p = new[] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};
var q = new[] {
  new { a = 6, b = 2},
  new { a = 6, b = 3}
};

_30s.SymmetricDifferenceBy(p, q, x => x.b); // { 1, 3 }
```
