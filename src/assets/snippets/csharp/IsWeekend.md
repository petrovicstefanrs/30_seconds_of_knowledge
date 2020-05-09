### IsWeekend

#### Description
Returns `true` if the given `DateTime` is a not weekday, `false` otherwise.

Use `DateTime.DayOfWeek` to check if the given `DateTime` is a Saturday or Sunday.

```csharp
public static partial class _30s 
{
  public static bool IsWeekend(DateTime date) 
  {
    return date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday;
  }
}
```

```csharp
_30s.IsWeekend(new DateTime(2020, 1, 15)); // false
_30s.IsWeekend(new DateTime(2020, 1, 19)); // true
```
