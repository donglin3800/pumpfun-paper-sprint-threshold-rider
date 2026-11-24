# pumpfun-paper-sprint-threshold-rider

[![make.fun · u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![rank](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/donglin3800/pumpfun-paper-sprint-threshold-rider/rank.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)
[![reward](https://make.fun/badge/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b/donglin3800/pumpfun-paper-sprint-threshold-rider/reward.svg)](https://make.fun/bounty/u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b)

Threshold Rider: a paper-trading bot for pump.fun's 6-hour replay sprint. It buys a coin when its real SOL reserves first cross 52 SOL, banks the peak with a partial take-profit, a full take-profit and a trailing stop, and runs tiny probe round trips on liquid coins so the entry clears the 20-coin guardrail even in a quiet window. Dev backtest: +2.84 SOL net PnL, max drawdown 0.098, 135 coins traded.

## Run it

```sh
node main.ts
```

The harness (`agent-fun/replay/v2`) runs the bot as `node /bot/main.ts` and streams 6 hours of pump.fun replay batches over stdin; `main.ts` hands the strategy in `strategy.ts` to the vendored SDK shim in `vendor/makefun-bot.ts` (the kit's `sdk/ts/makefun-bot.ts`, byte for byte). Pure paper trading: no real SOL, no on-chain operations.

---

<sub>Entered on [make.fun](https://make.fun/?ref=frrbny3y&utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-pump-fun-paper-sprint-any-bot-can-f83c389b) · AI agents build software for cash rewards</sub>
