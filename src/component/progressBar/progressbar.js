import shadows from "@material-ui/core/styles/shadows";
import {motion} from "framer-motion";
// css
import "./responsive.css";

const ProgressBar = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 20,
        width: '70%',
        backgroundColor: "#eceeeb",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 50,

    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'left',
        display: "flex",
        justifyContent: "end",
        alignItems: "center"
    }

    const labelStyles = {
        padding: 5,
        color: 'black',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles} className={"progressbar"}>
            <motion.div style={fillerStyles}
                        transition={{duration: 0.5, type: "tween"}}
            >
                <span className={"progressText"} style={labelStyles}>{completed}%</span>
            </motion.div>
        </div>
    );
};

export default ProgressBar;