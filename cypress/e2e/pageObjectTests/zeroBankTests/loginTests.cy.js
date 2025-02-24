/// <reference types="cypress" />

import LoginPage from '../../../pageObjects/ZeroBank/loginPage';
import MainPage from '../../../pageObjects/ZeroBank/mainPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Bank test', () => {
	beforeEach(() => {
		loginPage.goToURL();
	});

	it('Check first test ', () => {
		loginPage.verifyIfBasicElementsAreDisplayed();
	});

	it('Login into bank account, positive', () => {
		loginPage.fillCredentialsData('username', 'password');
		loginPage.clickSingInButton();
		mainPage.verifyIfBasicElementsAreDisplayed();
	});

	it('Login into bank account, negative', () => {
		loginPage.fillCredentialsData('usernameWRONG', 'passwordWRONG');
		loginPage.clickSingInButton();
		loginPage.verifyLoginPasswordWrongAlert();
	});
});
