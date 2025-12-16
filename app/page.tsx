"use client";

import React from "react";
import { useMemoryGame } from "@/hooks/useMemoryGame";
import { GameHeader } from "@/components/GameHeader";
import { GameBoard } from "@/components/GameBoard";
import { WinModal } from "@/components/WinModal";
import { POKEMON_LIST } from "@/data/pokemon";

export default function Home() {
  const { gameState, flipCard, resetGame, isChecking } = useMemoryGame();

  return (
    <main className="min-h-screen py-6 md:py-10">
      <div className="container mx-auto">
        {/* Game Header with Stats and Controls */}
        <GameHeader
          moves={gameState.moves}
          matchedPairs={gameState.matchedPairs}
          totalPairs={POKEMON_LIST.length}
          timeElapsed={gameState.timeElapsed}
          onReset={resetGame}
        />

        {/* Game Board */}
        <GameBoard
          cards={gameState.cards}
          onCardClick={flipCard}
          isDisabled={isChecking}
        />

        {/* Win Modal */}
        <WinModal
          isVisible={gameState.isComplete}
          moves={gameState.moves}
          timeElapsed={gameState.timeElapsed}
          onPlayAgain={resetGame}
        />

        {/* Footer */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-white/70 text-sm md:text-base">
            Click on cards to flip them and find matching pairs!
          </p>
          <p className="text-white/50 text-xs md:text-sm mt-2">
            Made with ❤️ and Next.js
          </p>
        </div>
      </div>
    </main>
  );
}
