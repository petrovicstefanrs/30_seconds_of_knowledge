### Chunk

#### Description
Chunks a collection into smaller lists of a specified size.

Use `IEnumerable.Select()` to convert the given list to index-value pairs.
Use `IEnumerable.GroupBy()` to split elements into groups based on their index.
Use `IEnumerable.Select()` a second time to map each group's elements to their values and `IEnumerable.ToList()` to convert the result to a list.
Finally, use `IEnumerable.ToList()` on the result to convert everything to a list and return it.
If the original list can't be split evenly, the final chunk will contain the remaining elements.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static List<List<T>> Chunk<T>(IEnumerable<T> data, int size)
  {
    return data
      .Select((x, i) => new { Index = i, Value = x })
      .GroupBy(x => x.Index / size)
      .Select(x => x.Select(v => v.Value).ToList())
      .ToList();
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5 };

_30s.Chunk(nums, 2); // { {1, 2}, {3, 4}, {5} }
```
