class Car:
    def __init__(self, model, year, colour, for_sale): #This is a constructer method to construct objects. it is called a dunder method.
        self.model = model
        self.year=year
        self.colour=colour
        self.for_sale=for_sale

    def drive(self):
        print(f"You drive the {self.colour} {self.model}") #self refers to the object we are working with
    
    def stop(self):
        print(f"You stop the {self.model}")