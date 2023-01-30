import React from "react";
import "./Students.css";
import students from "../../studentsArray/students";

export default function Students(props) {

    const listStudents = students.map(((student, i) => {
        return <tr key={student.id} className={i % 2 === 0 ? 'par' : 'impar'}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>{student.grade >= 7 ? "A" : "R"}</td>
        </tr>
    })
    )


    return (
        <div className="table">
            <table border={1}>
                <thead className="thead">
                    <tr>
                        <th>ID</th>
                        <th>Aluno</th>
                        <th>Nota</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudents}
                </tbody>
            </table>
        </div>
    )
}