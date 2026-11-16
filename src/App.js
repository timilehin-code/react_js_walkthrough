import Navbar from "./Navbar";
import HomePage from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/Create" element={<Create />}></Route>
          </Routes>
           <Routes>
            <Route exact path="/Blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
