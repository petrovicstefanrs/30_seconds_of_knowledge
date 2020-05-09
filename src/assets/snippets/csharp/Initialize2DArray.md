### Initialize2DArray

#### Description
Initializes a 2D array of the given width, height and value.

Use `Enumerable.Repeat()` to repeat `value` `width` times, convert to an array and repeat `height` times using the same method.
Use `IEnumerable.Select()` and `IEnumerable.First()` to convert the jagged array to a 2D array.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static T[,] Initialize2DArray<T>(int width, int height, T value) 
  {
    return new [] { new T [height, width] }
      .Select(_ => new { x = _, y = Enumerable.Repeat(
          Enumerable.Repeat(value, width).ToArray(), height
        )
        .ToArray()
        .Select((a, ia) => a.Select((b, ib) => _[ia, ib] = b).Count()).Count() }
      )
      .Select(_ => _.x)
      .First();
  }
}
```

```csharp
_30s.Initialize2DArray(2, 3, 5); // { {5, 5}, {5, 5}, {5, 5} }
```
