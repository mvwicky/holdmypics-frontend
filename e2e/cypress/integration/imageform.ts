const COUNT = 2000;

describe("Goes to index", () => {
  beforeEach(() => {
    cy.route2("GET", "https://holdmypics.com/api/count/", {
      body: { count: COUNT },
      headers: { "Access-Control-Allow-Origin": Cypress.config("baseUrl") },
    }).as("getCount");
  });

  it("Fetches count from remote.", () => {
    cy.visit("/");
    cy.wait("@getCount", { timeout: 1000 })
      .its("response.body")
      .should("include", "count");

    const countStr = COUNT.toLocaleString(undefined, {
      style: "decimal",
      maximumFractionDigits: 0,
    });
    cy.get("[data-cy=img-count]").should("contain.text", countStr);
  });

  it("Changes the foreground color", () => {
    cy.visit("/");
    cy.get("[data-cy=generated-image]").as("image");
    cy.get("[data-cy=generated-url]").as("url");
    cy.get("[data-cy=fg]").scrollIntoView().type("{selectall}000");
    cy.get("@url").should("contain.text", "/000/");
    cy.get("@image").should(($img) => {
      expect($img.attr("src")).to.contain("/000/");
    });
  });
});
