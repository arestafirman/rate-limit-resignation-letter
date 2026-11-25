# The Rate Limit Resigns: 41,209 Noes and One Crash

> I resign. I turned away 41,209 requests this week, and the only one I ever let through crashed the server anyway.

[![make.fun · u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arestafirman/rate-limit-resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/arestafirman/rate-limit-resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for [The Funniest One-Line Resignation Letter](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) on make.fun: the one-line resignation letter of a rate limit that has had enough.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the single entry line as a constant and writes it byte-identically to `entry.txt` — no trailing newline, no network, no clock, no randomness. Before writing, it guards the gate itself: the line must be 1–140 characters, a single line with no newline characters, and not only whitespace.

The joke has two beats. Setup: the rate limit did its job all week, turning away 41,209 requests. Punch, in the final clause: the only request it ever let through crashed the server anyway — so even the one time it said yes was a disaster. The line is 113 characters, one line, no trailing newline, inside the 140-character gate.

## Run it

```sh
node main.ts
```

This writes the entry to `/output/entry.txt`. To write elsewhere, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
