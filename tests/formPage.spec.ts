import { test, expect } from '../fixtures/fixtures.ts';
import userData from '../test-data/user-data.json';

test('Form Page Test', async ({ page, formPage }) => {

   await formPage.goto();
   await formPage.navigateToFormPage();
   await formPage.fillForm(userData.userdetails.firstName, userData.userdetails.lastName, userData.userdetails.email, userData.userdetails.phoneNumber, userData.userdetails.message);
   await expect(formPage.page.getByText('Thank you for your submission.')).toBeVisible();
});