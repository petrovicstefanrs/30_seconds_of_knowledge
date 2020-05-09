### Repeat

#### Description
Creates a new string by repeating the given string `n` times.

Use `Enumerable.Repeat()` to repeat `s` `n` times, `string.Concat()` to convert the result to a `string`.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static string Repeat(string s, int n)
  {
    return string.Concat(Enumerable.Repeat(s, n));
  }
}
```

```csharp
_30s.Repeat("Ha",5); // "HaHaHaHaHa"
```
