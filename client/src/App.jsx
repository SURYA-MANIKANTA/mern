import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
