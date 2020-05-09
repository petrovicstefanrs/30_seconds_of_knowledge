### DayOfTheWeek

#### Description
Returns the string representation of the weekday for the given `DateTime`.

Use `DateTime.ToString()` with an appropriate format modifier to return the day of the week.

```csharp
public static partial class _30s 
{
  public static string DayOfTheWeek(DateTime date) 
  {
    return date.ToString("dddd");  
  }
}
```

```csharp
_30s.DayOfTheWeek(new DateTime(2020, 1, 15)); // "Wednesday"
```
