import * as React from 'react';

export function parseStats(stats, gamesPlayed) {
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

export function parseStatsMobile(stats, gamesPlayed) {
    const statArr = stats.split(' ');
    const perGameMobileStats = [];
    for (let i = 1; i < statArr.length - 2; i++) {
      const totalStat = parseFloat(statArr[i]);
      const digits = totalStat.toString().length;
      const label = statArr[i].substring(digits);
      const perGameStat = (totalStat / gamesPlayed).toFixed(1);
      const statValue = <span className='general-stat-text'>{perGameStat}</span>;
      const statLabel = <span className='stat-label'>{label.toUpperCase()}</span>
      perGameMobileStats.push([statValue, statLabel]);
    }

    return perGameMobileStats;
}

//returns FG: 10-20 (.500) 3PT: 3-6 (.500) FT: 4-5 (.800)
export function parsePercentages(percentages, gamesPlayed) {
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

//returns FG: (.500) 3PT: (.500) FT: (.800)
export function parsePercentagesMobile(percentages, gamesPlayed) {
  const percentagesArray = percentages.split(" ");

  const fieldGoalsMade = percentagesArray[0].substring(0, percentagesArray[0].length - 2).split("-").map(Number);
  const threesMade = percentagesArray[1].substring(0, percentagesArray[1].length - 3).split("-").map(Number);
  const freeThrowsMade = percentagesArray[2].substring(0, percentagesArray[2].length - 2).split("-").map(Number);
  const fgPct = (fieldGoalsMade[0]/fieldGoalsMade[1]).toFixed(3);
  const fg3Pct = (threesMade[0]/threesMade[1]).toFixed(3);
  const ftPct = (freeThrowsMade[0]/freeThrowsMade[1]).toFixed(3);

  const fieldGoalEntry = [<span className='stat-label-large'>FG: </span>,<span className='general-stat-text stat-margin'>({fgPct.toString().slice(1)})</span>]
  const threePtEntry = [<span className='stat-label-large'>3PT: </span>,<span className='general-stat-text stat-margin'>({fg3Pct.toString().slice(1)})</span>]
  const freeThrowEntry = [<span className='stat-label-large'>FT: </span>,<span className='general-stat-text'>({ftPct.toString().slice(1)})</span>]

  const parsedPercentages = [fieldGoalEntry, threePtEntry, freeThrowEntry];
  
  return parsedPercentages;
}

//Use if adding more advanced stats.
export function parseAdvancedOld(advanced) {
  //str is in the format 12.0PER 100.5ORTG 98.5DRTG 24.5%USG
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
        parsedAdvStats.push([<span className='general-stat-text'>{stat}</span>,<span className='stat-label-large stat-margin'>{label}</span>]);
      }
    }

    return parsedAdvStats;
}

//Use if using PER, ORTG, DRTG, and USG
export function parseAdvanced(advanced) {
  //str is in the format 12.0PER 100.5ORTG 98.5DRTG 24.5%USG
  if (advanced === "N/A") {
    return [<span className='general-stat-text'>Advanced Stats are not available for this player</span>]
  }
  const advStatArr = advanced.split(" ");
  const parsedAdvStats = [];
  parsedAdvStats.push([<span className='general-stat-text'>{advStatArr[0].slice(0, -3)}</span>, <span className='stat-label-large stat-margin'>{advStatArr[0].slice(-3)}</span>]);
  parsedAdvStats.push([<span className='general-stat-text'>{advStatArr[1].slice(0, -4)}</span>, <span className='stat-label-large stat-margin'>{advStatArr[1].slice(-4)}</span>]);
  parsedAdvStats.push([<span className='general-stat-text'>{advStatArr[2].slice(0, -4)}</span>, <span className='stat-label-large stat-margin'>{advStatArr[2].slice(-4)}</span>]);
  parsedAdvStats.push([<span className='general-stat-text'>{advStatArr[3].slice(0, -3)}</span>, <span className='stat-label-large stat-margin'>{advStatArr[3].slice(-3)}</span>]);
  return parsedAdvStats;
}