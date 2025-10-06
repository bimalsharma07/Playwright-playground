import {expect , Locator , Page} from '@playwright/test';
import userData from '../test-data/user-data.json';

export class FormPage {
    readonly page: Page;
    readonly formOption : Locator;
    readonly firstNameInput : Locator ;
    readonly lastNameInput : Locator ;
    readonly emailInput : Locator ; 
    readonly inputPhoneNumber : Locator ; 
    readonly selectdropDown : Locator;
    readonly selectCountry : Locator;
    readonly selectGender : Locator;
    readonly messageInput : Locator ;
    readonly checkBox : Locator; 
    readonly submitButton : Locator; 


    constructor(page: Page) {
        this.page = page;
        this.formOption = page.getByRole('link', { name: 'Form' });
        this.firstNameInput = page.getByTestId('first-name-input')
        this.lastNameInput = page.getByTestId('last-name-input');
        this.emailInput = page.getByTestId('email-input');
        this.inputPhoneNumber = page.getByTestId('phone-input');
        this.selectdropDown = page.getByTestId('country-select-trigger');
        this.selectCountry = page.getByTestId('country-uk');
        this.selectGender = page.getByTestId('gender-male');
        this.messageInput = page.getByTestId('message-textarea');
        this.checkBox = page.getByTestId('terms-checkbox');
        this.submitButton = page.getByTestId('form-submit-button');
    }

    async goto() {
        await this.page.goto('/dashboard');
    }
    async navigateToFormPage() {
        await this.formOption.click();
    }

    async fillForm(firstName: string, lastName: string, email: string, phoneNumber: number, message: string) {
        await this.firstNameInput.fill(userData.userdetails.firstName);
        await this.lastNameInput.fill(userData.userdetails.lastName);
        await this.emailInput.fill(userData.userdetails.email);
        await this.inputPhoneNumber.fill(userData.userdetails.phoneNumber.toString());
        await this.selectdropDown.click();
        await this.selectCountry.click();
        await this.selectGender.check();
        await this.messageInput.fill(userData.userdetails.message);
        await this.checkBox.check();
        await this.submitButton.click();
    }
}
