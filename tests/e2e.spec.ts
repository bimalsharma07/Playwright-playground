import {test, expect} from '@playwright/test';

test('login flow', async ({page}) => {

  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#login2').click();

  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name:  /Log in/}).click();

  await expect(page.getByText('Welcome pavanol')).toBeVisible();

  await page.locator('#cartur').click();

  await page.getByRole('button', { name:  /Place Order/}).click();

  await page.locator('#name').fill('Tester');
  await page.locator('#country').fill('country');
  await page.locator('#city').fill('city');
  await page.locator('#card').fill('1234567890123456');
  await page.locator('#month').fill('12');
  await page.locator('#year').fill('2025');
  await page.getByRole('button', { name:  /Purchase/}).click();
  await expect(page.getByText('Thank you for your purchase!')).toBeVisible();


  await page.waitForTimeout(4000);




})