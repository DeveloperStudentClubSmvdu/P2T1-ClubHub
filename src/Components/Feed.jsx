import React from 'react';
import './Feed.css';

const posts = [
  { content: 'Hello, this is my first post!', author: 'John Doe' },
  { content: 'Excited to learn React!', author: 'Jane Smith' }
];

const Feed = () => {
  return (
    <div className="feed-container">
    <div className='data-container'>
      <div className='feed-data'>
      <h2>Feed</h2>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <p className="post-content">{post.content}</p>
          <p className="post-author">Posted by: {post.author}</p>
        </div>
      ))}
          <button>+ Create Feed</button>
    </div>
    </div>
    </div>
  );
};

export default Feed;
