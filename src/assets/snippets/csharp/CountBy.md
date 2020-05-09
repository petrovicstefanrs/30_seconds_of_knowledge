### CountBy

#### Description
Groups the elements of a collection based on the given function and returns the count of elements in each group.

Use `IEnumerable.GroupBy()` to create groups for each distinct value in the collection, after applying the provided function.
Use `IEnumerable.ToDictionary()` to convert the result of the previous operation to a `Dictionary`.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static Dictionary<R,int> CountBy<T,R>(IEnumerable<T> values, Func<T,R> map)
  {
    return values
      .GroupBy(map)
      .ToDictionary(v => v.Key, v => v.Count());
  }
}
```

```csharp
var p = new[] {
  new { a = 3, b = 2},
  new { a = 2, b = 1}
};

_30s.CountBy(p, x => x.a); // { [3, 1], [2, 1] }
```
