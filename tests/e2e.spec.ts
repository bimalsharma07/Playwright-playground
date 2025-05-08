import {test, expect} from '@playwright/test';

test('login flow', async ({page}) => {

  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#login2').click();

  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name:  /Log in/}).click();

  await expect(page.getByText('Welcome pavanol')).toBeVisible();

  await page.waitForTimeout(4000);




})