### MinBy

#### Description
Returns the minimum of a collection, after mapping each element to a value using the provided function.

Use `IEnumerable.Select()` to map each element to the value returned by the provided selector function, `fn`.
Use `IEnumerable.Min()` to get the minimum of the resulting values.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static double MinBy<T>(IEnumerable<T> values, Func<T,int> fn)
  {
    return values.Select(fn).Min();
  }
}
```

```csharp
var p = new [] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};

_30s.MinBy(p, v => v.a); // 2
_30s.MinBy(p, v => v.b); // 1
```
