// CSS
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/kara_arquitetura">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
