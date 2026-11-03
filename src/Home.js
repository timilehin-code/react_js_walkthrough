const HomePage = () => {
  const title = "Welcome to the new Blog";
  const handleClick = (e) => {
    console.log("Hello user", e.target);
  };

  const handleClickAgain = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div className="home">
      <h1>{title}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("timi")}>Click me Again</button>
    </div>
  );
};

export default HomePage;
