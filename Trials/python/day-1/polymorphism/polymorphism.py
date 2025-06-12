# Polymorphism = Greek word that means to "have many forms or faces"
#                Poly = many
#                Morphe = Form

# ------------------------ Two Ways to achieve polymorphism ------------------------
# 1. Inheritance = An object could be treated of the same type as a parent class
# 2. "Duck typing" = Object must have necessary attributes/methods

# -------------- Inheritance --------------------
from abc import ABC, abstractmethod

class Shape:
    
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return  3.14 * self.radius ** 2

class Square(Shape):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side ** 2
    

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
        
    def area(self):
        return self.base * self.height * 0.5

class Pizza(Circle): #inherits from the circle class, so it is also considered a circle
    def __init__(self, topping, radius):
        super(). __init__(radius)
        self.topping = topping
        

shapes = [Circle(14), Square(6), Triangle(11, 17), Pizza("pepperoni", 15)]

for shape in shapes:
    print(f"{shape.area()}cm²")

# Each object here has two forms / two faces, ie. a Square is a Square and a shape etc.