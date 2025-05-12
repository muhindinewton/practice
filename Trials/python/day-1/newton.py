class Human:
    species = "Homo sapiens"
    def __init__(self, name):
        self.name = name
        
guido = Human("Guido")
print (guido.species)
# => Homo sapiens
Human.species
# => Homo sapiens