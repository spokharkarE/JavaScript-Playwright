// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',              // Folder where tests are located
  timeout: 10 * 1000,              // Timeout per test (30 seconds)
  expect: {
    timeout: 3000,                 // Timeout for expect assertions
  },
  fullyParallel: true,             // Run tests in parallel
  retries: 1,                      // Retry failing tests once
  reporter: [['list'], ['html']],  // Reporters: CLI list + HTML report
  use: {
    headless: true,                // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,              // No timeout for actions (click, fill, etc.)
    trace: 'on-first-retry',       // Record trace only on first retry
    screenshot: 'only-on-failure',// Screenshots only on failure
    video: 'retain-on-failure',   // Save video only when test fails
    baseURL: 'https://example.com', // Optional base URL for tests
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});
