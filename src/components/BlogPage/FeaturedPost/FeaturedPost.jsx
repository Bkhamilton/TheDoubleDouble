import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogNode from '../BlogNode/BlogNode';
import './FeaturedPost.css';

export default function FeaturedPost() {
    const data = useStaticQuery(graphql`
    query FeaturedPost {
      allContentfulBlog(filter: {title: {eq: "The Player All GMs Want"}}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY")
            content {
              internal {
                content
              }
            }
            author {
              name
            }
            description {
              internal {
                content
              }
            }
          }
        }
      }
    }
    `)
    
    const featuredPost = data.allContentfulBlog.edges[0].node;

    return (
      <div>
        <div className='main-padding'>
          <h1>Featured Post</h1>
        </div>
        <div className='blog-list-container'>
          <BlogNode node={featuredPost}/>
        </div>
      </div>
    );
};
