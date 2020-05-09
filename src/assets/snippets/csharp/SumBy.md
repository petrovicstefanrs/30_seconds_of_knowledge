### SumBy

#### Description
Returns the sum of a collection, after mapping each element to a value using the provided function.

Use `IEnumerable.Select()` to map each element of either collection to a `double`, `IEnumerable.Sum()` to sum the values.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static double SumBy<T>(IEnumerable<T> data, Func<T,double> map)
  {
    return data.Select(map).Sum();
  }
}
```

```csharp
var p = new[] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};

_30s.SumBy(p, x => x.a); // 5
```
