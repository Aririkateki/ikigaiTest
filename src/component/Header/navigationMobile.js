import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {FiAlignRight} from "react-icons/fi";
import {motion} from "framer-motion";
// css
import {AiOutlineCloseCircle} from "react-icons/ai";
import "./style.css"
const NavigationMobile = () => {
    const animateFrom={opacity:0,y:-40}
    const animateTo={opacity: 1,y:0}

    const[open,setOpen]=useState(false);
        const hamburgerIconOpen =   <FiAlignRight className={"menu"}
                                               onClick={()=>setOpen(!open)}
        />;
       const humburgereIconClose= <AiOutlineCloseCircle className={"menu"}
                                                onClick={()=>setOpen(!open)}
       />;

       const closeMobileMenu=()=>setOpen(false);
    return (
        <>
            {open ? humburgereIconClose : hamburgerIconOpen}
            {
                open &&
                <ul className={"MobileNavUl"}>



                    <Link to={"/"} className={"headerLink1"}>
                        <li><img src="/img/ikigaiLogo.png" alt="ikigaiLogo" className={"ikigaiLogo"}/></li>
                    </Link>
                    <Link to={"/"} className={"headerLink"}>
                        <motion.li  onClick={()=>closeMobileMenu()} className={"navLi"}
                                    initial={animateFrom}
                                    animate={animateTo}
                                    transition={{delay:0.05}}
                        >توضیحات تست</motion.li>
                    </Link>
                    <Link to={"/AboutIkigai"} className={"headerLink"}>
                        <motion.li onClick={()=>closeMobileMenu()} className={"navLi"}
                                   initial={animateFrom}
                                   animate={animateTo}
                                   transition={{delay:0.10}}
                        >درباره ایکی گای</motion.li>
                    </Link>
                    <Link to={"/quiz"} className={"headerLink"}>
                        <motion.li onClick={()=>closeMobileMenu()} className={"navLi"}
                                   initial={animateFrom}
                                   animate={animateTo}
                                   transition={{delay:0.20}}
                        >تست رایگان</motion.li>
                    </Link>


                </ul>

            }


        </>
    );
};

export default NavigationMobile;