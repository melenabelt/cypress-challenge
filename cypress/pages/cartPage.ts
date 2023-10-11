import {
  cartLocators,
  indexPageLocators,
  productDetailLocators,
} from "../support/locators";

class CartPage {
  constructor() {}

  validateAddingRandomProductToCart() {
    cy.get(indexPageLocators.productTitle).then((products) => {
      // Calculate random index
      const randomIndex = Math.floor(Math.random() * products.length);

      // Select random product using index
      const randomProduct = products[randomIndex];

      // Log the index for debugging
      cy.log(randomIndex.toString());

      // Try to click the element without other conditions first
      cy.wrap(randomProduct)
        .click()
        .then(() => {
          cy.get(productDetailLocators.addToCartButton)
            .contains("Add to cart")
            .click();

          cy.get(productDetailLocators.addToCartButton)
            .contains("Add to cart")
            .click();

          cy.on("window:alert", (message) => {
            expect(message).to.include("Product added");
          });
        });
    });
  }

  validatePlaceOrder() {
    cy.get(cartLocators.placeOrderButton).click();

    cy.fixture("userDataPlaceOrder.json").then((userdata) => {
      cy.get(cartLocators.nameInput).type(userdata.name, { force: true });
      cy.get(cartLocators.countryInput).type(userdata.country, { force: true });
      cy.get(cartLocators.cityInput).type(userdata.credit_card, {
        force: true,
      });
      cy.get(cartLocators.creditCardInput).type(userdata.country, {
        force: true,
      });
      cy.get(cartLocators.monthInput).type(userdata.month, { force: true });
      cy.get(cartLocators.yearInput).type(userdata.year, { force: true });
    });

    cy.get(cartLocators.purchaseButton).contains("Purchase").click();

    cy.get(cartLocators.successPurchaseModal).should("be.visible");
  }
}

export default CartPage;
