### SplitStringBy

#### Description
Splits a string into an array of strings using a multicharacter (string) separator.

Use `string.Split()` with the given `separator` to split the string into an array of strings.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static string[] SplitStringBy(string s, string separator) 
  {
    return s.Split(new [] {separator}, StringSplitOptions.None);
  }
}
```

```csharp
string s = "Apples--oranges--pears";

_30s.SplitStringBy(s,"--"); // {Apples, oranges, pears}
```
