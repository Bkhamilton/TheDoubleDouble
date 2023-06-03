import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogNode from '../BlogNode/BlogNode';
import './BlogPosts.css';

export default function BlogPosts() {
  const data = useStaticQuery(graphql`
  query RecentPosts {
    allContentfulBlog(sort: {publishedDate: DESC}) {
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

  const posts = data.allContentfulBlog.edges;
  const filteredPosts = posts.filter((obj, index, arr) => {
      return arr.findIndex((o) => o.node.title === obj.node.title) === index;
  });

  return (
    <>
      <div className='main-padding'>
        <h1>Recent Blog Posts</h1>
      </div>
      <div className='blog-list-container'>
        <BlogNode node={filteredPosts[0].node}/>
        {posts[1] && (<BlogNode node={filteredPosts[1].node}/>)}
        {posts[2] && (<BlogNode node={filteredPosts[2].node}/>)}
      </div>
    </>
  );
};
