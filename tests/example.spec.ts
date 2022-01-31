import { test, expect } from '@playwright/test';

test('Make Test Using Codegen', async ({ page }) => {
  // Go to https://syncross.vercel.app/
  await page.goto('https://syncross.vercel.app/');

  // Click text=About
  await page.click('text=About');
  await expect(page).toHaveURL('https://syncross.vercel.app/About');

  // Click text=My Works
  await page.click('text=My Works');
  await expect(page).toHaveURL('https://syncross.vercel.app/Work');

  // Click text=SynCROSS
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=SynCROSS'),
  ]);

  // Click svg
  await page1.click('svg');
  await expect(page1).toHaveURL('https://github.com/');

  // Close page
  await page1.close();
});

test.only(`Test 'only' Annotations`, async ({ page }) => {
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
});
