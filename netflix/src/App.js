import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from './components/footer/footer';
import Profile from './pages/profile/profile';
import Homepage from "./pages/home/homepage";
import Header from './components/header/header';
import Login from './pages/login/login';
import ResetPassword from './pages/reset password/resetPassword';
import UserOverview from './pages/user overview/userOverview';
import { useAuthContext } from './components/hooks/useAuthContext';

function App() {

  const userData = [
    { id: 1, Email: 'john@email.com', FirstName: 'John', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 3, Status: 'Active' },
    { id: 1, Email: 'jane@example.com', FirstName: 'Jane', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 2, Status: 'Active' },
    { id: 1, Email: 'jess@hootmail.com', FirstName: 'Jess', LastName: 'Doe', Address: '123 Main St', PaymentMethod: 'Credit Card', Subscription: 'Premium', NumProfiles: 3, Status: 'Disactive' },
  ];

  const { user } = useAuthContext()

  return (
            <Router>
                <div className="main-container">
                        <Header />
                        <Routes>
                            <Route path={"/"} element={user ? <Homepage /> : <Navigate to="/login" />} />
                            <Route path={"/profile"} element={user ? <Profile /> : <Navigate to="/login" />} />
                            <Route path={"/resetPassword"} element={user ? <ResetPassword /> : <Navigate to="/login" />} />
                            <Route path={"/userOverview"} element={user ? <UserOverview data={userData} profile="senior" /> : <Navigate to="/login" />} />
                            <Route path={"/login"} element={!user ? <Login /> : <Navigate to="/" />} />
                        </Routes>
                        <Footer />
                </div>
            </Router>
  );
}

export default App;
