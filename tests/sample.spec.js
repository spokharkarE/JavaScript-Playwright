import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.pause();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
});
