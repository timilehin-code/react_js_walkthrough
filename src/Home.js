import { useState } from "react";
const HomePage = () => {
  const [name, setName] = useState("Timi");
  const [age, setAge] = useState(21);
  const title = "Welcome to the new Blog";

  const handleClick = () => {
    setName("Silver");
    setAge("20")
  };

  return (
    <div className="home">
      <h1>{title}</h1>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default HomePage;
