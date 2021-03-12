import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="home">
        {error && <h2>{error}</h2>}
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
