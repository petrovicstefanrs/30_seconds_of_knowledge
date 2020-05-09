### Mask

#### Description
Replaces all but the last `n` characters in a string with the specified `mask` character.

Use `string.Substring()` to get the last `n` characters of the passed string, `str`.
Use `string.PadLeft()` to add as many `mask` characters as necessary to the start of the string to return a string of the same length.
Omit the third argument, `mask`, to use a default character of `'*'`.
Omit the second argument, `n`, to keep a default of `4` characters unmasked.

```csharp
public static partial class _30s 
{
  public static string Mask(string str, int n = 4, char mask = '*') 
  {
    return str.Substring(str.Length - n).PadLeft(str.Length, mask);
  }
}
```

```csharp
string s = "1234567890";

_30s.Mask(s); // "******7890"
_30s.Mask(s, 3); // "*******890"
_30s.Mask(s, 2, '/$'); // "$$$$$$$$90"
```
