# Pokemon Memory Game

An attractive, responsive Pokemon card memory game built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Beautiful Design**: Gradient backgrounds, 3D card flip animations, and smooth transitions
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop devices
- **Game Stats**: Track moves, matched pairs, and time elapsed
- **Win Animation**: Celebratory modal when you complete the game
- **8 Pokemon Pairs**: Match 16 cards featuring popular Pokemon characters
- **Real-time Timer**: See how fast you can complete the game
- **Progress Bar**: Visual indicator of game completion

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - Custom game logic hook

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Play

1. Click on any card to flip it and reveal the Pokemon
2. Click on another card to find its match
3. If the cards match, they stay flipped
4. If they don't match, they flip back after a moment
5. Match all 8 pairs to win the game!
6. Try to complete the game in the fewest moves and fastest time

## Game Features

### Beautiful Card Design
- 3D flip animations using CSS transforms
- Pokeball design on the card back
- High-quality Pokemon images from PokeAPI
- Gradient backgrounds and shadows

### Responsive Grid
- 4-column grid on all devices
- Adjustable card sizes based on screen size
- Touch-friendly on mobile devices

### Game Controls
- **Moves Counter**: Tracks the number of moves made
- **Matches Counter**: Shows progress (X/8)
- **Timer**: Displays elapsed time
- **Reset Button**: Start a new game anytime
- **Progress Bar**: Visual completion indicator

### Win State
- Animated trophy and stars
- Final statistics display
- Play Again button to restart

## Project Structure

```
pokemon_cards/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main game page
├── components/
│   ├── GameBoard.tsx         # Game board grid
│   ├── GameHeader.tsx        # Header with stats
│   ├── PokemonCard.tsx       # Individual card component
│   └── WinModal.tsx          # Victory modal
├── data/
│   └── pokemon.ts            # Pokemon data
├── hooks/
│   └── useMemoryGame.ts      # Game logic hook
├── types/
│   └── index.ts              # TypeScript types
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
