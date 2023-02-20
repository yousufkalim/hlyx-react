import { IonApp, IonContent, setupIonicReact } from "@ionic/react";
import { isMobile } from "react-device-detect";

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
import "./global.css";
import Routes from "./routes";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      {isMobile ? (
        <Routes />
      ) : (
        <IonContent>
          <div className="browser-alert-container">
            <h1 className="browser-alert-heading">
              <strong>Note: </strong>
              Only mobile browsers are capable of accessing this application.
            </h1>
          </div>
        </IonContent>
      )}
    </IonApp>
  );
};

export default App;
