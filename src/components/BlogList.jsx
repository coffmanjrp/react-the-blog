import React from 'react';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div key={blog.id} className="blog-preview">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default BlogList;
