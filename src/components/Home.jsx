import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('/blogs');

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
