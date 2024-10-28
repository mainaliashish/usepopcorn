import React from "react";

function NumResults({ movieLength }) {
  return (
    <p className="num-results">
      Found <strong>{movieLength}</strong> results
    </p>
  );
}

export default NumResults;
