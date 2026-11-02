const HomePage = () => {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = { name: "timi", age: 21 };
  const link = "https://google.com";
  return (
    <div className="home">
      <h1>{title}</h1>
      <p>Liked by {likes} people</p>
      <p>
        {person.name}, {person.age}
      </p>
      <p>{Math.random() * 10}</p>
      <a href={link}>google</a>
    </div>
  );
};

export default HomePage;
