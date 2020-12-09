import React, { useState } from "react";
import "./styles.css";

var foodDictonary = {
  breakfast: [
    { name: "Upma" },
    { name: "Aloo Paratha" },
    { name: "Thepla" },
    { name: "Sprouted Salad" },
    { name: "Poha" },
    { name: "Paneer Bhurji" }
  ],
  lunch: [
    { name: "Rice and Dal" },
    { name: "Masala Bhindi" },
    { name: "Chana Kulcha" },
    { name: "Curry Rice" },
    { name: "Gujarati Kadhi" },
    { name: "Moong Dal Khichadi" }
  ],
  deserts: [
    { name: "GulabJamun" },
    { name: "Rasmalai" },
    { name: "Sandesh" },
    { name: "Kaju Katli" },
    { name: "Barfi" },
    { name: "Mysore Pak" }
  ],
  snacks: [
    { name: "Samosa" },
    { name: "Panipuri" },
    { name: "Sandwitch" },
    { name: "Vada Pav" },
    { name: "Cold Coffee" },
    { name: "Kachori" }
  ],
  fruits: [
    { name: "Strawberry" },
    { name: "Apple" },
    { name: "Mango" },
    { name: "Banana" },
    { name: "Pinapple" },
    { name: "Grapes" }
  ]
};

export default function App() {
  var [foodType, setFoodType] = useState("breakfast");

  function typeClickHandler(type) {
    setFoodType(type);
  }

  return (
    <div className="App">
      <div className="intro">
        <h1>Foood Plazzza</h1>
        <p>Welcome to our Food Plaza..!!</p>
        <p>Hungry??</p>
        <p>Take a look on today's MENU</p>
      </div>
      <div>
        {Object.keys(foodDictonary).map((type) => (
          <button
            onClick={() => {
              typeClickHandler(type);
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div className="list">
        <ul>
          {foodDictonary[foodType].map((food) => (
            <li key={food.name}>{food.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
