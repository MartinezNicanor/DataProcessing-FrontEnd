import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Header from './components/header/header';
import Login from './pages/login/login';
import ResetPassword from './pages/reset password/resetPassword';
import UserOverview from './pages/user overview/userOverview';

function App() {

  const userData = [
    { id: 1, email: 'john@example.com', firstname: 'John', lastname: 'Doe', address: '123 Main St', paymentmethod: 'Credit Card', subscription: 'Premium', numprofiles: 3, status: 'Active' },
  ];

  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/resetPassword"} element={<ResetPassword />} />
                <Route path={"/userOverview"} element={<UserOverview data={userData} profile="senior" />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
