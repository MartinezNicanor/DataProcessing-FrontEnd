import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Header from './components/header/header';
import Login from './pages/login/login';

function App() {
  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
