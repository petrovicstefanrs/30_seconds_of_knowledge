### Capitalize

#### Description
Capitalizes the first letter of a string.

Use `string.ToCharArray()` to convert the string to an array of `char`, `chars`.
Use `char.ToUpper(chars[0])` to capitalize the first letter.
Finally, return a `new string()` from the `chars` array.

```csharp
public static partial class _30s 
{
  public static string Capitalize(string str) 
  {
    char[] chars = str.ToCharArray();
    chars[0] = char.ToUpper(chars[0]);
    return new string(chars);
  }
}
```

```csharp
string s = "fooBar";

_30s.Capitalize(s); // "FooBar"
```
