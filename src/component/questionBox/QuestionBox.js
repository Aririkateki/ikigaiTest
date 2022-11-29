import React from 'react';
import {motion} from "framer-motion";

/*************css************/
import "./QuestionBox.css";

const QuestionBox = (props) => {
    return (
        <>

            <motion.h1 className={"titleQuetion"}
                       initial={{opacity:0,y:-60}}
                       animate={{opacity:1,y:0}}
                       transition={{ delay: 0.1 }}

            >{props.children}</motion.h1>
        </>
    );
};

export default QuestionBox;