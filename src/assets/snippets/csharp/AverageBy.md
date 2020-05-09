### AverageBy

#### Description
Returns the average of a collection, after mapping each element to a value using the provided function.

Use `IEnumerable.Select()` to map each element to the value returned by the provided selector function, `fn`.
Use `IEnumerable.Average()` to get the average of the resulting values.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static double AverageBy<T>(IEnumerable<T> values, Func<T,int> fn) 
  {
    return values.Select(fn).Average();
  }
}
```

```csharp
var p = new [] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};

_30s.AverageBy(p, v => v.a); // 2.5
_30s.AverageBy(p, v => v.b); // 1.5
```
