import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./assignments/ToDo";
import Example from "./assignments/ToDo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/" element={<div>todo</div>} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
