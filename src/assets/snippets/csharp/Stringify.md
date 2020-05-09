### Stringify

#### Description
Combines the elements of an enumerable object into a string.

Use `string.Join()` to combine all elements in the `IEnumerable` into a `string`, using `delimiter`.
Omit the second argument, `delimiter`, to use the default delimiter of `","`.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static string Stringify<T>(IEnumerable<T> elements, string delimiter = ",") 
  {
    return string.Join(delimiter, elements);
  }
}
```

```csharp
IList<string> s = new List<string> {"a", "b", "c"};
int[] n = {1, 2, 3};

_30s.Stringify(s); // "a,b,c"
_30s.Stringify(n, " "); // "1 2 3"
```
