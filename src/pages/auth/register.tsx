import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer";
import ErrorText from "../../components/ErrorText";
import { auth, db } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interfaces/page";

const RegisterPage: React.FunctionComponent<IPageProps> = (props) => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    if (error !== "") setError("");

    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        const userData = {
          userId: user?.uid,
          email: email,
          lastname: lastname,
          firstname: firstname,
          mobile: mobile,
          adresse: adresse,
        };
        db.collection("client")
          .doc(user?.uid)
          .set(userData)
          .then(() => {
            logging.info("User data added to Firestore");
            setRegistering(false);
            navigate("/login");
          })
          .catch((error) => {
            logging.error("Error adding user data to Firestore: ", error);
            setRegistering(false);
            setError("Unable to register.  Please try again later.");
          });
      })
      .catch((error) => {
        logging.error(error);
        setRegistering(false);
        setError("Unable to register.  Please try again later.");
      });
  };

  return (
    <AuthContainer header="Register">
      <FormGroup>
        <Input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="mobile"
          onChange={(event) => setMobile(event.target.value)}
          value={mobile}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="adresse"
          id="adresse"
          placeholder="adresse"
          onChange={(event) => setAdresse(event.target.value)}
          value={adresse}
        />
      </FormGroup>
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
      <FormGroup>
        <Input
          autoComplete="new-password"
          type="password"
          name="confirm"
          id="confirm"
          placeholder="Confirm Password"
          onChange={(event) => setConfirm(event.target.value)}
          value={confirm}
        />
      </FormGroup>
      <Button
        disabled={registering}
        color="success"
        block
        onClick={() => signUpWithEmailAndPassword()}
      >
        Sign Up
      </Button>
      <small>
        <p className="m-1 text-center">
          Already have an account? <Link to="/login">Login.</Link>
        </p>
      </small>
      <ErrorText error={error} />
    </AuthContainer>
  );
};
export default RegisterPage;
