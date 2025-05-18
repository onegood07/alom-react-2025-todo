import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MoveToButton } from "../src/styles/styles";
import ToDo from "./assignments/ToDo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route
          path="/"
          element={
            <div>
              <h1>Todo 페이지에 오신 걸 환영합니다!</h1>
              <Link to="/todo">
                <MoveToButton>TodoList로 이동하기</MoveToButton>
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
