import React, { useState } from "react";
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { getToken } from "../helpers/getJwt";

const Navbar = () => {
  const token = getToken();
  const delToken = () => {
    return localStorage.removeItem("token");
  };
  return (
    <>
      <IonToolbar>
        <IonButtons slot="primary">
          <IonButton onClick={() => {}}>
            <IonIcon slot="icon-only" name="star" />
          </IonButton>
        </IonButtons>
        <IonTitle>Newspaper</IonTitle>

        {token && (
          <IonButton slot="end" fill="outline" onClick={delToken}>
            <IonIcon slot="start" icon={logOutOutline} />
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log out
            </Link>
          </IonButton>
        )}
      </IonToolbar>
    </>
  );
};

export default Navbar;
