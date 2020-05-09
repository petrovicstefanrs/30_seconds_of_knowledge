### ToCamelCase

#### Description
Converts a string to camel case.

Use `Regex.Matches()` with an appropriate regular expression to break the string into words.
Use `string.Join()` and `string.ToLower()` to convert the words to lowercase and combine them adding ` ` as a separator.
Use `CultureInfo.TextInfo.ToTitleCase()` on the result to convert it to title case, `string.Replace()` with a regular expression to remove spaces afterwards.
Finally, use `IEnumerable.Select()` on the result to convert the first character to lowercase and return a string from the result.

```csharp
using System.Globalization;
using System.Text.RegularExpressions;
using System.Linq;

public static partial class _30s 
{
  public static string ToCamelCase(string str) 
  {
    Regex pattern = new Regex(@"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+");
    return new string(
      new CultureInfo("en-US", false)
        .TextInfo
        .ToTitleCase(
          string.Join(" ", pattern.Matches(str)).ToLower()
        )
        .Replace(@" ", "")
        .Select((x, i) => i == 0 ? char.ToLower(x) : x)
        .ToArray()
    );
  }
}
```

```csharp
_30s.ToCamelCase("some_database_field_name"); // "someDatabaseFieldName"
_30s.ToCamelCase("Some label that needs to be title-cased"); // "someLabelThatNeedsToBeCamelized"
_30s.ToCamelCase("some-package-name"); // "somePackageName"
_30s.ToCamelCase("some-mixed_string with spaces_underscores-and-hyphens"); // "someMixedStringWithSpacesUnderscoresAndHyphens"
```
