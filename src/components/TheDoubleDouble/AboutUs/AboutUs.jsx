import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './AboutUs.css';

export default function AboutUs() {

  const data = useStaticQuery(graphql`
  query AboutUs {
      allContentfulCard(filter: {title: {eq: "About Us"}}) {
        edges {
          node {
            title
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

  const aboutUsCard = data.allContentfulCard.edges[0].node;
  
  return (
        <div className='main-padding'>
            <h1>About Us</h1>
            <div className=''>
                <p className='episode-description'>{aboutUsCard.description.internal.content}</p>
            </div>
        </div>
    )
}