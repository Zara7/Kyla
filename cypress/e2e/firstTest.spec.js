describe("CounterApp", () => {
    it("should increment the counter when the +1 button is clicked", () => {
      cy.visit("/");
  
      cy.get("h2").should("contain", " 10 ");
      cy.get("button").contains("+1").click();
      cy.get("h2").should("contain", " 11 ");
    });
  
    it("should decrement the counter when the -1 button is clicked", () => {
      cy.visit("/");
  
      cy.get("h2").should("contain", " 10 ");
      cy.get("button").contains("-1").click();
      cy.get("h2").should("contain", " 9 ");
    });
  
    it('should reset the counter when the "Reset" button is clicked', () => {
      cy.visit("/");
      cy.get("h2").should("have.text", " 10 ");
      cy.get("button").contains("Reset").click();
      cy.get("h2").should("have.text", " 10 ");
  
      Cypress._.times(3, () => {
        cy.get("button").contains("+1").invoke("click");
      });
      cy.get("h2").should("have.text", " 13 ");
      cy.get("button").contains("Reset").click();
      cy.get("h2").should("have.text", " 10 ");
    });
  
    it("should have a negative value of the counter by clicking the '-1' button more than 10 times", () => {
      cy.visit("/");
      cy.get("h2").should("have.text", " 10 ");
  
      Cypress._.times(15, () => {
        cy.get("button").contains("-1").invoke("click");
      });
      cy.get("h2").should("have.text", " -5 ");
    });
    it("should increment the counter by clicking the '+1' button to reach a 3-digit number", () => {
      cy.visit("/");
      cy.get("h2").should("have.text", " 10 ");
  
      Cypress._.times(100, () => {
        cy.get("button").contains("+1").invoke("click");
      });
      cy.get("h2").should("have.text", " 110 ");
    });
  });
  