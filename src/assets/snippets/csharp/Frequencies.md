### Frequencies

#### Description
Returns a `Dictionary` with the unique values of a collection as keys and their frequencies as the values.

Use `IEnumerable.GroupBy()` to create groups for each distinct value in the collection.
Use `IEnumerable.ToDictionary()` to convert the result of the previous operation to a `Dictionary`.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static Dictionary<T,int> Frequencies<T>(IEnumerable<T> values)
  {
    return values
      .GroupBy(v => v)
      .ToDictionary(v => v.Key, v => v.Count());
  }
}
```

```csharp
char[] c = {'a', 'b', 'a', 'c', 'a', 'a', 'b'}; 

_30s.Frequencies(c); // { [a, 4], [b, 2], [c, 1] }
```
