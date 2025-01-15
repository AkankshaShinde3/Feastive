import { sum } from "../sum";

test("calculate the sum of two numbers", () => {
  const ans = sum(3, 2);

  expect(ans).toBe(5);
});
