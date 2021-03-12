import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('/blogs')
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="home">
        {isPending && <h2>Loading...</h2>}
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
