## Garbage Collection in Java

# What is it?
An automatic process of memory management. Objects are created on the heap (portion of program memory). When objects are no longer needed, the garbage collector deletes them to free up memory. 

# How does it work?
The garbage collector looks at heap memory, identifies which objects are used and which are not. It will delete unused objects. An object is in-use if a portion of a program still maintains a pointer to that object. When an object becomes unreferennced, the memory is reclaimed.

# Important garbage collection concepts

1. **Unreachable Objects**
An object that no longer contains a reference to it.

2. **Eligibility for garbage collection**
  1. Nullifying the reference variable
  2. Re-assigning the reference variable
  3. Object created inside a method
  4. Island of isolation

Example:s
  ```java
  Integer x = new Ingeger(2);
  x = null;
  // Once integer object is reassigned to null, it is no longer reachable and will be deleted by garbage collection
  ```