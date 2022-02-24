import "./App.css";
import React, { useEffect } from "react";
import AppRoute from "./utils/AppRoute";
// import ReactGA from "react-ga";

// layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import { useLocation } from "react-router-dom";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = (page) => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  // const location = useLocation()

  // useEffect(()=>{
  //   const page = location.pathname
  //   trackPage(page);

  // },[location])

  return <AppRoute layout={LayoutDefault} component={Home} exact path="/" />;
}

export default App;
