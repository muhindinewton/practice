class Dog:
    legs_count = "four"
    def __init__(self, name="not named", age="not sure"):
        self.name = name
        self.age = age
         
    def bark(self):
        print(f"{self.name} says woof!")
        
    def get_age(self):
        return self.age

# main code
dog1 = Dog("Bosco", 13)
dog2 = Dog("Lucy", 22)

dog1.bark()
print(dog1.get_age())
print(dog1.legs_count)


dog2.bark()
print(dog2.get_age())

