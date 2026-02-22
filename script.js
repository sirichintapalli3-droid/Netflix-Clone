// Preload 20 movies if not already in LocalStorage
if (!localStorage.getItem("movies")) {
  const starterMovies = [
    { title: "Inception", poster: "https://image.tmdb.org/t/p/w300/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", link: "https://www.imdb.com/title/tt1375666/" },
    { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", link: "https://www.imdb.com/title/tt0816692/" },
    { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg", link: "https://www.imdb.com/title/tt0468569/" },
    { title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w300/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", link: "https://www.imdb.com/title/tt4154796/" },
    { title: "Iron Man", poster: "https://image.tmdb.org/t/p/w300/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", link: "https://www.imdb.com/title/tt0371746/" },
    { title: "Spider-Man: No Way Home", poster: "https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", link: "https://www.imdb.com/title/tt10872600/" },
    { title: "Doctor Strange", poster: "https://image.tmdb.org/t/p/w300/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg", link: "https://www.imdb.com/title/tt1211837/" },
    { title: "Black Panther", poster: "https://image.tmdb.org/t/p/w300/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", link: "https://www.imdb.com/title/tt1825683/" },
    { title: "Guardians of the Galaxy", poster: "https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", link: "https://www.imdb.com/title/tt2015381/" },
    { title: "Captain America: Civil War", poster: "https://image.tmdb.org/t/p/w300/kSBXou5Ac7vEqKd97wotJumyJvU.jpg", link: "https://www.imdb.com/title/tt3498820/" },
    { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w300/f89U3D3dx5n5E7W7p3DyUqZQ5nO.jpg", link: "https://www.imdb.com/title/tt0133093/" },
    { title: "The Matrix Reloaded", poster: "https://image.tmdb.org/t/p/w300/9tg3f2XwzVJp2k6yL9bK5Qj3p2M.jpg", link: "https://www.imdb.com/title/tt0234215/" },
    { title: "The Matrix Revolutions", poster: "https://image.tmdb.org/t/p/w300/fgm8OZ7o4G1G1I9EeGcb85p9pC.jpg", link: "https://www.imdb.com/title/tt0242653/" },
    { title: "Avatar", poster: "https://image.tmdb.org/t/p/w300/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", link: "https://www.imdb.com/title/tt0499549/" },
    { title: "Titanic", poster: "https://image.tmdb.org/t/p/w300/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", link: "https://www.imdb.com/title/tt0120338/" },
    { title: "Jurassic Park", poster: "https://image.tmdb.org/t/p/w300/c414cDeQ9b6qLPLeKmiJu5kRr3O.jpg", link: "https://www.imdb.com/title/tt0107290/" },
    { title: "The Lion King", poster: "https://image.tmdb.org/t/p/w300/2l05cFWJacyIsTpsqSgH0wQXe4V.jpg", link: "https://www.imdb.com/title/tt0110357/" },
    { title: "Frozen", poster: "https://image.tmdb.org/t/p/w300/mbP8fW0XG2gZzZQzQpimeISFRCW.jpg", link: "https://www.imdb.com/title/tt2294629/" },
    { title: "Toy Story", poster: "https://image.tmdb.org/t/p/w300/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", link: "https://www.imdb.com/title/tt0114709/" },
    { title: "Finding Nemo", poster: "https://image.tmdb.org/t/p/w300/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", link: "https://www.imdb.com/title/tt0266543/" }
  ];
  localStorage.setItem("movies", JSON.stringify(starterMovies));
}



// Initialize users
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

// LOGIN PAGE
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Save user (any name/pass)
    const users = JSON.parse(localStorage.getItem("users"));
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to movies page
    window.location.href = "movies.html";
  });
}

// MOVIES PAGE
const movieList = document.getElementById("movieList");
if (movieList) {
  const movies = JSON.parse(localStorage.getItem("movies"));
  movieList.innerHTML = movies.map(m =>
    `<div class="movie-card">
       <img src="${m.poster}" alt="${m.title}" title="${m.title}">
       <h4>${m.title}</h4>
       <a href="${m.link}" target="_blank" class="btn">More Info</a>
     </div>`
  ).join("");
}




// ADMIN PAGE
const addMovieForm = document.getElementById("addMovieForm");
if (addMovieForm) {
  addMovieForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("movieTitle").value;
    const poster = document.getElementById("moviePoster").value;

    const movies = JSON.parse(localStorage.getItem("movies"));
    movies.push({ title, poster });
    localStorage.setItem("movies", JSON.stringify(movies));

    // Redirect back to admin page to refresh list
    window.location.href = "admin.html";
  });

  const adminMovieList = document.getElementById("adminMovieList");
  const movies = JSON.parse(localStorage.getItem("movies"));
  adminMovieList.innerHTML = movies.map((m, i) =>
    `<div>
      <img src="${m.poster}" width="100">
      <span>${m.title}</span>
      <button onclick="deleteMovie(${i})">Delete</button>
    </div>`
  ).join("");

  const userList = document.getElementById("userList");
  const users = JSON.parse(localStorage.getItem("users"));
  userList.innerHTML = users.map(u => `<p>${u.username}</p>`).join("");
}

function deleteMovie(index) {
  const movies = JSON.parse(localStorage.getItem("movies"));
  movies.splice(index, 1);
  localStorage.setItem("movies", JSON.stringify(movies));
  window.location.href = "admin.html"; // redirect after delete
}