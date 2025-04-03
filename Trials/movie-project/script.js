// Wait for the entire DOM to be loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select elements from the DOM
    const filmsList = document.getElementById("films");
    const movieTitle = document.getElementById("movie-title");
    const moviePoster = document.getElementById("movie-poster");
    const movieShowtime = document.getElementById("movie-showtime");
    const movieRuntime = document.getElementById("movie-runtime");
    const movieTickets = document.getElementById("movie-tickets");
    const movieDescription = document.getElementById("movie-description");
    const buyTicketButton = document.getElementById("buy-ticket");

    let currentMovie = null; // Stores the currently selected movie
    let moviesData = []; // Stores all fetched movies

    // Fetch movies from the server
    function fetchMovies() {
        fetch("http://localhost:3000/films")
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                filmsList.innerHTML = ""; // Clear existing movie list
                moviesData = data; // Store fetched movie data

                // Check if data is an array to avoid runtime errors
                if (!Array.isArray(data)) {
                    console.error("Invalid data format");
                    return;
                }

                // Loop through each movie and add it to the list
                data.forEach(movie => {
                    const li = document.createElement("li");
                    li.textContent = movie.title;
                    li.classList.add("film-item");

                    // Add event listener to load movie details when clicked
                    li.addEventListener("click", () => displayMovieDetails(movie));

                    filmsList.appendChild(li);
                });

                // Display the first movie by default
                if (data.length > 0) {
                    displayMovieDetails(data[0]);
                }
            })
            .catch(error => console.error("Error fetching movies:", error));
    }

    // Function to display movie details when a movie is clicked
    function displayMovieDetails(movie) {
        currentMovie = movie; // Update current movie object
        movieTitle.textContent = movie.title;
        moviePoster.src = movie.poster || "placeholder.jpg"; // Use a placeholder if no poster is available
        moviePoster.alt = movie.title + " Poster";
        movieShowtime.textContent = movie.showtime;
        movieRuntime.textContent = `${movie.runtime} minutes`;
        movieDescription.textContent = movie.description || "No description available."; // Display description
        updateAvailableTickets(); // Update ticket availability
    }

    // Function to update the available ticket count and button state
    function updateAvailableTickets() {
        const availableTickets = currentMovie.capacity - currentMovie.tickets_sold;
        movieTickets.textContent = availableTickets;

        // Disable the button if tickets are sold out
        buyTicketButton.disabled = availableTickets <= 0;
        buyTicketButton.textContent = availableTickets <= 0 ? "Sold Out" : "Buy Ticket";
    }

    // Event listener for the "Buy Ticket" button
    buyTicketButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default button behavior (avoids page reload)

        // Ensure there's an available ticket before proceeding
        if (currentMovie && currentMovie.tickets_sold < currentMovie.capacity) {
            currentMovie.tickets_sold++; // Increment sold tickets locally
            updateAvailableTickets(); // Update UI immediately

            // Send PATCH request to update tickets on the server
            fetch(`http://localhost:3000/films/${currentMovie.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tickets_sold: currentMovie.tickets_sold })
            })
            .then(response => response.json()) // Parse updated movie data
            .then(updatedMovie => {
                // Find the movie in the stored movies array and update it
                const movieIndex = moviesData.findIndex(m => m.id === updatedMovie.id);
                if (movieIndex !== -1) {
                    moviesData[movieIndex] = updatedMovie;
                }
                updateAvailableTickets(); // Refresh ticket availability
            })
            .catch(error => console.error("Error updating tickets:", error));
        }
    });

    // Initial fetch to load movies when the page loads
    fetchMovies();
});
