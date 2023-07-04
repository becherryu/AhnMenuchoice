import "./App.css";
//import noonsong from "./img/noonsong.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
