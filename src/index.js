import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './components/StarRating'
import reportWebVitals from './reportWebVitals';

function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color='blue' defaultRating={3} maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} defaultRating={3}/>
    <StarRating size={25} color="red" defaultRating={4}/>
    <StarRating size={32} color="green" defaultRating={2}/>
    <Test/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
