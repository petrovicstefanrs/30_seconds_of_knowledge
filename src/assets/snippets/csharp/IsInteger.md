### IsInteger

#### Description
Returns `true` if the given string can be parsed into an integer, `false` otherwise.

Return the result of calling `Double.TryParse()` with `NymberStyles.Integer` for the given `num` string.
Use `Double.TryParse()` to allow handling of values larger than `Int64`.

```csharp
using System.Globalization;

public static partial class _30s 
{
  public static bool IsInteger(string num) 
  {
    Double _ = 0.0;
    return Double.TryParse(num, NumberStyles.Integer, NumberFormatInfo.CurrentInfo, out _);
  }
}
```

```csharp
_30s.IsInteger("2"); // true
_30s.IsInteger("3.1"); // false
```
