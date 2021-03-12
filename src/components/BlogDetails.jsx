import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`/blogs/${id}`);

  return (
    <>
      <div className="blog-details">
        {isPending && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
