/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import img1 from "./assests/image/img1.jpeg";
import img2 from "./assests/image/img2.jpeg";
import img3 from "./assests/image/img3.jpeg";
import img4 from "./assests/image/img4.jpeg";
import img5 from "./assests/image/img5.jpeg";
import img6 from "./assests/image/img6.jpeg";
import img7 from "./assests/image/img7.jpeg";
import img8 from "./assests/image/img8.jpeg";
import img9 from "./assests/image/img9.jpeg";
import img10 from "./assests/image/img10.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));
var image = [
  {
    pic: img1,
    name: "River Kingfishers",
  },
  {
    pic: img2,
    name: "Resplendent Quetzal",
  },
  {
    pic: img3,
    name: "Regent Bowerbird",
  },
  {
    pic: img4,
    name: "Bee Hummingbird",
  },
  {
    pic: img5,
    name: "Birds-of-Paradise",
  },
  {
    pic: img6,
    name: "Fantails",
  },
  {
    pic: img7,
    name: "Garden Sunbird",
  },
  {
    pic: img8,
    name: "Turquoise Cotinga",
  },
  {
    pic: img9,
    name: "Grey-Breasted Sabrewing",
  },
  {
    pic: img10,
    name: "Painted-Snipe",
  },
];
function Gallery(props) {
  return (
    <div className="cards">
      <img src={props.pic}></img>
      <p>{props.name}</p>
    </div>
  );
}
root.render(
  <div className="Container">
    {image.map(function (item) {
      return <Gallery pic={item.pic} name={item.name}></Gallery>;
    })}
  </div>
);
