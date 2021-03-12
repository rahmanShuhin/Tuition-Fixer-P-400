import React, { useContext } from "react";
import { BlogContext } from "../Context/Blogs_Context";
import "./AdminBlog.css";
import BlogTable from "./BlogTable";
const AdminBlog = () => {
  const [blogs, setBlogs] = useContext(BlogContext);
  const handleApproved = (id) => {
    const newArr = blogs.map((x) => {
      if (x._id == id) {
        x.approved = true;
        return x;
      } else {
        return x;
      }
    });
    setBlogs(newArr);
    fetch(`https://calm-shore-19939.herokuapp.com/blog/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        approved: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((json) => {
        console.log(json);
      });
  };
  return (
    <div className="adminBlog">
      <h3>Blog</h3>
      <div>
        <h4>Pending Blog Post</h4>
        <div class="tbl-header" style={{ overflowX: "auto" }}>
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Author</th>
                <th>Author Profile</th>
                <th>Date</th>
                <th>View</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {blogs.length !== 0 &&
                blogs.map(
                  (x) =>
                    !x.approved && (
                      <BlogTable
                        x={x}
                        msg="Approved"
                        handleApproved={handleApproved}
                      ></BlogTable>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h4>Approved Blog Post</h4>
        <div class="tbl-header" style={{ overflowX: "auto" }}>
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Author</th>
                <th>Author Profile</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {blogs.length !== 0 &&
                blogs.map((x) => x.approved && <BlogTable x={x}></BlogTable>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
