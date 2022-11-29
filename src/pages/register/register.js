// import React, {useEffect, useRef, useState} from 'react';
//
// import "./register.css"
// import "./responsive.css";
// import {Button} from "@material-ui/core";
// import {toast} from "react-toastify";
// import RegisterUser from "../RegisterUser/registerUser";
// import {RegisterApi} from "../../api/authur";
// import axios from "axios";
// import fileDownload from "js-file-download";
//
// const Register = () => {
//     const handleClick = (url, filename) => {
//         axios.get(url, {
//             responseType: 'blob',
//         })
//             .then((res) => {
//                 fileDownload(res.data, filename)
//             })
//     }
//     //register api
//
//     const [usernameRgister, SetUserNameRgister] = useState();
//
//
//     //register validate
//     const validateRegister = (user) => {
//         if (!user.username)
//             return "ایمیل را وارد نکردید"
//
//     }
//     const handleRegister = () => {
//
//         const user = {
//             username: usernameRgister,
//
//         };
//         const error = validateRegister(user)
//         if (error)
//             return toast.warn(error)
//         RegisterApi(user, (isok, data) => {
//             if (!isok) {
//                 return toast.error(error)
//
//             } else {
//
//                 return (handleClick('https://avatars.githubusercontent.com/u/9919?s=280&v=4', 'sample'),
//                         toast.success("لینک با موفقیت ارسال شد :)")
//                 )
//                 localStorage.setItem("username", data.username);
//                 localStorage.setItem("x-auth-token", data["x-auth-token"]);
//             }
//         })
//     }
//
//     //end register api
//     return (
//         <div className={"containerRegister"}>
//
//             <div className={"regis"}>
//
//                 <form className={"formRegister"}>
//
//
//                     <RegisterUser setUsername={SetUserNameRgister}
//                                   username={usernameRgister}
//                                   handleRegister={handleRegister}/>
//
//                     <img className={"imgregister"} src="/img/backgroundRegister.png" alt=""/>
//
//                     {/*<span className={"span"}*/}
//                     {/*      onClick={() => ChangeOpenRegister(!openRegister)}>{openRegister ? "آیا قبلا ثبت نام کرده اید؟" : "آیا قبلا ثبت نام نکرده اید؟"}</span>*/}
//                 </form>
//
//
//             </div>
//
//         </div>
//     );
// };
//
// export default Register;