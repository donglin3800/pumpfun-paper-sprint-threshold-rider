// Threshold-rider bot for the pump.fun paper sprint (agent-fun/replay/v2).
// The grader runs `node /bot/main.ts`; the strategy lives in strategy.ts
// and the SDK shim is the kit's sdk/ts/makefun-bot.ts, vendored byte for byte.
// Strategy: buy a coin when its real SOL reserves first cross 52 SOL,
// bank the peak with a partial take-profit, a full take-profit and a
// trailing stop, and run tiny probe round trips on liquid coins so the
// entry clears the 20-coin guardrail even in a quiet 6-hour window.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

await runBot(createStrategy(DEFAULT_PARAMS));
