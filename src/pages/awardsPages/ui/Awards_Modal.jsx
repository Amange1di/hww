import React from 'react';
import "../style/Awards_Modal.scss"; 

const StudentModal = ({ student, onClose }) => {
    return (
        <>
            {student && (
                <div className="awards_modal">
                    <div className="awards_modal_content">
                        <span className="awards_modal_close" onClick={onClose}>
                          x
                        </span>
                        <div className="awards_modal_info">
                            <img src={student.foto} alt={student.name} />
                            <h2>{student.name}</h2>
                            <h2>{student.gr}</h2>
                            <p>{student.feedback}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentModal;
