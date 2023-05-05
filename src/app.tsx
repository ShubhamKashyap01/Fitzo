import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Activity from "./pages/Activity/Activity";

export function App() {
  return (
    <>
      <Router basename="webapp">
        <Routes>
          <Route path="/" element={<Navigate to={"hyderabad"} />} />
          <Route path=":location">
            <Route path="" element={<Home />} />
            <Route path=":activity" element={<Activity />} />
          </Route>
          <Route path="membership" element={<h1>Membership</h1>} ></Route>
        </Routes>
      </Router>
    </>
  );
}
