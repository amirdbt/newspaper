import React from "react";
import {
  IonLoading,
  IonCard,
  IonAvatar,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import axios from "axios";
import { getToken } from "../helpers/getJwt";
const Home = () => {
  const [showLoading, setShowLoading] = React.useState(false);
  const [user, setUser] = React.useState({});
  const token = getToken();
  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setShowLoading(true);
    const response = await axios.get(
      "https://agile-headland-74524.herokuapp.com/users/profile",
      { headers: { "auth-token": `${token}` } }
    );
    console.log(response.data);
    setUser(response.data);
    setShowLoading(false);
  };
  return (
    <div>
      <IonLoading
        isOpen={showLoading}
        message={"Please wait..."}
        duration={1000}
      />
      <h1>Welcome</h1>
      <IonCard>
        <img src="https://ca.slack-edge.com/TQHUN32CR-URMJF95Q9-g044a9fdcae7-512" />
        <IonCardHeader>
          <IonCardTitle>{user.username}</IonCardTitle>
          <IonCardSubtitle>{user.email}</IonCardSubtitle>
          <IonCardSubtitle>{user.admin && "Admin"}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Software Devloper</IonCardContent>
      </IonCard>
    </div>
  );
};

export default Home;
