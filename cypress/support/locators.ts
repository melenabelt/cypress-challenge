const indexPageLocators = {
    // Login
    loginButton: '#login2',
    logOutLabel: '#logout2',
    usernameLabel: '#nameofuser',

    // Contact
    generalNavLink: 'a.nav-link',
    contactEmailInput: '#recipient-email',
    contactNameInput: '#recipient-name',
    messageInput: '#message-text',
    closeButton: '.btn-secondary',
    sendMsgButton: '.btn-primary',

    // Categories
    category: '.list-group #itemc',

    // Product cards
    productTitle: 'a[class="hrefch"]',

}

const loginModalLocators = {
    loginLabel: '#logInModalLabel',
    usernameInput: '#loginusername',
    passwordInput: '#loginpassword',
    loginButton: 'button[onclick="logIn()"]',
    closeButton: "//div[@id='logInModal']//button[@class='btn btn-secondary']"
}

const productDetailLocators = {
    productTitle: 'h2[class="name"]',
    addToCartButton: '.btn-success'
}

const cartLocators = {
    priceList: 'tr.success td:nth-child(3)',
    totalPriceTitle: '#totalp',

    placeOrderButton: 'button[class="btn btn-success"]',
    placeOrderModal: '[id="orderModal"]',

    nameInput: '#name',
    countryInput: '#country',
    cityInput: '#city',
    creditCardInput: '#card',
    monthInput: '#month',
    yearInput: '#year',

    closeButton: 'button.btn.btn-secondary',
    purchaseButton: 'button.btn.btn-primary',

    successPurchaseModal: 'div.sweet-alert.showSweetAlert.visible'

}


export {indexPageLocators, loginModalLocators, productDetailLocators, cartLocators}
