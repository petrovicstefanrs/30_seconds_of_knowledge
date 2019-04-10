### until

> for (iterator ← someValue until upperExcludedBound)

The `until` method is useful in cases where one wants to traverse through a common range
of, say, `0` to `n-1`. The method returns a range which doesn't include the upper set bound. 
It's commonly used while traversing strings or other traversable objects. 

#####Example:

```scala
val myList = List(1,2,3,4,5)
for (i ← 0 until myList.length)
    println(myList(i))

```

#####Output:
```
1
2
3
4
5
```


This saves devs from having to write more explicit range statements such as:
```scala 
(i ← 0 to myList.length - 1)
```