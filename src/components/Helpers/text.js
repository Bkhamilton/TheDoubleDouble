import React from 'react';

export const makeBold = (text) => {
    const parts = text.split("__");
    return parts.map((part, i) => (
      i % 2 === 1 ? <strong key={`bold-${i}`}>{part}</strong> : part
    ));
};

export const replaceNewLines = (text) => {
  return text.map((line, i) => {
    if (typeof line === "string") {
      return line.split("\n").map((part, j) => (
        <React.Fragment key={`line-${i}-${j}`}>
          {part}
          <br />
        </React.Fragment>
      ));
    }
    return line;
  });
};

export const replaceNewlinesNew = (text) => {
  return text.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);
}


export const makeBoldNew = (text) => {
  return text.map((line, i) => {
    if (typeof line === "string") {
      return line.split("__").map((part, i) => (
        i % 2 === 1 ? <strong key={`bold-${i}`}>{part}</strong> : part
      ));
    }
    return line;
  });
};

export const makeTextEdits = (text) => {
  let modifiedText = text;
  modifiedText = makeBold(modifiedText);
  modifiedText = replaceNewLines(modifiedText);
  return modifiedText;
};