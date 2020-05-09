### Swap

#### Description
Swaps the values of two variables of the same type.

Pass both values by reference using the `ref` keyword, then use a `temp` variable to swap their values.

```csharp
public static partial class _30s 
{
  public static void Swap<T>(ref T val1, ref T val2) 
  {
    var temp = val1;
    val1 = val2;
    val2 = temp;
  }
}
```

```csharp
string a = "Ipsum";
string b = "Lorem";

_30s.Swap(ref a, ref b); // a = "Lorem", b = "Ipsum"
```
