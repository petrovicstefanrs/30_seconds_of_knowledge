### FormatDuration

#### Description
Returns the human readable format of the given number of seconds.

Use `TimeSpan.FromSeconds()` to convert the number of `seconds` to a `TimeSpan` object.
Use `TimeSpan.ToString()` with an appropriate format specifier to return a human readable string of the value.

```csharp
public static partial class _30s 
{
  public static string FormatDuration(double seconds) 
  {
    return TimeSpan.FromSeconds(seconds).ToString(@"d\.hh\:mm\:ss\.fff");
  }
}
```

```csharp
_30s.FormatDuration(34325055.574); // 397.06:44:15.574
```
