import React, { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs)
  useEffect(() => {
    fetch('http://localhost:400/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  // console.log(blogs)
  return (
    <>
      <h3 className="text-center">Blogs</h3>
      <div className="row m-2">

        {
          blogs.map(blog =>
            <div className="col-md-3 my-2">
              <Blog key={blog._id} blog={blog}></Blog>
            </div>)
        }

      </div>
    </>
  );
};

export default Blogs;
