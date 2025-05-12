#inheritance - Allows a class to inherit attributes and methods from another class
#            - Helps with code reusability and extensibility

class Animal: #parent class
    def __init__(self, name):
        self.name = name
        self.is_alive = True
        
    def eat(self):
        print(f"{self.name} is eating")
        
    def sleep(self):
        print(f"{self.name} is sleeping")
        
class Dog(Animal): #child class
    def speaks(self):
        print(f"{self.name} is barking")

class Cat(Animal):
    def speaks(self):
        print(f"{self.name} is meowing")

class Mouse(Animal):
    def speaks(self):
        print(f"{self.name} is squirking")

dog = Dog("Alex")
cat = Cat("Tom")
mouse = Mouse("Jerry")

print(cat.name)
dog.speaks()
mouse.speaks()