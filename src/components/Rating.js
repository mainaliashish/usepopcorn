import React from "react";

function Rating({ average, icon }) {
  return (
    <p>
      <span>{icon}</span>
      <span>{average}</span>
    </p>
  );
}

export default Rating;
