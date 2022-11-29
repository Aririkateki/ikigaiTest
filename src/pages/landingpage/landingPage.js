import React from 'react';
//------------------------------ css
import "./style.css";
import DescribeTest from "../describeTestpage/describeTest";
import Header from "../../component/Header/header";
import AboutIkigai from "../aboutIkigai/aboutIkigai";
import QuestionPage from "../questionPage/questionPage";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import "./style.css";
import Register from "../register/register";
import Result from "../questionPage/result";

const LandingPage = () => {
    return (
        <BrowserRouter>
            <>
                <Header/>
                <div className={"pageBox"}>

                    <Routes>
                        <Route path={"/quiz"} element={ <QuestionPage/>}/>
                        <Route path={"/AboutIkigai"} element={<AboutIkigai/>}/>
                        <Route exact path={"/"} element={<DescribeTest/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route path={"/result"} element={<Result/>}/>
                    </Routes>

                </div>
            </>
        </BrowserRouter>
    );
};

export default LandingPage;