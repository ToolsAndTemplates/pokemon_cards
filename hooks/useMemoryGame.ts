"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, GameState } from "@/types";
import { POKEMON_LIST } from "@/data/pokemon";

export const useMemoryGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    isComplete: false,
    timeElapsed: 0,
  });

  const [isChecking, setIsChecking] = useState(false);

  // Initialize game
  const initializeGame = useCallback(() => {
    // Create pairs of cards
    const cards: Card[] = [];
    POKEMON_LIST.forEach((pokemon) => {
      // Create two cards for each Pokemon
      cards.push(
        {
          id: `${pokemon.id}-1`,
          pokemonId: pokemon.id,
          isFlipped: false,
          isMatched: false,
        },
        {
          id: `${pokemon.id}-2`,
          pokemonId: pokemon.id,
          isFlipped: false,
          isMatched: false,
        }
      );
    });

    // Shuffle cards
    const shuffledCards = cards.sort(() => Math.random() - 0.5);

    setGameState({
      cards: shuffledCards,
      flippedCards: [],
      matchedPairs: 0,
      moves: 0,
      isComplete: false,
      timeElapsed: 0,
    });
    setIsChecking(false);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Timer
  useEffect(() => {
    if (gameState.moves > 0 && !gameState.isComplete) {
      const timer = setInterval(() => {
        setGameState((prev) => ({
          ...prev,
          timeElapsed: prev.timeElapsed + 1,
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState.moves, gameState.isComplete]);

  // Handle card flip
  const flipCard = useCallback(
    (cardId: string) => {
      if (isChecking) return;

      const card = gameState.cards.find((c) => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return;

      // Check if we already have 2 cards flipped
      if (gameState.flippedCards.length >= 2) return;

      const newFlippedCards = [...gameState.flippedCards, card];

      // Update card state
      const updatedCards = gameState.cards.map((c) =>
        c.id === cardId ? { ...c, isFlipped: true } : c
      );

      setGameState((prev) => ({
        ...prev,
        cards: updatedCards,
        flippedCards: newFlippedCards,
        moves: newFlippedCards.length === 2 ? prev.moves + 1 : prev.moves,
      }));

      // Check for match if we have 2 cards
      if (newFlippedCards.length === 2) {
        setIsChecking(true);
        const [first, second] = newFlippedCards;

        if (first.pokemonId === second.pokemonId) {
          // Match found!
          setTimeout(() => {
            setGameState((prev) => {
              const matchedCards = prev.cards.map((c) =>
                c.id === first.id || c.id === second.id
                  ? { ...c, isMatched: true }
                  : c
              );

              const newMatchedPairs = prev.matchedPairs + 1;
              const isComplete = newMatchedPairs === POKEMON_LIST.length;

              return {
                ...prev,
                cards: matchedCards,
                flippedCards: [],
                matchedPairs: newMatchedPairs,
                isComplete,
              };
            });
            setIsChecking(false);
          }, 600);
        } else {
          // No match - flip back
          setTimeout(() => {
            setGameState((prev) => ({
              ...prev,
              cards: prev.cards.map((c) =>
                c.id === first.id || c.id === second.id
                  ? { ...c, isFlipped: false }
                  : c
              ),
              flippedCards: [],
            }));
            setIsChecking(false);
          }, 1000);
        }
      }
    },
    [gameState.cards, gameState.flippedCards, isChecking]
  );

  const resetGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    flipCard,
    resetGame,
    isChecking,
  };
};
