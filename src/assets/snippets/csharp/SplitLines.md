### SplitLines

#### Description
Splits a multiline string into an array of lines.

Use `string.Split()` with all forms of the newline separator to split the string into an array of strings.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static string[] SplitLines(string s)
  {
    return s.Split(new [] { "\r\n", "\r", "\n" }, StringSplitOptions.None);
  }
}
```

```csharp
string s = "This\nis a\nmultiline\nstring.\n";

_30s.SplitLines(s); // {"This", "is a", "multiline", "string." , ""}
```
