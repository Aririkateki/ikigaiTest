import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import "./responsive.css";
const Navigation = () => {
    return (
        <>
            <ul className={"navUl" } >



                <Link to={"/"} className={"headerLink1"}>
                    <li><img src="/img/logo.png" alt="ikigaiLogo" className={"ikigaiLogo"}/></li>
                </Link>
                <Link to={"/"} className={"headerLink"}>
                    <li className={"navLi"}>ایکیگای</li>
                </Link>
                <Link to={"/AboutIkigai"} className={"headerLink"}>
                    <li className={"navLi"}>درباره ایکیگای</li>
                </Link>
                <Link to={"/quiz"} className={"headerLink"}>
                    <li className={"navLi"}>تست رایگان</li>
                </Link>


            </ul>

        </>
    );
};

export default Navigation;