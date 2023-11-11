import React from "react";
import "./MovieCard.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function MovieCard({ movie }) {
  const handleReleaseDate = (movie) => {
    var timestamp = movie.releasedDate;
    var milliseconds = timestamp * 1000;
    var date = new Date(milliseconds);
    var options = { day: "numeric", month: "short" };
    var formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="outerContainer">
      <div className="movieCard">
        <div className="upperContainer">
          <div className="votesContainer">
            <div className="votesCount">
              <ArrowDropUpIcon fontSize="large" />
              {movie.voting}
              <ArrowDropDownIcon fontSize="large" />
            </div>
            <div className="votes">Votes</div>
          </div>
          <div className="poster">
            <img src={movie.poster} alt={movie.title} className="image" />
          </div>
          <div className="description">
            <div className="info">
              <span className="title">{movie.title}</span>
              <span>
                <span className="heading">Genre: </span>
                {movie.genre}
              </span>
              <span>
                <span className="heading">Director: </span>
                {movie.director}
              </span>
              <span style={{ lineHeight: "20px" }}>
                <span className="heading">Starring: </span>
                {movie.stars}
              </span>
            </div>

            <div className="bottom">
              <span>
                {movie.runTime} Mins | {movie.language} |{" "}
                {handleReleaseDate(movie)}
              </span>
              <span className="views">
                {movie.pageViews} Views | Voted by {movie.totalVoted} People
              </span>
            </div>
          </div>
        </div>
        <div className="lowerContainer">
          <button className="btn">Watch Trailer </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
