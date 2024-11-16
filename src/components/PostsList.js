import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();

  // Select data from the store
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} -> {post.name}
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
