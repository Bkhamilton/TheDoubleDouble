import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './DraftGuideTitle.css';

export default function DraftGuideTitle() {

  const data = useStaticQuery(graphql`
  query DraftGuideTitle {
      allContentfulCard(filter: {title: {eq: "Draft Guide"}}) {
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
  
  const draftGuideCard = data.allContentfulCard.edges[0].node;

  return (
    <div className='main-padding'>
      <h1>{draftGuideCard.title}</h1>
      <div>
        <span className='episode-description'>{draftGuideCard.description.internal.content}</span>
      </div>
    </div>
  );
};
