import { test, expect } from '@playwright/test';

test('Make Test Using Codegen', async ({ page, browserName }) => {
  // skip(condition: boolean, description?: string)
  test.skip(browserName === 'firefox', 'Still working on it');

  // Go to https://syncross.vercel.app/
  await page.goto('https://syncross.vercel.app/');

  // Click text=About
  await page.click('text=About');
  await expect(page).toHaveURL('https://syncross.vercel.app/About');

  // Click text=My Works
  await page.click('text=My Works');
  await expect(page).toHaveURL('https://syncross.vercel.app/Work');

  // Click text=Home
  await page.click('text=Home');
  await expect(page).toHaveURL('https://syncross.vercel.app/');

  // Close page
  await page.close();
});
