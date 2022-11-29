import React, {useRef, useState} from 'react';
import {Button} from "@material-ui/core";
import fileDownload from 'js-file-download'
import axios from "axios";
import {toast} from "react-toastify";
import {RegisterApi} from "../../api/authur";
import * as htmlToImage from 'html-to-image';
import {toPng, toJpeg, toBlob, toPixelData, toSvg} from 'html-to-image';
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';
//css
import "./register.css"
import "../../pages/questionPage/responsive.css"
import html2canvas from "html2canvas";
import {logout, logoutt, signup, useAuth} from "../../firebase/firebase";


const RegisterUser = () => {
    const inputEl = useRef(null);
    const inputPass = useRef(null);
    // const [loading, setLoading] = useState(false)
    const currentUser = useAuth();
    let doc = new jsPDF();


    async function handleRegister() {

        try {

            await signup(inputEl.current.value, inputPass.current.value)
            if (!inputEl.current.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
                return toast.error("ایمیل شما صحیح نیست !")
            } else {
                {
                    //file that should download

                    htmlToImage.toPng(document.querySelector('.printContainer'), {quality: 0.95})
                        .then(function (dataUrl) {
                            var link = document.createElement('a');
                            link.download = 'my-image-name.jpeg';
                            const pdf = new jsPDF();
                            const imgProps = pdf.getImageProperties(dataUrl);
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(dataUrl, 'PNG', 0, 30, pdfWidth, pdfHeight);
                            pdf.save("download.pdf");
                        });

                }


            }
        } catch {
            if (currentUser.email) {
                htmlToImage.toPng(document.querySelector('.printContainer'), {quality: 0.95})
                    .then(function (dataUrl) {
                        var link = document.createElement('a');
                        link.download = 'my-image-name.jpeg';
                        const pdf = new jsPDF();
                        const imgProps = pdf.getImageProperties(dataUrl);
                        const pdfWidth = pdf.internal.pageSize.getWidth();
                        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                        pdf.addImage(dataUrl, 'PNG', 0, 30, pdfWidth, pdfHeight);
                        pdf.save("download.pdf");
                    });

            }
            else  toast(" رمز عبور یا ایمیل درست نیست!")



        }


        inputEl.current.value = ""
        inputPass.current.value = ""
    }

    // async function logout() {
    //     setLoading(true)
    //     try {
    //       await  logoutt()
    //     }catch{
    //         toast("خطا!")
    //     }
    //     setLoading(false)
    // }

    //end register api
    return (
        <div className={"loginContainer"}>
            {/*<div>gmail:{currentUser?.email}</div>*/}
            <div className={"inputboxes"}>
                <input ref={inputEl} id={"emailinput"} type="email"
                       pattern=".+@globex\.com" required placeholder={"ایمیل"}
                       className={"registerInput"}/>
                <input ref={inputPass} type="password"
                       required placeholder={"پسوورد"}
                       className={"registerInput"}/>
            </div>

            <Button className={"btn"} onClick={handleRegister}>دانلود</Button>
            {/*<Button disabled={loading} className={"btn"} onClick={handleRegister}>ورود</Button>*/}
            {/*<Button disabled={loading} className={"btn"} onClick={logout}>خروج</Button>*/}
        </div>
    );
};

export default RegisterUser;