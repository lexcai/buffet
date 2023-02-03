import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input } from "reactstrap";
import AuthContainer from "../../components/AuthContainer";
import ErrorText from "../../components/ErrorText";
import { auth, db, clientRef } from "../../config/firebase";
import logging from "../../config/logging";
import IPageProps from "../../interfaces/page";

const ProfilPage: React.FunctionComponent<IPageProps> = (props) => {
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<Record<string, any>>({});

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstname(event.target.value);
  };

  const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };

  const handleAdresseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdresse(event.target.value);
  };

  const navigate = useNavigate();

  const updateData = () => {
    const userRef = clientRef.doc(auth.currentUser?.uid);
    const userData = {
      lastname,
      firstname,
      mobile,
      adresse,
    };
    userRef
      .update(userData)
      .then(() => {
        logging.info("User data updated in Firestore");
        navigate("/");
      })
      .catch((error) => {
        logging.error("Error updating user data in Firestore: ", error);
        setError("Unable to update. Please try again later.");
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = clientRef.doc(user.uid);

        const snapshot = await userRef.get();
        const data = snapshot.data();

        setUserData({
          lastname: data?.lastname || "",
          firstname: data?.firstname || "",
          mobile: data?.mobile || "",
          adresse: data?.adresse || "",
        });
      } else {
        setError("User not found. Please login and try again.");
      }
    });
  }, []);

  const handleDeleteProfile = async () => {
    const userId = auth.currentUser?.uid;
    await db.collection("client").doc(userId).delete();
    await auth.currentUser?.delete();
  };
  return (
    <AuthContainer header="Profile">
      <FormGroup>
        <Input
          type="text"
          name="lastname"
          id="lastname"
          placeholder={userData?.lastname}
          onChange={handleLastnameChange}
          value={lastname}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder={userData?.firstname}
          onChange={handleFirstnameChange}
          value={firstname}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder={userData?.mobile}
          onChange={handleMobileChange}
          value={mobile}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="adresse"
          id="adresse"
          placeholder={userData?.adresse}
          onChange={handleAdresseChange}
          value={adresse}
        />
      </FormGroup>

      <Button onClick={updateData}>Update my profil</Button>
      <Button onClick={handleDeleteProfile}>Delete my profil</Button>
      <ErrorText error={error} />
    </AuthContainer>
  );
};
export default ProfilPage;
