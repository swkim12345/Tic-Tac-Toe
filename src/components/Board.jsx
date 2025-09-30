import React, { useState } from "react";
import Cell from "./cell";

export default function Board() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [moves, setMoves] = useState(0);
  const [owners, setOwners] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null); // null | 1 | 2 | "draw"

  function checkWinner(grid) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) {
        return grid[a]; // 1 or 2
      }
    }

    return null;
  }

  function handleLock(index) {
    if (owners[index] !== null || winner) return;

    const next = owners.slice();
    next[index] = currentPlayer;

    const w = checkWinner(next);
    const nextMoves = moves + 1;

    setOwners(next);
    setMoves(nextMoves);

    if (w) setWinner(w);
    else if (nextMoves === 9) setWinner("draw");
    else setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function reset() {
    setOwners(Array(9).fill(null));
    setWinner(null);
    setMoves(0);
    setCurrentPlayer(1);
  }

  return (
    <div>
      <div>현재 플레이어: {currentPlayer === 1 ? "X" : "O"}</div>
      <div>총 선택 수: {moves}</div>

      <div>
        {owners.map((owner, idx) => (
          <React.Fragment key={idx}>
            <Cell
              value={owner}
              onClick={() => handleLock(idx)}
              disabled={Boolean(winner)}
            />
            {idx % 3 === 2 ? <br /> : null}
          </React.Fragment>
        ))}
      </div>

      {winner && (
        <p>
          {winner === "draw" ? "무승부!" : `${winner === 1 ? "X" : "O"} 승!`}
        </p>
      )}

      <button onClick={reset}>다시 시작</button>
    </div>
  );
}
