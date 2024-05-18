import React, { useState, useEffect } from 'react';
import './PlayGround.css';
import LineTo from 'react-lineto';

const PlayGround = ({ gridSize }) => {
  const [gridState, setGridState] = useState(Array(gridSize).fill(Array(gridSize).fill(false)));
  const cellSize = 650 / gridSize;
  const [selectedDots, setSelectedDots] = useState([]);
  const [lastClickedDot, setLastClickedDot] = useState(null);

  const [room, setRoom] = useState({
    "cpoints": [
      {
        "i1": 0,
        "i2": 1
      },
      {
        "i1": 2,
        "i2": 3
      }
    ],
    "points": [
      {
        "x": 0,
        "y": 0
      },
      {
        "x": 1,
        "y": 1
      },
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 5,
        "y": 9
      }
    ]
  });
  const [player, setPlayer] = useState({});



  useEffect(() => {
    setGridState(Array(gridSize).fill(Array(gridSize).fill(false)));
  }, [gridSize]);

  const handleClick = (rowIndex, colIndex) => {
    setSelectedDots((prevSelectedDots) => {
      if (prevSelectedDots.length === 1) {
        setLastClickedDot({ row: rowIndex, col: colIndex });
        return [...prevSelectedDots, { row: rowIndex, col: colIndex }];
      } else {
        const newSelectedDots = [{ row: rowIndex, col: colIndex }];
        setLastClickedDot(null);
        return newSelectedDots;
      }
    });
  };

  const generateDotClass = (rowIndex, colIndex) => {
    return `${rowIndex}${colIndex}`;
  };

  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {gridState.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="grid-item"
                style={{
                  '--cell-size': `${cellSize}px`,
                  '--dot-size': `${cellSize / 2}px`,
                  '--margin-size': `${-1 * cellSize}px`
                }}
              >
                {room.points.some((x) => parseInt(x.x) == colIndex && parseInt(x.y) == rowIndex) == true && <div
                  className={`dot ${generateDotClass(rowIndex, colIndex)}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  style={{ backgroundColor: room.cpoints.some(dot => 
                    (room.points[parseInt(dot.i1)].y === rowIndex && room.points[parseInt(dot.i1)].x === colIndex) ||
                    (room.points[parseInt(dot.i2)].y === rowIndex && room.points[parseInt(dot.i2)].x === colIndex) ) ? 'salmon' : 'black' }}
                />}
              </div>
            ))}
          </div>
        ))}
      </div>

      {Object.values(room.cpoints).map((val, i) => (
        <LineTo
          from={`${room.points[parseInt(val["i1"])].y + "" + room.points[parseInt(val["i1"])].x}`}
          to={`${room.points[parseInt(val["i2"])].y + "" + room.points[parseInt(val["i2"])].x}`}
          borderColor="black"
          borderWidth={5}
        />
      ))}
      {lastClickedDot && (
        <LineTo
          from={`${generateDotClass(selectedDots[0].row, selectedDots[0].col)}`}
          to={`${generateDotClass(lastClickedDot.row, lastClickedDot.col)}`}
          borderColor="black"
          borderWidth={5}
        />
      )}
    </div>
  );
};

export default PlayGround;
