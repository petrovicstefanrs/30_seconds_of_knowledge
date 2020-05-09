### MaxBy

#### Description
Returns the maximum of a collection, after mapping each element to a value using the provided function.

Use `IEnumerable.Select()` to map each element to the value returned by the provided selector function, `fn`.
Use `IEnumerable.Max()` to get the maximum of the resulting values.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s
{
  public static double MaxBy<T>(IEnumerable<T> values, Func<T,int> fn)
  {
    return values.Select(fn).Max();
  }
}
```

```csharp
var p = new [] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};

_30s.MaxBy(p, v => v.a); // 3
_30s.MaxBy(p, v => v.b); // 2
```
