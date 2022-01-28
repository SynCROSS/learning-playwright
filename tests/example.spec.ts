import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Pause on the following line.
  await page.pause();

  await page.goto('https://syncross.vercel.app/');
  await expect(page).toHaveTitle('SynCROSS');

  const text = 'My Works';
  // const text = 'My Works';

  await page.locator(`text=${text}`).first().click();
  await expect(page).toHaveTitle('My Works');
});
