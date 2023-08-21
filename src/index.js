import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinah and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header /> {/*Calling Header component*/}
      <Menu /> {/*Calling Menu component*/}
      <Footer /> {/*Calling Footer component*/}
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="header">
      <h1
        //style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
        className="header"
      >
        Alejandro's Pizza
      </h1>
    </div>
  );
}

// Menu Component
function Menu() {
  //const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Check out the Menu</h2>

      {/*Rendering list*/}
      {numPizzas > 0 ? (
        <>
          {/*React fragment. It will aloow us to have more than one element in a piece of JSX code!*/}
          <p>
            New flavor ideas for everyone to enjoy. Great and friendly
            atmosphere. In name of our staff we thank you for your
            support.{" "}
          </p>

          <ul className="pizzas">
            {/* pizzaObject is our array of data. with map() we create a new array where each object is a pizza,
          and now we want to every pizza object a component, and then we just pass the properties to be rendered*/}
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
          </>
      ) : ( 
        <p>Our menu is being updated, please come back later ☺️</p>
      )}
       
    </main>
  );
}


// Pizza component
function Pizza({ pizzaObject }) {
  //if (pizzaObject.soldOut === true) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold Out" : "€"+pizzaObject.price}</span>
      </div>
    </li>
  );
}

// Footer Component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const onService = hour >= openHour && hour <= closeHour;
  console.log(onService);
  return (
    <div>
      {/*Conditional Rendering*/}
      <footer className="footer">
        <div>
          {/*here as we saw before, if the first operation is true, it will return the second argument automatically*/}
          {onService ? (
            <Order closeHour={closeHour} openHour={openHour} />
          ) : (
            <p>
              We're happy to serve you between {openHour}:00 and {closeHour}:00.
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="oreder">
      <p>
        We are at your service from {openHour}:00 until {closeHour}:00 pm
      </p>
      <center>
        <button className="btn">Order Now!</button>
      </center>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
