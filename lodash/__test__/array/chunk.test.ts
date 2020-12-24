import chunk from "../../src/array/chunk";

test("chunk size=1", () => {
  expect(chunk([1, 2, 3, 4, 5, 6])).toEqual([[1], [2], [3], [4], [5], [6]]);
});

test("chunk size=2", () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("chunk size=3", () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
});
