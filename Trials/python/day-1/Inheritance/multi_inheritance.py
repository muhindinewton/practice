#multiple inheritance = inherit from more than one parent class. (C inheriting from classes A and B)
#multilevel inheritance = inherits from a parent which inherits from another parent(C inherits from B which inherits from A)

class Animal: #parent
    def __init__(self, name):
        self.name = name
        
    def eat(self):
        print (f"{self.name} is eating")
        
    def sleep(self):
        print (f"{self.name} is sleeping")
    
class Prey(Animal): #parent
    def flee(self):
        print(f"{self.name} is fleeing")

class Predator(Animal): #parent
    def hunt(self):
        print(f"{self.name} is hunting")

class Rabbit(Prey): #child
    pass

class Hawk(Predator): #child
    pass

class Fish(Prey, Predator): #child
    pass

rabbit = Rabbit("Kamau")
hawk = Hawk("Mwangi")
fish = Fish("Casandra")

hawk.sleep()