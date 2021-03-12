import React, { createContext, useEffect, useState } from "react";
export const BlogContext = createContext();

export const Blogs_Context = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://calm-shore-19939.herokuapp.com/blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      {props.children}
    </BlogContext.Provider>
  );
};
