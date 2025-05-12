class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
         
    def bark (self):
        print (f"{self.name} says woof!")
        
    def get_age(self):
        print(f"{self.age}")
        
