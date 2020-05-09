### Decapitalize

#### Description
Decapitalizes the first letter of a string.

Use `string.ToCharArray()` to convert the string to an array of `char`, `chars`.
Use `char.ToLower(chars[0])` to decapitalize the first letter.
Finally, return a `new string()` from the `chars` array.

```csharp
public static partial class _30s 
{
  public static string Decapitalize(string str) 
  {
    char[] chars = str.ToCharArray();
    chars[0] = char.ToLower(chars[0]);
    return new string(chars);
  }
}
```

```csharp
string s = "FooBar";

_30s.Decapitalize(s); // "fooBar"
```
