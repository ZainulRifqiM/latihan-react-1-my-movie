import React from "react";

const CardMovie = ({ movie }) => {
  return (
    <div className="group relative bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-cyan-200 hover:to-blue-200">
      <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded z-10">
        {movie.Year}
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={
            movie.Poster === "N/A"
              ? "https://via.placeholder.com/300"
              : movie.Poster
          }
          alt={movie.Title}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="font-bold text-lg text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
          {movie.Title}
        </h2>
        <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {movie.Type}
        </p>
      </div>
    </div>
  );
};

export default CardMovie;
