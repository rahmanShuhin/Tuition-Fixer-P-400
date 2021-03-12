import React, { createContext, useEffect, useState } from "react";
export const TeacherContext = createContext();

export const TeacherList_Context = (props) => {
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch("https://calm-shore-19939.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        setTeacher(data);
      });
  }, []);
  console.log(teacher);
  return (
    <TeacherContext.Provider value={[teacher, setTeacher]}>
      {props.children}
    </TeacherContext.Provider>
  );
};
