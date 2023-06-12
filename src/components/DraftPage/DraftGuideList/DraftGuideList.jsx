import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DraftGuidePlayer from './DraftGuidePlayer/DraftGuidePlayer';
import './DraftGuideList.css';

export default function DraftGuideList() {

    const data = useStaticQuery(graphql`
    query DraftGuide {
        allContentfulDraftGuide {
          edges {
            node {
              rank
              name
              height
              weight
              position
              team
              description {
                internal {
                  content
                }
              }
              stats {
                internal {
                  content
                }
              }
              percentages {
                internal {
                  content
                }
              }
              advanced {
                internal {
                  content
                }
              }
            }
          }
        }
      }
    `)   

    const players = data.allContentfulDraftGuide.edges.sort((a, b) => a.node.rank - b.node.rank);
    const filteredPlayers = players.filter((obj, index, arr) => {
        return arr.findIndex((o) => o.node.rank === obj.node.rank) === index;
    });

    return (
        <div className='draft-guide-outer-container'>
            {filteredPlayers.map(player => (
                <DraftGuidePlayer player={player.node}/>
            ))}
        </div>
    )    
}