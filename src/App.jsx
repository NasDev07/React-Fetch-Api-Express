import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import SingleAll from "./Pages/SingleAll";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-all" element={<SingleAll />} />
      </Routes>
    </Router>
  );
};

export default App;
