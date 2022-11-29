import React from 'react';
import {motion} from "framer-motion";
//---------------css
import "./style.css";
import "./responsive.css";
import {Button} from "@material-ui/core";

const DescribeTest = () => {

    const divMotion = {
        visible: {
            y: 0,
            transition: {
                delay: 0.4,
                duration: 1
            }
        },
        hide: {
            y: "100vh"
        }
    }

    return (
        <motion.div className={"describePage"} animate={{background: "#e8ebf1",}} transition={{duration: 6}}
                    initial={{background: "#ADE0E0"}}>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className="firefly"></div>
            <div className={"aboutikigaiContainer"}>
                <motion.div className={"describeBox"}
                            variants={divMotion}
                            animate="visible"
                            initial="hide"
                >
                    <div>

                    </div>
                    <motion.h1 animate={{color: "black"}} initial={{color: "white"}} transition={{duration: 3}}
                               className={"ikigai"}> ایکیگای روشی برای زندگی شاد تر
                    </motion.h1>
                    <motion.p animate={{color: "black"}} initial={{color: "white"}} transition={{duration: 3}}
                              className={"paraghraphDescribe"}>
                        کشف ایکیگای یکی از مهم‌ترین رسالت‌هایی است که هر انسانی بر عهده دارد. اگر انسان بتواند معنای
                        زندگی
                        خود را درک و در مسیر آن حرکت کند، هم زندگی شادتری دارد و هم می‌تواند به جامعه بشری خدمت کند.
                        اگر می‌خواهید ایکیگای خود را کشف کنید، شروع به حرکت کنید چرا که با نشستن هیچ چیز درست نمی‌شود.
                        باید
                        شروع به حرکت کنید و چیزهای مختلف را امتحان کنید تا ببینید به چه چیزی علاقه دارید و می‌توانید در
                        آن
                        به مهارت و درآمد برسید و به بشریت و جهان خدمت کنید.
                        کشف ایکیگای با ماندن در نقطه امن و راحتی بیگانه است. اگر احساس می‌کنید که ایکیگای خود را پیدا
                        نکرده‌اید، ریسک کنید، مطالعه کنید و یاد بگیرید. مطمئن باشید که وقتی از نقطه امن خود خارج شوید،
                        خیلی
                        زودتر از آنچه فکرش را بکنید به ایکیگای خود می‌رسید.
                    </motion.p>
                    <motion.button
                        onClick={() => window.location.href = "/quiz"}
                        whileHover={{
                            scale: 1.10,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255"
                        }}
                        whileTap={{scale: 0.9}}
                        className={"btnQuiz"}>شروع آزمون

                    </motion.button>
                </motion.div>
                <motion.img src="/img/bloomTree.png" alt="bloomTree" className={"bloomTree"}
                            animate={{x: 0}}
                            initial={{x: "-50vw"}}
                            transition={{type: "tween", duration: 3}}
                />
            </div>
        </motion.div>
    );
};

export default DescribeTest;