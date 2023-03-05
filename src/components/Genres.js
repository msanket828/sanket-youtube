import React from "react";

const Genres = (props) => {
  if (props?.title === props?.activeGenres) {
    return (
      <button
        className="px-4 py-2 bg-black transition-all text-white text-sm rounded-lg mr-5 mb-2"
        onClick={() => props.handleGenres(props?.title, props?.id)}
      >
        {props?.title}
      </button>
    );
  }
  return (
    <button
      className="px-4 py-2 bg-gray-200 transition-all text-sm rounded-lg mr-5 mb-2"
      onClick={() => props.handleGenres(props?.title, props?.id)}
    >
      {props?.title}
    </button>
  );
};

export default Genres;
