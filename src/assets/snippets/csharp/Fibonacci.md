### Fibonacci

#### Description
Generates an array, containing the Fibonacci sequence, up until the nth term.

Starting with `0` and `1`, loop from `2` through `n` adding the sum of the last two numbers and appending to the sequence.
If `n` is less or equal to `0`, return a list containing `0`.

```csharp
public static partial class _30s 
{
  public static int[] Fibonacci(int n)
  {
    if (n <= 0 )  return new [] { 0 };
    int[] fib = new int[n + 1];
    fib[0] = 0;
    fib[1] = 1;
    for (int i = 2; i <= n; i ++)
    {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}
```

```csharp
_30s.Fibonacci(7); // { 0, 1, 1, 2, 3, 5, 8, 13 }
```
