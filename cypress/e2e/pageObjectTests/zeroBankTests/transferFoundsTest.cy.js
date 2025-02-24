/// <reference types="cypress" />

import LoginPage from '../../../pageObjects/ZeroBank/loginPage';
import MainPage from '../../../pageObjects/ZeroBank/mainPage';
import TransferFoundsPage from '../../../pageObjects/ZeroBank/transferFoundsPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();
const transferFoundsPage = new TransferFoundsPage();

describe('Bank test', () => {
	beforeEach(() => {
		loginPage.goToURL();
		loginPage.verifyIfBasicElementsAreDisplayed();
		loginPage.fillCredentialsData('username', 'password');
		loginPage.clickSingInButton();
	});

	it('Transfer Founds test ', () => {
		//Arrange
		const amount = '654';

		//Act
		transferFoundsPage.clickTransferFounds();
		transferFoundsPage.selectFromAccount(2);
		transferFoundsPage.selectToAccount(3);
		transferFoundsPage.amount(amount);
		transferFoundsPage.description('Sample transfer description');
		transferFoundsPage.clickContinueBtn();
		transferFoundsPage.clickSunmitnueBtn();
		transferFoundsPage.messageVerification();
		transferFoundsPage.amountVerification(amount);
	});
});
