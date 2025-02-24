const selectors = {
	transferFoundsLink: '#transfer_funds_tab > a',
	fromAccountDDB: '#tf_fromAccountId',
	toAccountDDB: '#tf_toAccountId',
	amountBox: '#tf_amount',
	descriptionBox: '#tf_description',
	continueBtn: '#btn_submit',
	successAlertLocator: '.alert',
	amountVerifeValue: ':nth-child(3) > .span3',
};

const successAlertText = 'You successfully submitted your transaction.';

class TransferFoundsPage {
	clickTransferFounds() {
		cy.get(selectors.transferFoundsLink).should('be.visible');
		cy.get(selectors.transferFoundsLink).click();
	}
	selectFromAccount(fromAccountOptions) {
		cy.get(selectors.fromAccountDDB).select(fromAccountOptions);
	}
	selectToAccount(toAccountOptions) {
		cy.get(selectors.toAccountDDB).select(toAccountOptions);
	}
	amount(amountValue) {
		cy.get(selectors.amountBox).type(amountValue);
	}
	description(descriptionText) {
		cy.get(selectors.descriptionBox).type(descriptionText);
	}
	clickContinueBtn() {
		cy.get(selectors.continueBtn).click();
	}
	clickSunmitnueBtn() {
		cy.get(selectors.continueBtn).click();
	}
	messageVerification() {
		cy.get(selectors.successAlertLocator).should('be.visible');
		cy.get(selectors.successAlertLocator).should('contain', successAlertText);
	}
	amountVerification(amountV) {
		cy.get(selectors.amountVerifeValue).should('be.visible');
		cy.get(selectors.amountVerifeValue).should('contain', amountV);
	}
}

export default TransferFoundsPage;
