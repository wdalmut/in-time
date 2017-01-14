var time = require('..');

describe("Time", () => {
  it("is before", () => {
    expect(time("10:00").isBefore('10:01')).toBe(true);
  });

  it("is before without leading 0", () => {
    expect(time("9:00").isBefore('10:01')).toBe(true);
  });

  it("is not before", () => {
    expect(time("10:00").isBefore('09:59')).toBe(false);
  });

  it("is not before", () => {
    expect(time("10:00").isBefore('9:59')).toBe(false);
  });
});
