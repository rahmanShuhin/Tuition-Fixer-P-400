import React, { useEffect, useState } from "react";
import "./Admin.css";
import AdminBlog from "./AdminBlog";
import AdminContact from "./AdminContact";
import AdminDashboard from "./AdminDashboard";
import AdminSideBar from "./AdminSideBar";
import AdminTuition from "./AdminTuition";

const Admin = () => {
  const [step, setStep] = useState(1);
  const [allTuition, setAllTuition] = useState([]);
  const [allContact, setAllContact] = useState([]);
  useEffect(() => {
    fetch("https://calm-shore-19939.herokuapp.com/jobs")
      .then((response) => response.json())
      .then((json) => {
        setAllTuition(json);
      });
  }, []);

  useEffect(() => {
    fetch("https://calm-shore-19939.herokuapp.com/contact")
      .then((response) => response.json())
      .then((json) => {
        setAllContact(json);
      });
  }, []);
  return (
    <div className="admin">
      <AdminSideBar step={step} setStep={setStep}></AdminSideBar>
      {step === 1 && <AdminDashboard></AdminDashboard>}
      {step === 2 && (
        <AdminTuition
          allTuition={allTuition}
          setAllTuition={setAllTuition}
        ></AdminTuition>
      )}
      {step === 3 && <AdminContact allContact={allContact}></AdminContact>}
      {step === 4 && <AdminBlog></AdminBlog>}
    </div>
  );
};

export default Admin;
