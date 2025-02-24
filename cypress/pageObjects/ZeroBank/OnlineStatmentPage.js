const selectors = {
	onlineStatmentLink: '#online_statements_tab',
	accauntDropdownBox: '#os_accountId',
	recentStatements2012: ':nth-child(2) > .nav > .active > a',
	statementFile:
		'#os_2012 > .table > tbody > tr > [style="border-right: 1px solid #CCC"] > a',
};

const statementExpect = 'Statement 01/10/12(57K)';

class OnlineStatmentPage {
	verifyOnlineStatment(accauntType) {
		cy.get(selectors.onlineStatmentLink).click();
		cy.get(selectors.accauntDropdownBox).select(accauntType);
	}
	recentStatement() {
		cy.get(selectors.recentStatements2012).click();
	}
	statementFile() {
		cy.get(selectors.statementFile).should('contain', statementExpect);
		//cy.get(selectors.statementFile).click();
	}
}

export default OnlineStatmentPage;
