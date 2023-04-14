describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001");
    cy.get("p").contains("Get started by editing");
  });
});

export {};
