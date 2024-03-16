import React from "react";
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//import redux
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./store";

import "./index.scss";

//route component
import App from "./components/App";
import MyRecord from "./components/my-record/MyRecord"
import Recommend from "./components/recommend/Recommend";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App/>}/>
      <Route path="/my-record" element={<MyRecord/>}/>
      <Route path="/recommend" element={<Recommend/>}/>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
