import {
  IonRouterOutlet,
  IonTabBar,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Error404 from "../components/Error404";
import ProfileProvider from "../context/profileContext";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Auth/Login";
import Professional from "../pages/Professional";
import Profile from "../pages/Profile";

const ProtectRoute = ({ children }: any) => {
  const { token } = useAuth();
  return <>{!token ? <Login /> : children}</>;
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
          <Route exact path="/link/:id">
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
