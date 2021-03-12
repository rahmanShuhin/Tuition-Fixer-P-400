import React from "react";
import { Link } from "react-router-dom";
import "./AdminSideBar.css";
import WorkIcon from "@material-ui/icons/Work";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import CreateIcon from "@material-ui/icons/Create";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const AdminSideBar = ({ step, setStep }) => {
  return (
    <div className="adminSideBar">
      <div className="adminSideBar__link">
        <Link to="/">
          <h2>
            <i>Tuition</i> <span style={{ color: "#1dbf73" }}>Fixer</span>
          </h2>
        </Link>
      </div>
      <div className="adminSideBar__button">
        <div
          className={step === 1 && "active_admin"}
          onClick={() => setStep(1)}
        >
          <DashboardIcon></DashboardIcon>
          DashBoard
        </div>
        <div
          className={step === 2 && "active_admin"}
          onClick={() => setStep(2)}
        >
          <WorkIcon></WorkIcon>
          Tuition Job Request
        </div>
        <div
          className={step === 3 && "active_admin"}
          onClick={() => setStep(3)}
        >
          <ContactPhoneIcon></ContactPhoneIcon>
          Contact Request
        </div>
        <div
          className={step === 4 && "active_admin"}
          onClick={() => setStep(4)}
        >
          <CreateIcon></CreateIcon>
          Blog Post
        </div>
        <div
          className={step === 5 && "active_admin"}
          onClick={() => setStep(5)}
        >
          <ExitToAppIcon></ExitToAppIcon>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
