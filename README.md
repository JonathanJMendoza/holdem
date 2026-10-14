# Holdem

A no-limit Texas Hold’em practice game for one human and 1–9 computer opponents. Play chips only. Includes estimated equity, draw outs, optional strategy warnings, hand history, and an in-game rules guide.

## Run

Requires Node.js 20 or newer. No application dependencies or installation step.

```sh
npm start
```

Open http://localhost:3000 in your browser. Set `PORT` to choose another port. Select 2–10 players and press **New table**. Each player begins with 1,000 chips; blinds are 10/20. Table size changes take effect when you start a new table. Deal the next hand after each result.

```sh
npm test
```

## Coaching limitations

Equity is a Monte Carlo estimate against random opponent hands, not the bots’ actual cards or realistic ranges. Outs count next cards that improve your hand category to straight or better; they are not guaranteed winning outs. Recommendations are simple equity/pot-odds heuristics and do not model implied odds, fold equity, or advanced strategy. A warning pauses an action; press an action again to proceed. Bots are simple practice opponents, not a poker solver. The game runs entirely in your browser; refreshing resets the table. No multiplayer or real-money play.
