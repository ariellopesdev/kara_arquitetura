//CSS
import "./App.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos/:slug" element={<ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
