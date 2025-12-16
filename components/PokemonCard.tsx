"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/types";
import { POKEMON_LIST } from "@/data/pokemon";

interface PokemonCardProps {
  card: Card;
  onClick: (cardId: string) => void;
  isDisabled?: boolean;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  card,
  onClick,
  isDisabled = false,
}) => {
  const pokemon = POKEMON_LIST.find((p) => p.id === card.pokemonId);
  const isFlipped = card.isFlipped || card.isMatched;

  const handleClick = () => {
    if (!isDisabled && !card.isFlipped && !card.isMatched) {
      onClick(card.id);
    }
  };

  return (
    <div
      className={`
        relative w-full aspect-[3/4] cursor-pointer
        transition-transform duration-300 hover:scale-105
        ${isDisabled ? "cursor-not-allowed opacity-75" : ""}
        ${card.isMatched ? "animate-pulse-slow" : ""}
      `}
      onClick={handleClick}
    >
      <div
        className={`
          relative w-full h-full preserve-3d transition-transform duration-600
          ${isFlipped ? "rotate-y-180" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-orange-500 shadow-xl border-4 border-yellow-400"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-white font-bold text-lg md:text-xl tracking-wider">
              POKÉMON
            </div>
            <div className="mt-2 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce-slow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-xl border-4 border-yellow-400 rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {pokemon && (
            <div className="flex flex-col items-center justify-center h-full p-3 md:p-4">
              <div className="relative w-full h-3/4 flex items-center justify-center">
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl opacity-30
                    ${card.isMatched ? "animate-pulse" : ""}
                  `}
                ></div>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                  className="relative z-10 drop-shadow-2xl w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  priority
                />
              </div>
              <div className="mt-2 text-center">
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-gray-800 capitalize">
                  {pokemon.name}
                </h3>
                {card.isMatched && (
                  <div className="mt-1 text-green-600 font-bold text-xs md:text-sm animate-bounce">
                    ✓ MATCHED!
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
