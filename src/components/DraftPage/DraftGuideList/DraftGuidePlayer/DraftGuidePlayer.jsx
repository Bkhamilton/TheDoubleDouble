import * as React from 'react';
import { useState } from 'react';
import './DraftGuidePlayer.css';

export default function DraftGuidePlayer({ player }) {

  function getGamesPlayed(stats){
    const statArr = stats.split(' ');
    return parseInt(statArr[0]);
  }

  const gamesPlayed = getGamesPlayed(player.node.stats.internal.content);

  const [isOpen, setIsOpen] = useState(false);
  const [bottomDisplay, setBottomDisplay] = useState(false);

  const fontSize = player.node.name.length < 18 ? "20px" : "18px";

  function parseStats(stats) {
    const statArr = stats.split(' ');
    const perGameStats = [[<span className='general-stat-text'>{gamesPlayed}</span>, <span className='stat-label'>G</span>]];
    for (let i = 1; i < statArr.length; i++) {
      const totalStat = parseFloat(statArr[i]);
      const digits = totalStat.toString().length;
      const label = statArr[i].substring(digits);
      const perGameStat = (totalStat / gamesPlayed).toFixed(1);
      const statValue = <span className='general-stat-text'>{perGameStat}</span>;
      const statLabel = <span className='stat-label'>{label.toUpperCase()}</span>
      perGameStats.push([statValue, statLabel]);
    }

    return perGameStats;
  }

  function parsePercentages(percentages) {
    const percentagesArray = percentages.split(" ");

    const fieldGoalsMade = percentagesArray[0].substring(0, percentagesArray[0].length - 2).split("-").map(Number);
    const threesMade = percentagesArray[1].substring(0, percentagesArray[1].length - 3).split("-").map(Number);
    const freeThrowsMade = percentagesArray[2].substring(0, percentagesArray[2].length - 2).split("-").map(Number);
    const fgPct = (fieldGoalsMade[0]/fieldGoalsMade[1]).toFixed(3);
    const fg3Pct = (threesMade[0]/threesMade[1]).toFixed(3);
    const ftPct = (freeThrowsMade[0]/freeThrowsMade[1]).toFixed(3);

    const fieldGoalEntry = [<span className='stat-label-large'>FG: </span>,<span className='general-stat-text'>{(fieldGoalsMade[0]/gamesPlayed).toFixed(1)}-{(fieldGoalsMade[1]/gamesPlayed).toFixed(1)} ({fgPct.toString().slice(1)}) </span>]
    const threePtEntry = [<span className='stat-label-large'>3PT: </span>,<span className='general-stat-text'>{(threesMade[0]/gamesPlayed).toFixed(1)}-{(threesMade[1]/gamesPlayed).toFixed(1)} ({fg3Pct.toString().slice(1)}) </span>]
    const freeThrowEntry = [<span className='stat-label-large'>FT: </span>,<span className='general-stat-text'>{(freeThrowsMade[0]/gamesPlayed).toFixed(1)}-{(freeThrowsMade[1]/gamesPlayed).toFixed(1)} ({ftPct.toString().slice(1)})</span>]

    const parsedPercentages = [fieldGoalEntry, threePtEntry, freeThrowEntry];
    
    return parsedPercentages;
  }

  function parseAdvanced(advanced) {
    if (advanced === "N/A") {
      return [<span className='general-stat-text'>Advanced Stats are not available for this player</span>]
    }
    const advStatArr = advanced.split(" ");
    const parsedAdvStats = [];
    for (let i = 0; i < advStatArr.length; i++) {
      const stat = parseFloat(advStatArr[i]);
      const digits = stat.toString().length;
      if (advStatArr[i].includes("%")) {
        const label = advStatArr[i].substring(digits + 1);
        parsedAdvStats.push([<span className='general-stat-text'>{stat}%</span>,<span className='stat-label-large'>{label}</span>])
      } else {
        const label = advStatArr[i].substring(digits);
        parsedAdvStats.push([<span className='general-stat-text'>{stat}</span>,<span className='stat-label-large'>{label} </span>]);
      }
    }

    return parsedAdvStats;
  }

  const perGameStats = parseStats(player.node.stats.internal.content);
  const percentageStats = parsePercentages(player.node.percentages.internal.content);
  const advancedStats = parseAdvanced(player.node.advanced.internal.content);

  function openButton() {
    if (isOpen) {
      setBottomDisplay(prevState => !prevState);
    } else {
      setTimeout(() => {
        setBottomDisplay(prevState => !prevState);
      }, 300);
    }
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className='draft-guide-player-container'>
      <button onClick={() => openButton()} className={`draft-guide-player-button ${isOpen ? 'button-open' : 'button-close'}`}>
        <div className='draft-guide-player-main-info'>
          <div className='draft-guide-player-rank'>
              <span className='rank-text'>{player.node.rank}</span>
          </div>
          <div className='draft-guide-player-name'>
              <span className='draft-guide-info-text' style={{ fontSize }}>{player.node.name}</span>
          </div>
          <span className='draft-guide-info-text draft-text-desktop'>{player.node.team}</span>
          <span className='draft-guide-info-text draft-text-position'>{player.node.position}</span>
          <div className='draft-guide-player-size'>
              <span>Height: {player.node.height}</span>
              <span>Weight: {player.node.weight}</span>
          </div>
          <div className='draft-guide-side-stats'>
            {bottomDisplay && <span className='general-stat-text'>{perGameStats}</span>}
          </div>
        </div>
        <div className={`draft-guide-box-separator ${isOpen ? 'box-width-open' : 'box-width-close'}`}/>
        {bottomDisplay && (
            <>
              <div className='draft-guide-mobile-stats'>
                <div className='draft-player-info-container'>
                  <span className='general-stat-text'>{perGameStats}</span>
                </div>
                <div className='draft-guide-box-separator box-width-open'/>
              </div>
              <div className='box-flex-display'>
                <div className='draft-player-info-container'>
                  {percentageStats}
                </div>
                <div className='draft-guide-mobile-stats draft-guide-box-separator box-width-open'/>
                <div className='pin-right draft-player-info-container'>
                  {advancedStats}
                </div>
              </div>
              <div className='draft-guide-box-separator box-width-open'/>
              <div className='draft-player-info-container'>
                <span className='general-stat-text'>{player.node.description.internal.content}</span>
              </div>
            </>
          )}
        {!bottomDisplay && (
          <div className='draft-player-info-container'>
            {perGameStats}
          </div>
        )}
      </button>
    </div>
  );
};

