// import { useParams } from 'react-router-dom';
// import { Academic } from './Awards_Academic';
// import { Republican } from './Awards_Republic';
// import "../style/Awards_Detailed.scss";


// const Awards_Detailed = () => {
//     const { id, category } = useParams();
//     const awardIndex = parseInt(id);
//     const awardsData = category === 'academic' ? Academic : Republican;
//     const award = awardsData[awardIndex];
//     const { image, title, description, descriptionTwo, students } = award;

//     return (
//         <div className="awards_detailed">
//             <div className="awards_detailed_img">
//                 <img src={image} alt={title} />
//             </div>
//             <div className="container">
//                 <div className="awards_detailed_text">
//                     <h2>{title}</h2>
//                     <p>{description}</p>
//                     <div>
//                         {descriptionTwo.map((descriptionTwo, index) => (
//                             <p key={index}>{descriptionTwo}</p>
//                         ))}
//                     </div>
//                 </div>
//                 <h2>Студенты которые учавствовали в этом  <br />проекте</h2>
//                 <div className="awards_students">
//                     {students?.length > 0 &&
//                         students.map((student, idx) => (
//                             <div key={idx} className="awards_student">
//                                 <img src={student.foto} alt={student.name} />
//                                 <div >
//                                     <h3>{student.name}</h3>
//                                     <h5>{student.feedback}</h5>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Awards_Detailed;
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Academic } from './Awards_Academic';
import { Republican } from './Awards_Republic';
import "../style/Awards_Detailed.scss";
import StudentModal from './Awards_Modal';

const Awards_Detailed = () => {
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
            <div className="container">
                <div className="awards_detailed_text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                        {descriptionTwo.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </div>
                <h2>Студенты, которые участвовали в этом проекте</h2>
                <div className="awards_students">
                    {students?.length > 0 &&
                        students.map((student, idx) => (
                            <div
                                key={idx}
                                className="awards_student"
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
            <StudentModal student={selectedStudent} onClose={closeModal} />
        </div>
    );
};

export default Awards_Detailed;
