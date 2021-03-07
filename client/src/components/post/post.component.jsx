import React from 'react';

import useFetch from '../../effects/use-fetch.effect';

const Post = ({ postId }) => {
  const post = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );

  return (
    <div>
    {post ? (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ) : (
      <p>No post found</p>
    )}
    </div>
  );
};

export default Post;

