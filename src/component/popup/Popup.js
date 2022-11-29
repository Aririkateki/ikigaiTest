import React from "react";
import {motion} from "framer-motion";
import "./popup.css"
const Popup = props => {
    return (
        <div className="popup-box">
            <motion.div className="box"

                        initial={{ scale: 0,y:-250 }}
                        animate={{  scale: 1 ,y:-20}}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
            >

                <motion.img src={"/img/close1.png"} className="close-icon" onClick={props.handleClose}

                            whileTap={{scale: 0.9}}
                            whileHover={{scale: 1.1}}
                />
                {props.content}
            </motion.div>
        </div>
    );
};

export default Popup;