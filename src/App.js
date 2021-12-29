import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from './pages/NoPage'

function App() {
  return (
    // Main router that allows the reoutes to connect ans work
    <BrowserRouter>
      <div className="App">
        {/*  Make sure thate's only ONE route that show up at a time */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Signin />} />     
                                                                  {/* default root page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
