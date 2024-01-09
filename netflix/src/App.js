import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile';
import Homepage from "./pages/home/homepage";
import Header from './components/header/header';
import Login from './pages/login/login';
import ResetPassword from './pages/reset password/resetPassword';
import UserOverview from './pages/user overview/userOverview';

function App() {

  const userData = [
    { id: 1, Email: 'john@email.com', FirstName: 'John', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 3, Status: 'Active' },
    { id: 1, Email: 'jane@example.com', FirstName: 'Jane', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 2, Status: 'Active' },
    { id: 1, Email: 'jess@hootmail.com', FirstName: 'Jess', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 3, Status: 'Disactive' },
  ];

  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/resetPassword"} element={<ResetPassword />} />
                <Route path={"/userOverview"} element={<UserOverview data={userData} profile="senior" />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
