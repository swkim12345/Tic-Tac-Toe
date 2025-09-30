import React from "react";

export default function Cell({ value, onClick, disabled }) {
  const symbol = value === 1 ? "X" : value === 2 ? "O" : "";
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      style={{ width: 60, height: 60, fontSize: 24 }}
    >
      {symbol}
    </button>
  );
}
