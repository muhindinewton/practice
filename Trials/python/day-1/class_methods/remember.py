# Python allows us to usw class attributes to store new instances as soon as they are created.
# Lists are perfect perfect for storing collections of related data.

class Song:
    
    all = []
    
    def __init__(self, name):
        self.name = name
        Song.add_song_to_all(self)
    
    @classmethod
    def add_song_to_all(cls, song):
        cls.all.append(song)
        
    @classmethod
    def show_song_names(cls):
        print([song.name for song in cls.all])
        
above_all_kings = Song("above all kings")
thriller = Song("Thriller")
Song.show_song_names()
            
        