### ByteArrayToHex

#### Description
Converts a `byte` array to its hexadecimal string representation.

Use `BitConverter.ToString()` to convert the `byte` array to a string.
Use `string.Replace()` to remove dashes in the produced string.

```csharp
public static partial class _30s 
{
  public static string ByteArrayToHex(byte[] bytes) 
  {
    return BitConverter.ToString(bytes).Replace("-", "");
  }
}
```

```csharp
byte[] data = { 241, 89, 54 };

_30s.ByteArrayToHex(data); // "F15936"
```
