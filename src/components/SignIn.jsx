import React, { useState } from "react";
import axios from "axios";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonLoading,
  IonText,
} from "@ionic/react";
import { logInOutline} from "ionicons/icons";
import {Link, useHistory} from "react-router-dom"
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [textColor, setTextColor] = useState("danger");

  let history = useHistory()
  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowLoading(true);
    axios
      .post("https://agile-headland-74524.herokuapp.com/users/login", {
        email,
        password
      })
      .then((res) => {
        setShow(true);
        setShowLoading(false);
        localStorage.setItem("token", res.data)
        console.log(res.data);
        history.push("/home")
      })
      .catch((error) => {
        setShow(true);
        setTextColor("danger");
        setMessage(error.response.data);
        console.log(error.response.data);
      });

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <IonLoading
          isOpen={showLoading}
          message={"Please wait..."}
          duration={2000}
        />
        <IonRow>
          <IonCol>
            <h1 className="ion-text-center">
              <IonIcon slot="start" icon={logInOutline}></IonIcon> Sign In
            </h1>
          </IonCol>
        </IonRow>
        {show && (
          <IonRow>
            <IonCol>
              <IonText color={textColor} className="ion-text-center">
                {message}
              </IonText>
            </IonCol>
          </IonRow>
        )}
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={handleEmail} />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={handlePassword}
              />
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton fill="outline" onClick={handleSubmit}>
              Sign in
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right ion-margin-top">
               <Link to="/">
               <IonText color="primary">Sign up</IonText></Link>
            </IonCol>
        </IonRow>
      </form>
    </>
  );
};

export default SignIn;
