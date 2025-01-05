
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Academic } from '../awardsPage/components/AwardsAcademic';
import { Republican } from '../awardsPage/components/AwardsRepublic';
import "./AwardsDetailed.scss";
import AwardsModal from '../awardsPage/components/AwardsModal';

const AwardsDetailed = () => {
    const { id, category } = useParams();
    const [selectedStudent, setSelectedStudent] = useState(null);
    const awardsData = category === 'academic' ? Academic : Republican;
    const award = awardsData[parseInt(id)];
    const { image, title, description, descriptionTwo, students } = award;

    const openModal = (student) => setSelectedStudent(student);
    const closeModal = () => setSelectedStudent(null);

    return (
        <div className="awards_detailed">
            <div className="awards_detailed_img">
                <img src={image} alt={title} />
            </div>
            <div className="container ">
                <div className="awards_detailed_text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                        {descriptionTwo.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                <h2  >Студенты, которые участвовали в этом проекте</h2>
                </div>
                <div className="awards_students">
                    {students?.length > 0 &&
                        students.map((student, idx) => (
                            <div
                                key={idx}
                                className="awards_student "
                                onClick={() => openModal(student)}
                            >
                                <img src={student.foto} alt={student.name} />
                                <div>
                                    <h3>{student.name}</h3>
                                    <h5>{student.feedback}</h5>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <AwardsModal student={selectedStudent} onClose={closeModal} />
        </div>
    );
};

export default AwardsDetailed;
