#super() = Function used in a child class to call methods from a parent class(superclass). It allows you to extend the functionality of the inherited methods
class Shapes:
    def __init__(self, color, is_filled):
      self.color = color
      self.is_filled = is_filled
      
    def describe(self):
        print(f"It is {self.color} and {'filled' if self.is_filled else 'not filled'}")
       

class Circle(Shapes):
    def __init__(self, color, is_filled, radius):
        super().__init__(color, is_filled)
        self.radius = radius
        
    def describe(self):
        print(f"it is a cricle with an area of {3.14 * self.radius * self.radius} cm^2")
        super().describe()
  
class Square(Shapes):
    def __init__(self, color, is_filled, width):
      super().__init__(color, is_filled)
      self.witdth = width
      
class Triangle(Shapes):
    def __init__(self, color, is_filled, width, height):
      super().__init__(color, is_filled)
      self.width = width
      self.height = height
      
circle = Circle(color="red", is_filled=True, radius=5)
square = Square(color="blue", is_filled=False, width=12)
triangle = Triangle(color="yellow", is_filled=True, width=22, height=17)
print(circle.color)
circle.describe()