import {expect, type Locator, type Page} from '@playwright/test';
import userCredentials from '../test-data/user-data.json';
import dotenv from 'dotenv';
dotenv.config();

export class Loginpage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('email-input');
        this.passwordInput = page.getByTestId('password-input');
        this.loginButton = page.getByRole('button', {name: 'Sign In'});
        this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    }

    async goto() {
        await this.page.goto('/login');
    }

    async loginAsAdmin() {
        await this.emailInput.fill(process.env.ADMIN_EMAIL!);
        await this.passwordInput.fill(process.env.ADMIN_PASSWORD!);
        await this.loginButton.click();
    }

    // async navigateToDashboard() {
    //     await this.dashboardLink.click();
    //     await expect(this.page).toHaveURL('/dashboard');
    //     await this.page.waitForLoadState('networkidle');
    // }
}