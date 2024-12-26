


import { Link } from "react-router-dom";
import "../style/Awards_Republic.scss";
import certificate from "../img/certificate.png";
import certificatee from "../img/certificatee.png";
import Meri from "../img/Meri.png";
import Meri_men from "../img/Meri_men.png";

export const Republican = [
    {
        id: 11,
        image: certificatee,
        date: "Дата: Учреждена в 2021 году.",
        title: "Премия короля Абдаллы II за исламские исследования",
        description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество."
        , location: "Место: город  Амман, Иордания.",
        students: [
            {
                foto: Meri,
                name: "Иван Иванов",
                feedback: "Спасибо за возможность участвовать в этом проекте."
            },
            {
                foto: Meri_men,
                name: "Анна Смирнова",
                feedback: "Очень горжусь нашей командой и результатами."
            }
        ]
    },
    {
        id: 22,
        image: certificate,
        date: "Дата: Учреждена в 2021 году.",
        title: "Премия короля Абдаллы II за исламские исследования",
        description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество."
        , location: "Место: город  Амман, Иордания.",
        students: [
            {
                foto: Meri,
                name: "Иван Иванов",
                feedback: "Спасибо за возможность участвовать в этом проекте."
            },
            {
                foto: Meri_men,
                name: "Анна Смирнова",
                feedback: "Очень горжусь нашей командой и результатами."
            }
        ]
    },
    {
        id: 33,
        image: certificatee,
        date: "Дата: Учреждена в 2021 году.",
        title: "Премия короля Абдаллы II за исламские исследования",
        description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество."
        , location: "Место: город  Амман, Иордания.",
        students: [
            {
                foto: Meri,
                name: "Иван Иванов",
                feedback: "Спасибо за возможность участвовать в этом проекте."
            },
            {
                foto: Meri_men,
                name: "Анна Смирнова",
                feedback: "Очень горжусь нашей командой и результатами."
            }
        ]
    },
    {
        id: 44,
        image: certificate,
        date: "Дата: Учреждена в 2021 году.",
        title: "Премия короля Абдаллы II за исламские исследования",
        description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество."
        , location: "Место: город  Амман, Иордания.",
        students: [
            {
                foto: Meri,
                name: "Иван Иванов",
                feedback: "Спасибо за возможность участвовать в этом проекте."
            },
            {
                foto: Meri_men,
                name: "Анна Смирнова",
                feedback: "Очень горжусь нашей командой и результатами."
            }
        ]
    },
    {
        id: 55,
        image: certificatee,
        date: "Дата: Учреждена в 2021 году.",
        title: "Премия короля Абдаллы II за исламские исследования",
        description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество."
        , location: "Место: город  Амман, Иордания.",
        students: [
            {
                foto: Meri,
                name: "Иван Иванов",
                feedback: "Спасибо за возможность участвовать в этом проекте."
            },
            {
                foto: Meri_men,
                name: "Анна Смирнова",
                feedback: "Очень горжусь нашей командой и результатами."
            }
        ]
    },

];

const Awards_Republic = () => {
    return (
        <div className=' awards_Republic container '>
            <h1>Республиканские награды</h1>
            {Republican.map((item, index) => (
                <div className="republican "
                    key={index}>
                    <div className="img">
                        <Link to={`/detailed_awards/republic/${index}`}>
                            <img src={item.image} alt={`Сертификат для ${item.title}`} />
                        </Link>

                    </div>
                    <div className="text">
                        <h5>{item.date}</h5>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h4>{item.location}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Awards_Republic;
