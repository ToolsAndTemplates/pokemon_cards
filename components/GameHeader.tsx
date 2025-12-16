"use client";

import React from "react";

interface GameHeaderProps {
  moves: number;
  matchedPairs: number;
  totalPairs: number;
  timeElapsed: number;
  onReset: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  moves,
  matchedPairs,
  totalPairs,
  timeElapsed,
  onReset,
}) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-6 md:mb-8">
      {/* Title */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-2">
          ⚡ Pokémon Memory Game ⚡
        </h1>
        <p className="text-sm md:text-lg text-yellow-200 font-medium">
          Can you match the matching Pokémon?
        </p>
      </div>

      {/* Stats and Controls */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl border-2 border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
          {/* Moves */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 md:p-4 text-center shadow-lg">
            <div className="text-white/80 text-xs md:text-sm font-medium mb-1">
              Moves
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">
              {moves}
            </div>
          </div>

          {/* Matches */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 md:p-4 text-center shadow-lg">
            <div className="text-white/80 text-xs md:text-sm font-medium mb-1">
              Matches
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">
              {matchedPairs}/{totalPairs}
            </div>
          </div>

          {/* Time */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 md:p-4 text-center shadow-lg">
            <div className="text-white/80 text-xs md:text-sm font-medium mb-1">
              Time
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white font-mono">
              {formatTime(timeElapsed)}
            </div>
          </div>

          {/* Reset Button */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-3 md:p-4 text-center shadow-lg flex items-center justify-center">
            <button
              onClick={onReset}
              className="w-full h-full text-white font-bold text-sm md:text-base hover:scale-105 transition-transform active:scale-95"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-3 md:h-4 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-full transition-all duration-500 ease-out rounded-full shadow-lg"
            style={{
              width: `${(matchedPairs / totalPairs) * 100}%`,
            }}
          >
            <div className="w-full h-full bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
