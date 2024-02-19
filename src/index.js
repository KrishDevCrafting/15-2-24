import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";
// import App from "./ChatGpt";
import Work from "./Dynamic";
import MyComponent from "./fetchData";
import Fetch from "./ArrList";
import FormComponent from "./Object";
import Count from "./Count";
import TakeData from "./Test";
import App from "./Hod";
import Complex from "./KrishHod";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Complex />
    <App />
    <TakeData />
    <Count />
    <Fetch />
    <MyComponent />
    <Work />
    <Form />
    <App />
    <FormComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
