import "./App.css";

function App() {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = { name: "timi", age: 21 };
  const link = "https://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked by {likes} people</p>
        <p>
          {person.name}, {person.age}
        </p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google</a>
      </div>
    </div>
  );
}

export default App;
