import React from 'react';
import {motion} from "framer-motion";
/*************css************/
import "./answerBox.css";

const AnswerBox = (props) => {
    return (
        <motion.div className={"mainAnswerBox"}
                   
                    whileHover={{scale: 1.1, background: "#ffff"}}
        >

            <p className={"answertitle"}>{props.string} {props.selected} </p>
            <div className={"likebox"}>
                <motion.img src="/img/dislike.svg" alt="dislike"
                            className={"like mobilelike"+ props.status === 0 ? "aaa" : props.status === 1 ? "b" : "aaa" }
                            whileTap={{scale: 0.8}}
                            whileHover={{scale: 0.9}}
                            onClick={() => props.selectAnswer(props.pageIndex, props.questionIndex, 1)}

                />
                <motion.img src="/img/like.svg" alt="like" className={"like mobillelike" + props.status === 0 ? "aaa" : props.status === 2 ? "b" : "aaa"}
                            whileTap={{scale: 0.8}}
                            whileHover={{scale: 0.9}}

                            onClick={() => props.selectAnswer(props.pageIndex, props.questionIndex, 2)}
                />
            </div>


        </motion.div>
    );
};

export default AnswerBox;