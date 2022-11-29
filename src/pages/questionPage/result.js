import React, {useEffect, useState} from "react";
import * as d3 from "d3";
import * as venn from "venn.js";
import {useLocation} from "react-router-dom";
import {Button, Grid} from "@material-ui/core";
//css
import "./result.css"
import "./responsive.css"
import Popup from "../../component/popup/Popup";
import Register from "../register/register";
import RegisterUser from "../../component/RegisterUser/registerUser";

const senteses = [

    ["d1- تست", "d1- تست", "d1- تست", "d1- تست"],
    ["d-2  تست", "d-2  تست", "d-2  تست", "d-2  تست"],
    ["d-3  تست", "d-3 تحتوای تست", "d-3  تست", "d-3  تست"],
    ["d-4  تست", "d-4  تست", "d-4  تست", "d-4  تست"],

];

const contentResult = [

    ["خونه صورتی-برنامه نویسی", "خونه صورتی-آرایشگری", "خونه صورتی-نقاشی", "خونه صورتی-مهندسی"],
    ["نارنجی-محتوای تست", "محتوای تست-q", "نارنجی-محتوای تست", "نارنجی-محتوای تست"],
    ["سبز-محتوای تست", "سبز-محتوای تست", "سبز-محتوای تست", "سبز-محتوای تست"],
    ["آبی-کمک کردن", "آبی-حل معادلات", "آبی-ارائه ایده های جدید", "آبی-ساخت وسایل خلاقانه"],

];
const Result = (props) => {

    //MODAL
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const location = useLocation();
    //4 array contain to items
    const result = location.state.result
    console.log(result)

    function contentPass(index) {
        let a = result[index][0];
        let b = result[index][1];
        //بررسی حالت های زوج و فرد که به سوالات پاسخ داده
        if (a === 1 && b === 1) {
            return senteses[index][0];
        } else if (a === 1 && b === 2) {
            return senteses[index][1];
        } else if (a === 2 && b === 1) {
            return senteses[index][2];
        } else if (a === 2 && b === 2) {
            return senteses[index][3];
        }

    }

    function resultPass(index) {
        let a = result[index][0];
        let b = result[index][1];
        if (a === 1 && b === 1) {
            return contentResult[index][0];
        } else if (a === 1 && b === 2) {
            return contentResult[index][1];
        } else if (a === 2 && b === 1) {
            return contentResult[index][2];
        } else if (a === 2 && b === 2) {
            return contentResult[index][3];
        }
    }

    console.log(location.state.contents)
    const [sets, setSets] = useState([
        {sets: ["I"], size: 1000, label: contentPass(0)},
        {sets: ["U"], size: 1000, label: contentPass(1)},
        {sets: ["S"], size: 1000, label: contentPass(2)},
        {sets: ["D"], size: 1000, label: contentPass(3)},
        {sets: ["I", "U"], size: 100},
        {sets: ["S", "U"], size: 300},
        {sets: ["S", "I"], size: 300},
        {sets: ["D", "U"], size: 300},
        {sets: ["D", "I"], size: 300},
        {sets: ["D", "S"], size: 100},
        {sets: ["S", "I", "U", "D"], size: 100}
    ]);
    useEffect(() => {

        let chart = venn.VennDiagram();
        d3.select("#venn").datum(sets).call(chart);

    }, [sets]);

    return (
        <>
            <div className={"resultContainer"}>

                <div className={"printContainer"}>
                    <h2 className={"resultTitle"}> نتیجه تست ایکیگای شما</h2>
                    محتوای این بخش کامل نیست 
                    <div id="venn" style={{textAlign: "center", marginTop: "4px", padding: "40px 0px"}}>


                    </div>


                    <Grid container direction={"column"} spacing={4} className={"resultDiv"} style={{
                        backgroundColor: "#e8fae8",
                    }}>
                        <Grid item>
                            <Grid container direction={"row"} alignItems={"center"} className={"titleBox"}>
                                <img src={"/img/loveit.png"} className={"imageResultIcon"}/>
                                <h2 className={"Title"}> آنچه شما دوست دارید !</h2>

                            </Grid>
                        </Grid>
                        <Grid item>
                            <p className={"paragraphResult"}>
                                {resultPass(2)}

                            </p>
                        </Grid>
                    </Grid>
                    <Grid container direction={"column"} spacing={4} className={"resultDiv"} style={{
                        backgroundColor: "#ffe4d1",
                    }}>
                        <Grid item>
                            <Grid container direction={"row"} alignItems={"center"} className={"titleBox"}>
                                <img src={"/img/need.png"} className={"imageResultIcon"}/>
                                <h2 className={"Title"}> آنچه جهان به آن نیاز دارد!</h2>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <p className={"paragraphResult"}>
                                {resultPass(1)}

                            </p>
                        </Grid>
                    </Grid>
                    <Grid container direction={"column"} spacing={4} className={"resultDiv"} style={{
                        backgroundColor: "#f1dddd",
                    }}>
                        <Grid item>
                            <Grid container direction={"row"} alignItems={"center"} className={"titleBox"}>
                                <img src={"/img/money.png"} className={"imageResultIcon"}/>
                                <h2 className={"Title"}>آنچه در ازای آن پول دریافت می کنید!</h2>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <p className={"paragraphResult"}>
                                {resultPass(0)}

                            </p>
                        </Grid>
                    </Grid>
                    <Grid container direction={"column"} spacing={4} className={"resultDiv"} style={{
                        backgroundColor: "#dde7f1",
                    }}>

                        <Grid item>
                            <Grid container direction={"row"} alignItems={"center"} className={"titleBox"}>
                                <img src={"/img/succesful.png"} className={"imageResultIcon"}/>
                                <h2 className={"Title"}>آنچه شما در آن خوب هستید!</h2>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <p className={"paragraphResult"}>
                                {resultPass(3)}

                            </p>
                        </Grid>
                    </Grid>
                </div>
                <Button className={"downloadButton"} onClick={togglePopup}> دانلود نتایج </Button>
                {isOpen && <Popup
                    content={<>
                        <RegisterUser/>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
};

export default Result;