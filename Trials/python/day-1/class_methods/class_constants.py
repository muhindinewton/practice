#Class constants are used to store data that doesnt change(is constant), while class attributes are used to store data that changes.
# class constants can also be accessed from outside of the class using this syntax:
class Album:
    
    GENRES = ["Gospel", "Jazz", "Mugithi"]
    album_count = 0
    
    def __init__(self, genre, name, date):
        if self.check_genre(genre):
            self.increase_album_count()
            self.genre = genre
            self.release_date = date
            self.name = name
        if not self.check_genre(genre):
            raise ValueError(f"Invalid genre:{genre}")
        
    @classmethod
    def check_genre(cls, genre):
        return genre in cls.GENRES
    
    @classmethod
    def increase_album_count(cls, increment=1):
        cls.album_count += increment
        
a1 = Album("Mugithi", "I love you Lord", "2022-01-01")


print(Album.album_count)