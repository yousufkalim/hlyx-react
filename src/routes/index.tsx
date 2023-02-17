import React from "react";
import { IonContent, IonRouterOutlet, IonTabBar, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { isMobile } from "react-device-detect";
import { Route } from "react-router";
import Professional from "../pages/Professional";
import Profile from "../pages/Profile";
import ProfileProvider from "../context/profileContext";
import Error404 from "../components/Error404";

const Routes = () => {
  return (
    <>
      {isMobile ? (
        <>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/">
                  <Professional />
                </Route>
                <Route exact path="/link/:name">
                  <ProfileProvider>
                    <Profile />
                  </ProfileProvider>
                </Route>
                <Route exact path="/page-not-found">
                  <Error404 />
                </Route>
              </IonRouterOutlet>
              <IonTabBar />
            </IonTabs>
          </IonReactRouter>
        </>
      ) : (
        <IonContent>
          <div className="browser-alert-container">
            <h1 className="browser-alert-heading" style={{ padding: 10 }}>
              <strong>Note: </strong>
              Only mobile browsers are capable of accessing this application.
            </h1>
          </div>
        </IonContent>
      )}
    </>
  );
};

export default Routes;
