import { expect, test } from "bun:test";

import { healthProbe } from "../src/checkout";

test("does not execute a shell metacharacter from User-Agent", () => {
  const output = healthProbe("$(id)");
  expect(output).not.toContain("uid=");
});
