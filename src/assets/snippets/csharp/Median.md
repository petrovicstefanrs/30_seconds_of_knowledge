### Median

#### Description
Finds the median of a list of numbers.

Use the `params` keyword to accept either an array or a variable number of arguments.
Sort the array using `Array.sort()` and find the median. 
Which is either the middle element of the list, if the list length is odd or the average of the two middle elements, if the list length is even.

```csharp
public static partial class _30s 
{
  public static double Median(params double[] values)
  {
    Array.Sort(values);
    if (values.Length % 2 == 0)
      return (values[values.Length / 2 - 1] + values[values.Length / 2]) / 2;
    return (double)values[values.Length / 2];
  }
}
```

```csharp
double[] nums = { 5, 6, 7, 8 };

_30s.Median(4, 8, 1); // 4
_30s.Median(nums); // 6.5
```
