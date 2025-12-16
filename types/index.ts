export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface Card {
  id: string;
  pokemonId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  flippedCards: Card[];
  matchedPairs: number;
  moves: number;
  isComplete: boolean;
  timeElapsed: number;
}
