import "./App.css";
import { useState, useEffect } from "react";
import CardMovie from "./Components/CardMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Daftar kata kunci untuk pencarian acak
  const randomKeywords = ["marvel", "story", "love", "war", "dream"];

  // Fungsi untuk mengambil data acak
  const fetchRandomMovies = async () => {
    const randomKeyword =
      randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    await fetchDataApi(randomKeyword);
  };

  const fetchDataApi = async (title) => {
    const API_URL = "https://www.omdbapi.com/?apikey=*******";
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    fetchRandomMovies();
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-screen h-full text-white">
      <div className="md:px-8 p-4 max-w-screen-xl mx-auto text-center pt-16 space-y-8 ">
        <h1 className="font-bold text-5xl  bg-gradient-to-r from-blue-200 to-cyan-200 inline-block text-transparent bg-clip-text">
          My Movie
        </h1>
        <div className="flex gap-4 max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Search my movie here..."
            value={search}
            className="p-4 text-sm w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 font-medium"
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-200 to-cyan-200 text-slate-900 font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => fetchDataApi(search)}
          >
            Search
          </button>
        </div>
        <div className="gap-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <CardMovie key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
