import React, {useState} from 'react';


/**css**/
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/landingpage/landingPage";
import {ToastContainer} from "react-toastify";


const App = () => {

    return (
      <>

          <LandingPage/>
          <ToastContainer/>
      </>

    )

};

export default App;
