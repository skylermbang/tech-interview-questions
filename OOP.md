OOP 



4 pillars 

1.Encapsulation

It limit the access of property or variable.
It decouples the core logic to other so even if we change this 
core logic it wont affect , good for scalability.
Using private or protected syntax in JS/TS


2.Inheritacne

Child will get partent's properties.
Can extend the characterlistic. 
If it too much then hard to track. 


3. Polymolphism

Poly in greek is many Molphism is format

The ability to use a single interface or method name to represent different underlying forms (implementations).
Makes code flexible and extensible.
```
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(a => a.speak()); // Each speaks differently

```

It is like generic function 


4. Abstraction

HIding complex detail and only shows the esseential feature
abstract class(business logic + call signature) or interfact (call signature or type contract.)

Helps developers focus on what an object does, not how it does it.

