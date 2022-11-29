import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
