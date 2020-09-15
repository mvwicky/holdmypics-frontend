describe("Goes to index", () => {
  it("Shows content", () => {
    cy.server().route("GET", "https://holdmypics.com/api/count/", {
      count: 2000,
    });
    cy.visit("/");
  });
});
