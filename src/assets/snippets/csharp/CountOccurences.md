### CountOccurences

#### Description
Counts the occurences of a value in a collection.

Use `IEnumerable.Count()` in combination with `EqualityComparer<T>.Default.Equals()` to compare each value in the `IEnumerable` with `el`.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static int CountOccurences<T>(IEnumerable<T> obj, T el) 
  {
    return obj.Count(f => EqualityComparer<T>.Default.Equals(f, el));
  }
}
```

```csharp
string s = "fooBar";
List<int> nums = new List<int> { 1, 2, 3, 3, 3, 4, 5, 6 };

_30s.CountOccurences(s,'o'); // 2
_30s.CountOccurences(nums,3); // 3
```
