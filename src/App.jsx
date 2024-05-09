import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import SingleAll from "./Pages/SingleAll";
import HomePage from "./Pages/HomePage";
import DataFile from "./Pages/DataFile";
import DataSigleFile from "./Pages/DataSigleFile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<Home />} />
        <Route path="/single-all" element={<SingleAll />} />
        <Route path="/files" element={<DataFile />} />
        <Route path="/single-file" element={<DataSigleFile />} />
      </Routes>
    </Router>
  );
};

export default App;
