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

    const firstRoundPlayers = filteredPlayers.filter(player => player.node.rank >= 1 && player.node.rank <= 30);
    const notableSecondRounders = filteredPlayers.filter(player => player.node.rank > 30);
  
    return (
      <div className='draft-guide-outer-container'>
        <div className='first-round-players'>
          <div className='main-padding'>
            <h3>First Round</h3>
          </div> 
          {firstRoundPlayers.map(player => (
            <DraftGuidePlayer key={player.node.rank} player={player.node} />
          ))}
        </div>
        <div className='notable-second-rounders'>
          <div className='main-padding'>
            <h3>Notable Second Rounders</h3>
          </div>
          {notableSecondRounders.map(player => (
            <DraftGuidePlayer key={player.node.rank} player={player.node} />
          ))}
        </div>
      </div>
    );
}