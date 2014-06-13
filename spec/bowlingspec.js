describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("also expects that true isn't false", function() {
    expect(true).toBe(false);
  });
});
