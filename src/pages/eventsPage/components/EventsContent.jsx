import { useState } from "react";
import EventsImg from "../components/EventsImg.png";
import openIcon from "../components/open.svg";
import hideIcon from "../components/hide.svg";
import "../style/EventsContent.scss";

const EventsData = [
    {
        id: 1,
        img: EventsImg,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Встреча с учеными исламского мира",
        location: "Центральный зал, город Ош",
        description: "На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществеламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе",
    },
    {
        id: 2,
        img: EventsImg,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Встреча с учеными исламского мира",
        location: "Центральный зал, город Ош",
        description: "На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществеламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе",
    },
    {
        id: 3,
        img: EventsImg,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Встреча с учеными исламского мира",
        location: "Центральный зал, город Ош",
        description: "На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществеламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе",
    },
    {
        id: 4,
        img: EventsImg,
        date: "Октябрь 17 | 14:00 - 16:00",
        title: "Научная конференция",
        location: "Актовый зал, город Ош",
        description: "На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществеламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе",
    },
];


const EventsContent = () => {
    const [openEventId, setOpenEventId] = useState(null);

    const toggle = (id) => {
        setOpenEventId((prevId) => (prevId === id ? null : id));
    };

    const handleButtonClick = (e, id) => {
        e.stopPropagation(); 
        toggle(id);
    };

    return (
        <div className="events_content_group container">
            {EventsData.map((event) => (
                <div className="events_content_card" key={event.id}>
                    <div onClick={() => toggle(event.id)} className="events_content_head">
                        {openEventId !== event.id && (
                            <>
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="events_img"
                                />
                                <h3>{event.title}</h3>
                            </>
                        )}
                        <button
                            onClick={(e) => handleButtonClick(e, event.id)}
                            className="events_button"
                        >
                            <img
                                src={openEventId === event.id ? hideIcon : openIcon}
                                alt={openEventId === event.id ? "Скрыть" : "Открыть"}
                            />
                        </button>
                    </div>
                    <div onClick={() => toggle(event.id)}
                        className={`events_content_details ${openEventId === event.id ? "active" : ""}`}
                    >
                        <img src={event.img} alt={event.title} />
                        <h5>{event.date}</h5>
                        <h2>{event.title}</h2>
                        <h4>{event.location}</h4>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventsContent;
