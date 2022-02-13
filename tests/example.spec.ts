import { test, expect } from '@playwright/test';

// * If 'npx playwright test --grep @tag' Executed, Only Tagged Test Be Executed
// * Also 'npx playwright test --grep-invert @tag' Executed, Only Tagged Test Be Skipped

test('Navigation Test @nav-test', async ({ page }) => {
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

test('My Works Button Test @my-works-btn-test', async ({ page }) => {
  // Go to https://syncross.vercel.app/
  await page.goto('https://syncross.vercel.app/');

  // Click text=Frontend DeveloperSynCROSS, The Knowledge ExplorerMy Works >> path
  await page.click(
    'text=Frontend DeveloperSynCROSS, The Knowledge ExplorerMy Works >> path',
  );
  await expect(page).toHaveURL('https://syncross.vercel.app/Work');

  // Close page
  await page.close();
});
