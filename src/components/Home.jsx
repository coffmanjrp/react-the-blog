import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="home">
        {blogs && (
          <>
            <BlogList blogs={blogs} title={'All Blogs!'} />
            <BlogList
              blogs={blogs.filter((blog) => blog.author === 'mario')}
              title={'Mario`s blogs'}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
