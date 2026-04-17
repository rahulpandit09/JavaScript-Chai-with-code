class Animal:
    def eat(self):
        print("Animal is eating food")

class Dog(Animal):
    def bark(self):
        print("Do is barking")

d = Dog()
d.eat()
d.bark()