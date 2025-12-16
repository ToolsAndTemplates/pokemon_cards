"use client";

import React from "react";
import { PokemonCard } from "./PokemonCard";
import { Card } from "@/types";

interface GameBoardProps {
  cards: Card[];
  onCardClick: (cardId: string) => void;
  isDisabled: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  onCardClick,
  isDisabled,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {cards.map((card) => (
          <PokemonCard
            key={card.id}
            card={card}
            onClick={onCardClick}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    </div>
  );
};
