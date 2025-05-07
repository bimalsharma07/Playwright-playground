import {test, expect} from '@playwright/test';

test('login flow', async ({page}) => {

  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#login2').click();

  await page.waitForTimeout(4000);
})