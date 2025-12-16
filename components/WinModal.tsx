"use client";

import React, { useEffect, useState } from "react";

interface WinModalProps {
  isVisible: boolean;
  moves: number;
  timeElapsed: number;
  onPlayAgain: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  isVisible,
  moves,
  timeElapsed,
  onPlayAgain,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShow(true), 300);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className={`
          bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400
          rounded-3xl p-6 md:p-10 shadow-2xl max-w-md w-full border-4 border-yellow-500
          transform transition-all duration-500
          ${show ? "scale-100 rotate-0" : "scale-50 rotate-12"}
        `}
      >
        {/* Trophy Animation */}
        <div className="text-center mb-6">
          <div className="text-8xl md:text-9xl animate-bounce-slow inline-block">
            🏆
          </div>
          <div className="flex justify-center space-x-2 mt-2">
            <span className="text-4xl animate-bounce-slow" style={{ animationDelay: "0.1s" }}>
              ⭐
            </span>
            <span className="text-4xl animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
              ⭐
            </span>
            <span className="text-4xl animate-bounce-slow" style={{ animationDelay: "0.3s" }}>
              ⭐
            </span>
          </div>
        </div>

        {/* Congratulations Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-lg mb-2">
          Congratulations!
        </h2>
        <p className="text-center text-white/90 text-lg mb-6">
          You matched all Pokémon! 🎉
        </p>

        {/* Stats */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-medium text-lg">Total Moves:</span>
            <span className="text-white font-bold text-2xl">{moves}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white font-medium text-lg">Time Taken:</span>
            <span className="text-white font-bold text-2xl font-mono">
              {formatTime(timeElapsed)}
            </span>
          </div>
        </div>

        {/* Play Again Button */}
        <button
          onClick={onPlayAgain}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg md:text-xl py-4 rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95 border-2 border-white/30"
        >
          🎮 Play Again
        </button>
      </div>
    </div>
  );
};
