### Head

#### Description
Returns the head of a collection.

Use `IEnumerable.Count()` to check if the enumerable is non-empty.
Use `IEnumerable.Take(1)` to get the first element, `IEnumerable.ToArray()[0]` to convert to array and return the element.
If the enumerable object is empty, return the `default()` value for the given type.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static T Head<T>(IEnumerable<T> list) 
  {
    return list.Count() != 0 ? list.Take(1).ToArray()[0] : default(T);
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5 };
List<int> empty = new List<int> { };
char[] chars = {'A','B','C'};

_30s.Head(nums); // 1
_30s.Head(empty); // 0
_30s.Head(chars); // 'A'
```
