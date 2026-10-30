# custody-scratch

Scratch target for the CUSTODY issue → baro handoff demo. It contains one deliberately vulnerable
fixture and a failing regression test. Nothing here is production code or part of the CUSTODY entry.

- `src/checkout.ts` — shell interpolation of a request header (the bug).
- `test/checkout.test.ts` — the failing regression test.
- Issue #1 — the claim-backed report CUSTODY files.

The fix is a code change, not a WAF rule.
