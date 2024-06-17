import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Signup from "./screens/signup"
import Login from "./screens/login"
import Home from "./screens/home"
import Live from "./screens/live"
import History from "./screens/history"
import Table from "./screens/table"
import Community from "./screens/community"


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/live" element={<Live />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/table" element={<Table />}/>
          <Route exact path="/community" element={<Community />}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
