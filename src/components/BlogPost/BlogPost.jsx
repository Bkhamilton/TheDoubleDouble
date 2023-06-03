import * as React from 'react';
import './BlogPost.css';

export default function BlogPost( { node } ) {
  return (
    <div className='blog-page-content'>
        <div>
          <span className='episode-info-text'>{node.publishedDate}</span>
        </div>
        <div className='blog-title'>
          <span className='shadow-text blog-title-text'>{node.title}</span>
        </div>
        <span className='episode-description'>by {node.author.name}</span>
        <div>
          <h3>{node.content.internal.content}</h3>
        </div>
    </div>
  );
};
