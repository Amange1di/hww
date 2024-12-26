import { useParams } from 'react-router-dom';
import { Academic } from '../ui/Awards_Academic';
import { Republican } from '../ui/Awards_Republic';
import "../style/Detailed_Awards.scss";


const DetailedAwards = () => {
    const { id, category } = useParams(); 
    const awardIndex = parseInt(id);  
    const awardsData = category === 'academic' ? Academic : Republican;
    const award = awardsData[awardIndex];
    const { image, title, description, students } = award;

    return (
        <div className="detailed_awards">
            <div className="detailed_awards_img">
                <img src={image} alt={`Сертификат для ${title}`} />
            </div>
            <div className="container">
                <div className="detailed_awards_text">
                    <h2>{title}</h2>
                    <p>{description }</p>
                </div>
                <h2>Студенты которые учавствовали в этом  <br />проекте</h2>
                <div className="students">
                    {students?.length > 0 &&
                        students.map((student, idx) => (
                            <div key={idx} className="student col-3">
                                <img src={student.foto} alt={student.name} />
                                <div className="student-info">
                                    <h3>{student.name}</h3>
                                    <h5>{student.feedback}</h5>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default DetailedAwards;
