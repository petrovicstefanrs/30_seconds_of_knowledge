### CompactWhitespace

#### Description
Returns a string with whitespaces compacted.

Use `Regex.Replace()` with a regular expression to replace all occurences of 2 or more subsequent whitespace characters with a single space.

```csharp
using System.Text.RegularExpressions;

public static partial class _30s 
{
  public static string CompactWhitespace(string str) 
  {
    return Regex.Replace(str, @"\s{2,}", " ");
  }
}
```

```csharp
string s = "Lorem    ipsum\n   dolor sit   amet";

_30s.CompactWhitespace(s); // "Lorem ipsum dolor sit amet"
```
