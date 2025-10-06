import {test as setup, expect } from '@playwright/test';
import { Loginpage } from '../pages/loginpage';

const authFile = './admin.json';

setup ('login as admin', async ({page}) => {
    const loginPage = new Loginpage(page);
    await loginPage.goto();
    await loginPage.loginAsAdmin();
    await expect(loginPage.page).toHaveURL('/dashboard');


    await page.context().storageState({ path : authFile});
});