import React, { useState, useEffect } from 'react';
import './PlayGround.css';

const PlayGround = ({ gridSize }) => {
  const [gridState, setGridState] = useState(Array(gridSize).fill(Array(gridSize).fill(false)));
  const cellSize = 650 / gridSize;

  useEffect(() => {
    setGridState(Array(gridSize).fill(Array(gridSize).fill(false)));

  }, [gridSize]);

  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {gridState.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-item ${cell ? 'active' : ''}`}
                style={{ '--cell-size': `${cellSize}px` }}
              ></div>
            ))}
          </div>
        ))}

        <div className="grid-container offset"  style={{ '--cell-size2': `${cellSize*0.5}px` }} >
          {gridState.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className="grid-item overlay"
                  style={{ '--cell-size2': `${cellSize*0.5}px` ,  '--margin': `${cellSize}px`}}
                ></div>
              ))}
            </div>
          ))}
        </div>
          
      </div>
    </div>
  );
};

export default PlayGround;
