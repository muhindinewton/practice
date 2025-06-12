#Class methods = Allow operations related to the class itself
#              = It takes (cls) as the first parameter, which represents the  
#                class itself
# Instance methods = best for operations on instances of the class(objects)
# Static methods = Best for utility functions that do not need access to class data
# Class methods = Best for class-level data or require access to the class itself
# A class attribute must be declared outside of any methods in the class.

class Student:
    
    count = 0
    total_gpa = 0
    
    def __init__(self, name, gpa):
        self.name = name
        self.gpa = gpa
        Student.count +=1
        Student.total_gpa += gpa
     
     #Instance method   
    def get_info(self):
        return f"{self.name} {self.gpa}"
    
    @classmethod
    def get_count(cls):
        return f"Total number of students: {cls.count}"
    
    @classmethod
    def get_average_gpa(cls):
        if cls.count == 0:
            return 0
        else:
            return f"Average gpa is: {cls.total_gpa / cls.count:.2f}"
    
student1 = Student("kamau", 2.8)
student2 = Student("Mwaniki", 3.8)
student3 = Student("Ndirangu", 3.3)
    
print(Student.get_count())
print(Student.get_average_gpa())
        
        