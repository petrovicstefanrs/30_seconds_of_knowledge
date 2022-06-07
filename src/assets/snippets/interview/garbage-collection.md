## Garbage Collectionß

# What is it?
An automatic process of memory management. Objects are created on the heap (portion of program memory). When objects are no longer needed, the garbage collector deletes them to free up memory. 

# How does it work?
The garbage collector looks at heap memory, identifies which objects are used and which are not. It will delete unused objects. An object is in-use if a portion of a program still maintains a pointer to that object. When an object becomes unreferennced, the memory is reclaimed.

# Important garbage collection concepts

1. **Unreachable Objects** <br /> An object that no longer contains a reference to it.

2. **Eligibility for garbage collection** <br /> The following are the four main ways objects become available for garbage collection.
    * Nullifying the reference variable
    * Re-assigning the reference variable
    * Object created inside a method
    * Island of isolation

Examples:
  ```java
  Integer x = new Ingeger(2);
  x = null;
  // Once integer object is reassigned to null, it is no longer reachable and will be removed by garbage collection.
  ```

  ```java
  Computer computerOne = new Computer();
  Computer computerTwo = new Computer();
  computerOne = computerTwo;
  // First object referred to by computerOne has been reassigned and is now available for garbage collection.
  ```