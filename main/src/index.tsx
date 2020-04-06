import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";


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
import "theme/variables.css";

import configureStore from "app/store";
import { LoginContainer } from "app/containers/LoginContainer";
import { PrivateRoute } from 'app/containers/PrivateRoute';
import { App } from 'app';

import { usePushNotification } from 'app/utils/usePushNotification';

const AppContainer: React.FC = () => {
  const { addPushListeners } = usePushNotification();
  useEffect(() => {
    addPushListeners();
  })
  const store = configureStore();
  return (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login" component={LoginContainer} />
            <PrivateRoute path="/" component={App} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>
  );
};


ReactDOM.render(<AppContainer />, document.getElementById('root'));
defineCustomElements(window);
