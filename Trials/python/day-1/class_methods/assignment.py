# 🧠 Question: Advanced Use of Class Methods and Inheritance

class Student:
    count = 0
    total_GPA = 0
    
    def __init__(self, name, GPA):
        self.name = name
        self.GPA = GPA
        
    def get_info(self):
        return f"{self.name} {self.GPA}"
      
class Undergraduate(Student):
    def __init__(self, name, GPA):
        super().__init__(name, GPA)
        Undergraduate.count +=1
        Undergraduate.total_GPA += GPA
    
    def get_info(self):
        return super().get_info()
        
    @classmethod
    def get_count(cls):
        return f"Total number of Undegraduate students: {cls.count}" 
    
    @classmethod
    def get_average_gpa(cls):
        if cls.count == 0:
            return 0
        else:
            return f"Average Undergraduate GPA: {cls.total_GPA / cls.count:.2f}"
            
                   
class Graduate(Student):
    def __init__(self, name, GPA):
        super().__init__(name, GPA)
        Graduate.count +=1
        Graduate.total_GPA += GPA
        
    def get_info(self):
        return super().get_info()
        
    @classmethod
    def get_count(cls):
        return f"Total number of Graduate students: {cls.count}" 

    @classmethod
    def get_average_gpa(cls):
        if cls.count == 0:
            return 0
        else:
            return f"Average Graduate GPA: {cls.total_GPA / cls.count:.2f}" 

student1 = Undergraduate("Kamau", 3.6)
student2 = Undergraduate("Muchemi", 4.4)
student3 = Graduate("Mwangi", 3.3)
student4 = Graduate("Kamande", 3.0)

print(Undergraduate.get_count())
print(Undergraduate.get_average_gpa())
print(Graduate.get_count())
print(Graduate.get_average_gpa())