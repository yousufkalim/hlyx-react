import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Professional from "../pages/Professional";
import Profile from "../pages/Profile";
import ProfileProvider from "../context/profileContext";
import Error404 from "../components/Error404";
import useAuth from "../hooks/useAuth";
import { LOGIN_SECRET } from "../constants";
import Login from "../pages/Auth/Login";

/**
 * @description This component for is a placholder of login flow
 * @returns JSX.Element
 */
const LoginPage = (): JSX.Element => {
  const { setToken } = useAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [presentAlert] = useIonAlert();

  return (
    <IonPage>
      <IonContent class="overflow-hidden">
        <form
          onSubmit={(event) => {
            event?.preventDefault();
            if (LOGIN_SECRET === password) {
              window.localStorage?.setItem("token", password);
              setToken(password);
            } else {
              setError("Invalid Password");
              presentAlert({
                message: "Invalid Password",
                header: "Oops!",
                buttons: [
                  {
                    text: "Cancel",
                    role: "cancel",
                  },
                  {
                    text: "OK",
                    role: "confirm",
                  },
                ],
                // onDidDismiss: (e: CustomEvent) =>
                //   setRoleMessage(`Dismissed with role: ${e.detail.role}`),
              });
            }
          }}
        >
          <IonInput
            placeholder="********"
            value={password}
            onIonInput={(event: Event) => {
              const value = (event.target as HTMLIonInputElement)
                .value as string;

              setPassword(value);
            }}
          ></IonInput>

          <IonButton type="submit" expand="block">
            Continue
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

const ProtectRoute = ({ children }: any) => {
  const { token } = useAuth();
  return <>{token ? children : <Login />}</>;
};

const Routes = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <ProtectRoute>
              <Professional />
            </ProtectRoute>
          </Route>
          <Route exact path="/link/:name">
            <ProtectRoute>
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
            </ProtectRoute>
          </Route>
          <Route exact path="/page-not-found">
            <Error404 />
          </Route>
        </IonRouterOutlet>
        <IonTabBar />
      </IonTabs>
    </IonReactRouter>
  );
};

export default Routes;
