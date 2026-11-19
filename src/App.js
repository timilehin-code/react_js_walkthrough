import Navbar from "./Navbar";
import HomePage from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./notFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/Create" element={<Create />}></Route>
            <Route exact path="/Blogs/:id" element={<BlogDetails />}></Route>
            <Route  path="*" element={<NotFound/>}> </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
