import React, { useContext } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../config/userContext";

const PrivateRoute: React.FC<{
  component: React.ComponentType<any>;
  path: string;
}> = ({ component: Component, path }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login", { state: { from: location } });
    console.log("SATUTE USER dans IF=" + user);
    return null;
  }
  console.log("SATUTE USER hor IF =" + user);
  return <Route path={path} element={<Component />} />;
};

export default PrivateRoute;
