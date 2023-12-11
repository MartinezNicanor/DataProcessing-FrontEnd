import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/header/Header';
import Homepage from './pages/home/homepage';

function App() {
  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
