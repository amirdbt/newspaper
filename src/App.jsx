import React from "react";
import { IonApp, IonContent, IonGrid, IonCol, IonRow, IonHeader } from "@ionic/react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import Navbar from "./components/Navbar"
import {Switch, Route} from "react-router-dom"
import AuthGuard from "./components/AuthGuard"
import Home from "./components/Home"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <Switch >
  <IonApp>
    <IonHeader>
      <Navbar />
    </IonHeader>
    <IonContent className="ion-padding" fullscreen>
      <IonGrid>
       <Route exact path="/" component={SignUp} />
       <Route path="/login" component={SignIn} />
       <AuthGuard path="/home" component={Home} />
      </IonGrid>
    </IonContent>
  </IonApp>
  </Switch>
);

export default App;
