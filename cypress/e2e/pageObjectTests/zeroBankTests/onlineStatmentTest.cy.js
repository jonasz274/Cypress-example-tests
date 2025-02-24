/// <reference types="cypress" />

import LoginPage from '../../../pageObjects/ZeroBank/loginPage';
import MainPage from '../../../pageObjects/ZeroBank/mainPage';
import OnlineStatmentPage from '../../../pageObjects/ZeroBank/OnlineStatmentPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();
const onlineStatmentPage = new OnlineStatmentPage();

describe('Bank test', () => {
	beforeEach(() => {
		loginPage.goToURL();
		loginPage.verifyIfBasicElementsAreDisplayed();
	});

	it('Login into bank account, online statment ', () => {
		loginPage.fillCredentialsData('username', 'password');
		loginPage.clickSingInButton();

		onlineStatmentPage.verifyOnlineStatment('Credit Card');
		onlineStatmentPage.recentStatement();
		onlineStatmentPage.statementFile();
	});
});
