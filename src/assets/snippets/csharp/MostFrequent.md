### MostFrequent

#### Description
Returns the most frequent element of a collection.

Use `IEnumerable.GroupBy()` to group `values` by value.
Use `IEnumerable.OrderByDescending()` in combination with `IEnumerable.Count()` to order the results in descending order based on frequency.
Use `IEnumerable.First()` to get the first element and return its `Key` property, which corresponds to the element's value.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static T MostFrequent<T>(IEnumerable<T> values)
  {
    return values
      .GroupBy(v => v)
      .OrderByDescending(v => v.Count())
      .First()
      .Key;
  }
}
```

```csharp
int[] nums = { 1, 2, 3, 3, 2, 3 };
List<string> str = new List<string> { "a", "b", "b", "c" };

_30s.MostFrequent(nums); // 3
_30s.MostFrequent(str); // "b"
```
