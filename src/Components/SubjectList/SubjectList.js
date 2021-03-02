import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./SubjectList.css";
const SubjectList = () => {
  return (
    <div className="subjectList">
      <div>
        <div>
          <Navigation></Navigation>
          <div>
            <h2>More Subjects For You</h2>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Science Tutors</h3>
          <ul>
            <li>
              <Link>Physics Tutors</Link>
            </li>
            <li>
              <Link>Chemistry Tutors</Link>
            </li>
            <li>
              <Link>Higher Math Tutors</Link>
            </li>
            <li>
              <Link>Biology Tutors</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Humanities Tutors</h3>
          <ul>
            <li>
              <Link>HistoryTutors</Link>
            </li>
            <li>
              <Link>English Tutors</Link>
            </li>
            <li>
              <Link>Geology Tutors</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Business Tutors</h3>
          <ul>
            <li>
              <Link>Economics Tutors</Link>
            </li>
            <li>
              <Link>Accounting Tutors</Link>
            </li>
            <li>
              <Link>Marketing Tutors</Link>
            </li>
            <li>
              <Link>Finance Tutors</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
