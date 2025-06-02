
const { test, expect } = require('@playwright/test');

test('Login to Facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  const acceptCookies = page.locator('text=Allow all cookies');
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }

  // Fill in the email and password
  await page.fill('input[name="email"]', 'example123@gmail.com');
  await page.fill('input[name="pass"]', 'Sanket123');

  // Click login
  await page.click('button[name="login"]');

  await page.waitForTimeout(5000); 
  // Assertion or check
  expect(page.url()).not.toContain('login');

  // Optional: Take screenshot
  await page.screenshot({ path: 'facebook-login.png' });
});
