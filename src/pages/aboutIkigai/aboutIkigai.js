import React from 'react';
import {Button} from "@material-ui/core";
import {motion} from "framer-motion";
//CSS
import "./STYLE.css";
import "./responsive.css";

const AboutIkigai = () => {

    const beforeMotion = {opacity: 0, y: -100, scale: 1.1}
    const afterMotion = {opacity: 1, y: 0, scale: 1}
    return (
        <div className={"aboutIkigaiCountainer"}>
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
            <div className={"aboutBox"}>
                <div className={"contentAbout"}>
                    <motion.h1 className={"titleIkigaiAbout"}
                               initial={beforeMotion}
                               animate={afterMotion}
                               transition={{delay: 0.25, type: "spring", stiffness: 300}}
                    > درباره ایکیگای
                    </motion.h1>
                    <motion.p className={"paraghraphAboutBox"}
                              initial={beforeMotion}
                              animate={afterMotion}
                              transition={{delay: 0.5, type: "spring", stiffness: 100}}
                    >


                        در دنیای امروز سردرگمی، عدم قطعیت و بی‌هدف بودن، سه موضوعی است که بیشتر از هر زمان دیگری به چشم
                        می‌خورد. بسیاری از نوجوانان، جوانان و حتی بزرگسالان نمی‌دانند که واقعاً چه هدفی در زندگی دارند و
                        به کدام سمت و سو حرکت می‌کنند. فرهنگ غنی کشور ژاپن در همین دوران عدم قطعیت و عدم اطمینان
                        می‌تواند امیدبخش و نجات‌دهنده باشد. کافی است به آن دل بسپارید و تعالیم آن را به بهترین شکل ممکن
                        در زندگی خود پیاده کنید. یکی از تعالیم الهام‌بخشی که در فرهنگ کشور ژاپن وجود دارد، ایکیگای
                        (Ikigai) است. این مفهوم به معنا و هدف زندگی ما مربوط می‌شود و می‌تواند دید ما را به زندگی دگرگون
                        کند. در این مقاله تصمیم داریم به موضوع ایکیگای بپردازیم. می‌خواهیم بدانیم که اصلاً ایکیگای چیست،
                        چگونه می‌توانیم آن را در زندگی خود کشف کنیم و به آرامش، ثروت، دلخوشی و زندگی مفید برسیم. این
                        مفهوم به قدری اهمیت دارد که اگر آن را کشف و دنبال کنیم، در پایان عمر به خودمان خواهیم گفت که از
                        زندگی خود راضی هستم و توانستم از این دنیا نهایت لذت را ببرم.
                        <br/><br/>
                        در دنیای امروز انسان‌های بسیاری دنبال معنای زندگی هستند. آن‌ها تمایل دارند که بدانند برای چه در
                        این دنیا هستند و می‌خواهند به کجا برسند. برخی انسان‌ها هیچ دلیلی برای بیدار شدن در هنگام صبح
                        ندارند و همیشه در زندگی احساس بی‌مصرف و تهی بودن می‌کنند. این مقاله برای تمام انسان‌ها مفید است
                        و می‌تواند به تمام بشریت خدمت کند چراکه به صورت کاملاً عملی به شما کمک می‌کند که معنی زندگی خود
                        را پیدا کنید و در مسیر این معنا، کار و تلاش کنید و به اهدافی که در زندگی دارید دست پیدا کنید. در
                        صورتی که شما هم دوست دارید یک زندگی هدفمند و بی‌نظیر را تجربه کنید، تا پایان این مقاله با ما
                        همراه شوید.


                    </motion.p>
                </div>
                <img src="/img/aboutimg.png" alt="aboutikigai" className={"aboutIkigaiImg"}/>
            </div>


            <div className={"describebookBox"}>
                <img src="/img/ikigaiBook.jpg" alt="" className={"book"}/>
                <div className={"textBookBox"}>


                    <h1 className={"titleIkigaiAbout"}> معرفی کتاب ایکیگای</h1>
                    <p className={""}>

                        برای برخوردار شدن از عمر طولانی و زندگی سالم باید چه کارهایی انجام دهیم؟ آیا واقعاً عمر کردن بیش
                        از
                        100 سال در دنیای امروز ممکن است؟ کتاب ایکیگای یکی از بهترین کتاب‌های رشد فردی است که به شما کمک
                        می‌کند طعم خوشبختی واقعی را بچشید و یک زندگی سراسر شادی و ارامش را تجربه کنید. در صورتی که تمایل
                        دارید به راز عمر طولانی پی ببرید
                        برای برخوردار شدن از عمر طولانی و زندگی سالم باید چه کارهایی انجام دهیم؟ آیا واقعاً عمر کردن بیش
                        از
                        100 سال در دنیای امروز ممکن است؟ کتاب ایکیگای یکی از بهترین کتاب‌های رشد فردی است که به شما کمک
                        می‌کند طعم خوشبختی واقعی را بچشید و یک زندگی سراسر شادی و ارامش را تجربه کنید. در صورتی که تمایل
                        دارید به راز عمر طولانی پی ببرید
                        برای برخوردار شدن از عمر طولانی و زندگی سالم باید چه کارهایی انجام دهیم؟ آیا واقعاً عمر کردن بیش
                        از
                        100 سال در دنیای امروز ممکن است؟ کتاب ایکیگای یکی از بهترین کتاب‌های رشد فردی است که به شما کمک
                        می‌کند طعم خوشبختی واقعی را بچشید و یک زندگی سراسر شادی و ارامش را تجربه کنید. در صورتی که تمایل
                        دارید به راز عمر طولانی پی ببرید
                    </p>
                </div>


            </div>


        </div>
    );
};

export default AboutIkigai;