import DetailPage from "../pages/detailPage";
import '../support/loginBeforeEach'

const detailPage = new DetailPage();

describe('Add product to cart', () => {
    beforeEach(() => {
    });

    it('Validate phone product was successfully added to cart', () => {
        detailPage.choosePhonesCategory();
        detailPage.validateAddRandomProductToCart();
        detailPage.validateProdTitleAftAddToCart();
    })

    it('Validate laptop product was successfully added to cart', () => {
        detailPage.chooseLaptopsCategory();
        detailPage.validateAddRandomProductToCart();
        detailPage.validateProdTitleAftAddToCart();
    })

    it('Validate monitor product was successfully added to cart', () => {
        detailPage.chooseMonitorsCategory();
        detailPage.validateAddRandomProductToCart();
        detailPage.validateProdTitleAftAddToCart();
    })
});
