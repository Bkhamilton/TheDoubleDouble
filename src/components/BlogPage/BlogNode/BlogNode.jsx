import * as React from 'react';
import logo from '../../../images/Double Double Logo.jpg';
import { Link } from 'gatsby';
import './BlogNode.css';

export default function BlogNode({ node }) {

    return (
        <>
            <Link to={`/blog/${node.slug}`} className='blog-node-outer'>
                <div className="blog-node">
                    <div className="blog-node-info">
                        <span className='episode-info-text'>{node.publishedDate} | by {node.author.name}</span>
                        <h1 className='shadow-text'>{node.title}</h1>
                        <span className="episode-description">{node.description.internal.content}</span>
                    </div>
                    <div className="blog-node-image">
                        <img src={logo} alt={node.title} />
                    </div>
                </div>      
            </Link>
        </>

    );
};
