# Association refers to a relationship where two objects are related, but not in a way that one object owns the other.


# ------------- One way one-to-many relationship -------------
# One-to-Many: a type of relationship between objects where one object in class A is connected to multiple objects in class B
# GroceryItem does not need to know about the shopper but the shopper needs to know about the grocery items

class GroceryItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
        
class Shopper:
    def __init__(self, name):
        self.name = name
        self.grocery_items = []

# Create a shopper and some grocery items
shopper = Shopper("Kamau")
item1 = GroceryItem("Apple", 1)
item2 = GroceryItem("Banana", 2)

# Add the grocery items to the shopper's list
shopper.grocery_items.append(item1)
shopper.grocery_items.append(item2)

# Print the shopper's grocery list
for item in shopper.grocery_items:
    print(f"item:{item.name},", f"price: {item.price}")
   
 
# ------------- Two way one-to-many relationship -------------
# Student needs to know about the teacher and the teacher also needs to know abpit the student
class Student:
    
    all = []
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
        self._teacher = None
        Student.all.append(self)
        
    @property
    def teacher(self):
        return self._teacher
    
    @teacher.setter
    def teacher(self, value):
        if not isinstance(value, Teacher):
            raise TypeError("Teacher must be an instance of Teacher class")
        self._teacher = value
        
class Teacher:
    def __init__(self, name):
        self.name = name
        
    def Students(self):
        return [student for student in Student.all if student. teacher == self]
    
    def add_student(self, student):
        if not isinstance(student, Student):
            raise TypeError("Student must be an instance of Student class")
        student.teacher = self
        
#Creating teachers
mr_smith = Teacher("Mr. Smith")
ms_Johnson = Teacher("Ms. Johnson")

#creating students
alice = Student("Alice", 14)
bob = Student("Bob", 15)
charlie = Student("Charlie", 14)   

#Assign students to teachers
mr_smith.add_student(alice)        
mr_smith.add_student(charlie)
ms_Johnson.add_student(bob)

# Display students of Mr. Smith
for student in mr_smith.Students():
    print(f"{student.name}, who is {student.age} years old is taught by {mr_smith.name}")
    
# Display students of Ms. Johnson
for student in ms_Johnson.Students():
    print(f"{student.name}, who is {student.age} years old is taught by {ms_Johnson.name}")       