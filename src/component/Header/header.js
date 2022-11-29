import React, {useState} from 'react';
import {Link} from "react-router-dom";
//---------------css
import "./style.css";
import "./responsive.css";
import {Button} from "@material-ui/core";
import Navigation from "./Navigation";
import NavigationMobile from "./navigationMobile";


const Header = () => {
      return (
        <>
            <nav className={"navbar"}>

                <Navigation/>
                <NavigationMobile/>
                <ul className={"registerBox"}>
                    <Link to={"/register"} ><Button className={"resisterButton"}>ورود/ثبت نام</Button></Link>
                </ul>
            </nav>
        </>
    );
};

export default Header;


