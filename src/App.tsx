import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import { Spinner, Nav, NavItem, NavLink } from "reactstrap";
import { auth } from "./config/firebase";
import ChangePasswordPage from "./pages/auth/change";
import ForgotPasswordPage from "./pages/auth/forgot";
import LoginPage from "./pages/auth/login";
import LogoutPage from "./pages/auth/logout";
import RegisterPage from "./pages/auth/register";
import ResetPasswordPage from "./pages/auth/reset";
import HomePage from "./pages/home";
import ProfilPage from "./pages/auth/profile";
import PaymentFormPage from "./pages/paiement/payform";

interface IApplicationProps {}

const App: React.FC<IApplicationProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) return <Spinner color="primary" />;
  return (
    <>
      <Nav className="mb-3">
        {user ? (
          <>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/logout">
                Logout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profil">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/payform">
                Payment Form
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/change">
                Change Password
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/forget">
                Forget Password
              </NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register">
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
      {user ? (
        <Routes>
          <Route path="/change" element={<ChangePasswordPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/payform" element={<PaymentFormPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgotPasswordPage />} />
        </Routes>
      )}
    </>
  );
};
export default App;
