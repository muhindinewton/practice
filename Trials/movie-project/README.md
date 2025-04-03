# Movie Ticket Booking App

## Description
This is a simple web-based movie ticket booking application that allows users to browse a list of movies, view their details, and purchase tickets. The application fetches movie data from a local JSON server and dynamically updates the UI.

## Features
- Fetches movie details from a JSON server
- Displays a list of available movies
- Shows movie details including title, poster, runtime, and available tickets
- Allows users to purchase tickets and updates the available ticket count
- Disables the "Buy Ticket" button when tickets are sold out

## Technologies Used
- HTML
- CSS
- JavaScript (DOM Manipulation & Fetch API)
- JSON Server (for local database simulation)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-ticket-booking.git
   ```
2. Navigate into the project directory:
   ```sh
   cd movie-ticket-booking
   ```
3. Install JSON Server globally (if not installed):
   ```sh
   npm install -g json-server
   ```
4. Start the JSON Server:
   ```sh
   json-server --watch db.json --port 3000
   ```
5. Open `index.html` in your browser or use Live Server in VS Code.

## JSON Server Data Structure (db.json)
```json
{
  "films": [
    {
      "id": 1,
      "title": "The Giant Gila Monster",
      "poster": "image-url.jpg",
      "runtime": 96,
      "capacity": 50,
      "tickets_sold": 5,
      "showtime": "03:30PM"
    }
  ]
}
```

## How to Use
1. Click on a movie from the "Now Showing" list to view its details.
2. Check the available tickets and runtime.
3. Click "Buy Ticket" to purchase a ticket.
4. The available ticket count updates dynamically.
5. If tickets are sold out, the button gets disabled.

## Author
- **Newton** - Web Developer

## License
This project is licensed under the MIT License.

