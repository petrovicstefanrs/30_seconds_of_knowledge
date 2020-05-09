### FilterString

#### Description
Filter a string's contents to include only alphanumeric and allowed characters.

Use `string.ToCharArray()` in combination with `Array.FindAll()` to check if each character in the string is alphanumeric or contained in the `filter`.
Omit the second argument, `filter`, to only allow alphanumeric characters.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static string FilterString(string s, string filter = "")
  {
    return new string(
      Array.FindAll(s.ToCharArray(), c => char.IsLetterOrDigit(c) || filter.Contains(c))
    );
  }
}
```

```csharp
string s = "@30_seconds_of_code#-$";

_30s.FilterString(s); // "30secondsofcode"
_30s.FilterString(s,"_"); // "30_seconds_of_code"
_30s.FilterString(s,"_@"); // "@30_seconds_of_code"
```
