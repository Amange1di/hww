
import { Link } from 'react-router-dom';
import "../style/Awards_Academic.scss";
import certificate from "../img/Academic_cer.png";
import certificatee from "../img/certificatee.png";
import Meri from "../img/Meri.png";
import Meri_men from "../img/Meri_men.png";
export const Academic = [
    {
        id: 1,
        image: certificatee,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Лучшее образовательное учреждение в области исламских наук",
        description: "Награда, присуждаемая за высокое качество образовательных программ, успехи в преподавании и развитии исламских дисциплин.",
        location: "Центральный зал, город Ош.",
        students: [
            {
                foto: Meri,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri_men,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri_men,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            }
        ]
    },
    {
        id: 2,
        image: certificate,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Лучшее образовательное учреждение в области исламских наук",
        description: "Награда, присуждаемая за высокое качество образовательных программ, успехи в преподавании и развитии исламских дисциплин.",
        location: "Центральный зал, город Ош.",
        students: [
            {
                foto: Meri,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri_men,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            },
            {
                foto: Meri_men,
                name: "Мери Джейн",
                feedback: "Сделала всё, что могла и не могла, за что мы очень благодарны. Спасибо большое, будьте счастливы."
            }
        ]
    },


];

const Awards_Academic = () => {
    return (
        <div className="awards_academic container">
            <h1>Академические награды</h1>
            <div className="academic_group">
                {Academic.map((item, index) => (
                    <div className="academic" key={index}>
                        <div className="img">

                            <Link to={`/detailed_awards/academic/${index}`}>
                                <img src={item.image} alt={`Сертификат для ${item.title}`} />
                            </Link>

                        </div>
                        <div className="text">
                            <h5>{item.date}</h5>
                            <h2>{item.title}</h2>
                            <h4>{item.location}</h4>
                            <p>{item.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards_Academic;
