import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./Home";
function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
