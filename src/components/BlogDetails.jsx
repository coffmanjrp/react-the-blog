import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`/blogs/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch(`/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

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
            <button className="btn" onClick={handleClick}>
              Delete
            </button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
