### Tail

#### Description
Returns the tail of a collection.

Use `IEnumerable.Count()` to check if the enumerable is non-empty.
Use `IEnumerable.Skip(1)` to get the whole object except for the first element.
If the enumerable object is empty, return the `default()` value for the given enumerable.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> Tail<T>(IEnumerable<T> list) 
  {
    return list.Count() != 0 ? list.Skip(1) : default(IEnumerable<T>);
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5 };
char[] chars = {'A','B','C'};

_30s.Tail(nums); // { 2, 3, 4, 5 }
_30s.Tail(chars); // {'B','C'}
```
