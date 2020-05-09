### Reverse

#### Description
Reverses a string.

Use `string.ToCharArray()` to convert the string to an array of `char`, `Array.Reverse()` to reverse the array.
Use `IEnumerable.ToArray()` to create an array of `char` and pass it to a `new string()`.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static void Reverse(string s) 
  {
    return new string(s.ToCharArray().Reverse().ToArray());
  }
}
```

```csharp
string s = "Hello World";

_30s.Reverse(s); // "dlroW olleH"
```
