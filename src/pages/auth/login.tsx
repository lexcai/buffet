import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer";
import ErrorText from "../../components/ErrorText";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interfaces/page";

const LoginPage: React.FunctionComponent<IPageProps> = (props) => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError(error.message);
      });
  };

  return (
    <AuthContainer header="Login">
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </FormGroup>
      <Button
        disabled={authenticating}
        color="success"
        block
        onClick={() => signInWithEmailAndPassword()}
      >
        Login
      </Button>
      <small>
        <p className="m-1 text-center">
          Don't have an account? <Link to="/register">Register here.</Link>
        </p>
        <p className="m-1 text-center">
          <Link to="/forget">Forget your password?</Link>
        </p>
      </small>
      <ErrorText error={error} />
      <hr className="bg-info m-3" />
    </AuthContainer>
  );
};

export default LoginPage;
