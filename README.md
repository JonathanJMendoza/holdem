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

## Table and training controls

- **Table settings:** choose whole-chip small/big blinds (1 ≤ SB ≤ BB ≤ 1000), rename bots, and select their styles. Blinds take effect next hand; names and styles immediately. **New table** applies settings and resets chips.
- **Bot styles:** Balanced uses moderate thresholds; Tight / cautious folds more and raises stronger hands; Loose / passive calls wider and rarely raises; Loose / aggressive continues wider and raises more frequently with larger sizing. These are randomized equity-based practice profiles, not solver strategies.
- **Step through every decision:** press **Next bot decision** to advance one opponent action and read its reasoning. Make your own decisions with the normal controls. Step mode takes priority over skipping after a fold.
- **Skip after I fold:** opponents finish the hand rapidly, preserving actual chip results, then the next hand is dealt automatically.
- **Reveal opponent cards:** inspect every opponent's private cards for learning. Revealing does not change the coach's random-hand equity assumptions.
- **Position ranges:** see illustrative first-in starting-hand ranges and position labels, including Button, SB, BB, Cutoff, Hijack, Lojack and UTG where applicable. The heads-up button is also the small blind. Ranges are examples for roughly 50–100 BB play, not recommendations for every stack size or facing a raise.
- **Calculations:** inspect pot odds, approximate calling EV, equity simulation methodology, and next-card draw probability. Side pots and future betting limit the simple EV model.
- **Suggested raise:** see an example sizing formula and click **Use this size** to fill the raise control without placing the bet. The size is clamped to legal betting limits and your stack.
- **Hand history:** actions appear chronologically under Preflop, Flop, Turn and River headings for the current hand.

Training settings and bot customization last for the current browser session. Refreshing resets them.
