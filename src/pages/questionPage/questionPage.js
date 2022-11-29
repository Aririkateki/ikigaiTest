import React, { useEffect, useState } from "react";
import QuestionBox from "../../component/questionBox/QuestionBox";
import AnswerBox from "../../component/answerBox/answerBox";
import { motion } from "framer-motion";
//-----------------css
import "./style.css";
import "./responsive.css";
import ProgressBar from "../../component/progressBar/progressbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-spinner-material";

const QuestionPage = (props) => {
  let navigate = useNavigate();
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);

  const [page, setPage] = useState(0);
  const [contents, setContents] = useState([
    {
      category: "حتی اگر در آن بد بودید ترجیح میدادید کدام را انجام دهید؟",
      questions: [
        "از کمربند ایمنی استفاده کنم",
        "قفل در را نصب کنم",
        "در یک کنسرت محبوب شرکت کنم",
        "به حیوانات غدا بدم",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "حتی اگر در آن بد بودید ترجیح میدادید کدام را انجام دهید؟",
      questions: [
        "از کمک باند استفاده کنم",
        "جعبه گیاهان را در آشپزخانه پرورش بدهم",
        "نوع مناسب چوب را برای افزودن عرشه به خانه انتخاب کنم",
        "از اشکال مختلف برای ساخت وسیله ای جدید استفاده کنم",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "حتی اگر در آن بد بودید ترجیح میدادید کدام را انجام دهید؟",
      questions: [
        "برای دیدن یک ویدئو آموزشی از پروژکتور استفاده کنم",
        "مکاتبات را به ترتیب حروف الفبا انجام بدهم",
      ],
      answers: [0, 0],
    },
    {
      category: "کدام عبارت شما را بهتر نشان میدهد و کدام یک بدتر؟",
      questions: [
        "هنگام بیان عقایدم احساس راحتی دارم",
        "من به سمت موفقیت هدایت میشوم حتی با ریسک کردن",
        "به رک بودن اعتقاد دارم",
        "به جزئیات در کارهایم دقت میکنم",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "کدام عبارت شما را بهتر نشان میدهد و کدام یک بدتر؟",
      questions: [
        "میتوانم خارج از چهارچوب ها فکر کنم",
        "به راحتی استرس نمیگیرم و میتونم در زمان بحران هموار بمانم",
        "میتونم ماه ها و سال ها سخت کار کنم بدون این که رفتار خاصی داشته باشم",
        "ترجیح میدم دروغ سفید بگم تا این که آزار دهنده با کسی صادق باشم",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "کدام عبارت شما را بهتر نشان میدهد و کدام یک بدتر؟",
      questions: [
        "مهارت ارتباطی قوی دارم",
        "در مدیریت زمان عالی هستم و همیشه کارهایم را به موقع انجام میدهم",
      ],
      answers: [0, 0],
    },
    {
      category: "حتی اگر از آن متنفر باشید کدام یک را بهتر انجام میدهید؟",
      questions: [
        "به عنوان پرستار کار کنید",
        "گیربکس اتومبیل را امتحان کنید",
        "برخورد کوتاه با افراد خارج سازمان داسته باشید",
        "تعمیر لولای در را انجام هید",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "حتی اگر از آن متنفر باشید کدام یک را بهتر انجام میدهید؟",
      questions: [
        "فرم ها را برای کامل بودن بررسی کنید",
        "تنظیمات را در دستگاه کپی تغییر دهید",
        "یک برنامه کاری تنظیم کنید",
        "روشنایی محل کار را تنظیم کنید",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "حتی اگر از آن متنفر باشید کدام یک را بهتر انجام میدهید؟",
      questions: [
        "به همکارتاد در کارهایش کمک کنید",
        "اندازه گیری فشار خون را تنظیم کنید",
      ],
      answers: [0, 0],
    },
    {
      category: "آنچه دوست دارم باشم",
      questions: [
        "استفاده از ابزار تخصصی برای برش گوشت",
        "استفاده از کچ و سیمان برای ساخت وسائل ",
        "با اسن که مهارت کمی در کاری دارند کمک میکنند به سقف ساز ها ",
        "ایجاد مواد منفجره برای تخریب سازه ها یا سست کردن",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "آنچه دوست دارم باشم",
      questions: [
        "کنترل مناطق تفریحی",
        "تعمیر ماشین هایی مانند  توربین و موتورها",
        "حمل چمدان مسافر ها",
        "نصب ماشین های نجاری",
      ],
      answers: [0, 0, 0, 0],
    },
    {
      category: "آنچه دوست دارم باشم",
      questions: [
        "کمک به مهندسین الکترونیک در طراحی ابزارها",
        "کاشت و برداشت محصولات کشاورزی",
      ],
      answers: [0, 0],
    },
  ]);
  const [testData, setTestData] = useState({
    bgcolor: "#F6A5C9",
    completed: 0,
  });

  //result of answer
  function createResult(array) {
    console.log(array);
    let part1 = array.splice(0, 5);
    let part2 = array.splice(0, 5);
    return [
      part1.filter((item) => item == 1).length >= 3 ? 1 : 2,
      part2.filter((item) => item == 1).length >= 3 ? 1 : 2,
    ];
  }

  function pageIncrease() {
    if (page < contents.length - 1) {
      if (!contents[page].answers.includes(0)) {
        setTestData((prev) => ({
          bgcolor: prev.bgcolor,
          completed: prev.completed + Math.floor(100 / 11),
        }));
        setPage(page + 1);
      } else {
        toast("   به همه ی سوال ها پاسخ ندادی! ");
      }
    } else {
      //progress bar

      //result page
      let temp = [];
      for (let i = 0; i < contents.length; i++) {
        //put All answer in temp in one array
        temp = temp.concat(contents[i].answers);
      }
      let length = temp.length;
      let pack = length / 10;
      let packs = [];
      for (let i = 1; i <= pack; i++) {
        packs.push(temp.splice(0, 10));
      }
      let result = [];
      for (let i = 0; i < pack; i++) {
        result.push(createResult(packs[i]));
      }

      navigate("/result", {
        replace: true,
        state: {
          result: result,
        },
      });
    }
  }

  function pageDecrease() {
    if (page != 0) {
      setTestData((prev) => ({
        bgcolor: prev.bgcolor,
        completed: prev.completed - Math.floor(100 / 10.9),
      }));
      setPage(page - 1);
    }
  }

  function selectAnswer(index, questionIndex, answer) {
    let temp = [...contents];
    temp[index].answers[questionIndex] = answer;
    setContents(temp);
  }

  return !spinner ? (
    <div className={"questionContainer"}>
      {contents
        .map(function (object, pageIndex) {
          return (
            <div className={"container"} key={pageIndex}>
              <div className={"whiteboxx"}>
                <ProgressBar
                  bgcolor={testData.bgcolor}
                  completed={testData.completed}
                />

                {/* title of question */}
                <QuestionBox>{object.category}</QuestionBox>
                <form className={"AnswerBoxx"}>
                  {object.questions.map(function (string, questionIndex) {
                    return (
                      <AnswerBox
                        status={object.answers[questionIndex]}
                        pageIndex={pageIndex}
                        questionIndex={questionIndex}
                        selectAnswer={selectAnswer}
                        string={string}
                        key={questionIndex}
                      />
                    );
                  })}
                </form>
                <div className={"buttonQBox"}>
                  <motion.button
                    className={"questionButton PreviousBtn"}
                    style={{ opacity: page === 0 ? 0 : 1 }}
                    onClick={() => pageDecrease()}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    سوال قبلی
                  </motion.button>

                  <motion.button
                    className={"questionButton nextBtn"}
                    onClick={() => pageIncrease()}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {page < contents.length - 1 ? "سوال بعدی" : "مشاهده نتیجه"}
                  </motion.button>
                </div>
              </div>
            </div>
          );
        })
        .filter(function (object, pageIndex) {
          return pageIndex == page;
        })}
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner radius={100} color={"#ade0e0"} stroke={6} visible={true} />
    </div>
  );
};

export default QuestionPage;
