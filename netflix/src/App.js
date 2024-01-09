import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './components/header/header';
import Homepage from './pages/home/homepage';
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile';

function App() {
  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/profile"} element={<Profile />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
