import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://syncross.vercel.app/');
  await expect(page).toHaveTitle('SynCROSS');

  await page.locator('text=My Works').first().click();
  await expect(page).toHaveTitle('My Works');
});
