### HexToByteArray

#### Description
Converts a hexadecimal string to a `byte` array.

Use `Enumerable.Range()` in combination with `string.Length` to get the indices of the given string in an array.
Use `Enumerable.Where()` to get only the even indices in the previous range.
Use `Enumerable.Select()` in combination with `Convert.ToByte()` and `string.Substring()` to convert each byte's hex code to a `byte`.
Finally, use `Enumerable.ToArray()` to return a `byte[]`.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static byte[] HexToByteArray(string hex)
  {
    return Enumerable.Range(0, hex.Length)
      .Where(x => x % 2 == 0)
      .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
      .ToArray();
  }
}
```

```csharp
_30s.HexToByteArray("F15936"); // { 241, 89, 54 }
```
