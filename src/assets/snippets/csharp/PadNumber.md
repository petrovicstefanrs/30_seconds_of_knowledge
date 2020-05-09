### PadNumber

#### Description
Pads a given number to the specified `length`.

Use `Int32.ToString()` with an appropriate format specifier, produced using string interpolation.

```csharp
public static partial class _30s 
{
  public static string PadNumber(int n, int length)
  {
    return n.ToString($"D{length}");
  }
}
```

```csharp
_30s.PadNumber(1234,6); // "001234"
```
