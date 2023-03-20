import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

root.render(React.createElement(App));
