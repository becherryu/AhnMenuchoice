import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import RestPageList from "./RestPageList"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/restpagelist" element={<RestPageList />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
