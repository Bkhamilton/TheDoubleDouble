import * as React from 'react';
import showdown from 'showdown';
import './BlogPost.css';

export default function BlogPost( { node } ) {

  const pageText = node.content.internal.content;

  const converter = new showdown.Converter();
  const htmlContent = converter.makeHtml(pageText);

  return (
    <div className='blog-page-container'>
        <div>
          <span className='episode-info-text'>{node.publishedDate}</span>
        </div>
        <div className='blog-title'>
          <span className='shadow-text blog-title-text'>{node.title}</span>
        </div>
        <span className='episode-description'>by {node.author.name}</span>
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};
