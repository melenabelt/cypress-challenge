import { cartLocators, indexPageLocators, productDetailLocators } from "../support/locators";

let indexProductTitleText: string;
let detailProductTitle: string;

class DetailPage{
    constructor() {
    }

    choosePhonesCategory() {
        cy.get(indexPageLocators.category).contains('Phones').should('exist').click();
    }

    chooseLaptopsCategory() {
        cy.get(indexPageLocators.category).contains('Laptops').should('exist').click();
    }

    chooseMonitorsCategory() {
        cy.get(indexPageLocators.category).contains('Monitors').should('exist').click();
    }

    validateAddRandomProductToCart() {
    
        cy.get(indexPageLocators.productTitle).then((products) => {
            // Calculate random index
            const randomIndex = Math.floor(Math.random() * products.length);
          
            // Select random product using index
            const randomProduct = products[randomIndex];
          
            // Log the index for debugging
            cy.log((randomIndex).toString());
    
            // Obtain text from randomProduct and store it in productText
            cy.wrap(randomProduct).invoke('text').then((text) => {
                indexProductTitleText = text;
                cy.log(indexProductTitleText);
            });
          
            // Try to click the element without other conditions first
            cy.wrap(randomProduct).click().then(() => {

                cy.get(productDetailLocators.addToCartButton).contains('Add to cart').click(); 

                cy.get(productDetailLocators.addToCartButton).contains('Add to cart').click(); 

                cy.on("window:alert", (message) => {
                    expect(message).to.include("Product added"); 
                });
            });
        });
    }

    validateProdTitleAftAddToCart() {
        
        cy.get(productDetailLocators.productTitle).invoke('text').then((texto) => {
            detailProductTitle = texto;
            cy.log(detailProductTitle);
        });

        expect(indexProductTitleText).to.equal(detailProductTitle);
    }

    validateTotalPrices() {
        let total = 0;

        // Select prices
        cy.get(cartLocators.priceList).each(($el) => {
        const priceText = $el.text().replace('$', '');
        const price = parseFloat(priceText);

        // Suma el precio al total
        total += price;
        }).then(() => {
            cy.log('Total: $' + total.toFixed(0)); // Mostrar el total con cero decimales
        });

        cy.get(cartLocators.totalPriceTitle).invoke('text').then((texto) => {
            expect(total.toString()).to.equal(texto)
        });

    }

}
    

export default DetailPage;