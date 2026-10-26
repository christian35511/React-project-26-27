import React from "react";

import { useParams, Link } from "react-router-dom";

export default function StudentDetail() {
    const { id } = useParams();

    const studentData = {
        1: { name: "chriss manirakiza", grade: "A", subject: "Mobile Application" },
        2: { name: "kevine uwase", grade: "B", subject: "ReactJS" },
        3: { name: "UWAYO Christian", grade: "A+", subject: "Machine Learning" },
        4: { name: "thierry ishimwe", grade: "B+", subject: "Python" },
    };
    const student = studentData[id];
    if (!student) {
        return (
            <div>
                <h2>Student not found</h2>
                <Link to="/students">Back to Students List</Link>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>{student.name}</h1>
            <p><strong>Subject:</strong> {student.subject}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <Link to="/students" className="back-btn">Back to Students List</Link>

        </div>
    );
}