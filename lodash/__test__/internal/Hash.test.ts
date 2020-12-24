import Hash from "../../src/.internal/Hash";

test("初始化 --new Hash()--", () => {
  const hash = new Hash();
  expect(hash.size).toBe(0);

  hash.set(0, 1);
  hash.set(1, 2);
});
