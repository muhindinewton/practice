# Aggreagation = represents a relationship where one object(the whole) contains references to one or more independent objects (the parts). they can exists without one another

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
        
    def add_book(self, book):
        self.books.append(book)
        
    def list_books(self):
        return(f"{book.title} by {book.author}" for book in self.books)

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        
library = Library("National Library")

book1 = Book("Kidagaa Kimemwozea", "Ken Walibora")
book2 = Book("Tumbo Lisiloshiba", "Said A. Mohammed")
book3 = Book("Chozi la Heri", "Assumpta K. Matei")

library.add_book(book1)
library.add_book(book2)
library.add_book(book3)

print(library.name)

for book in library.list_books():
    print(book)