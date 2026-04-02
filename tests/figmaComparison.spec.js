const { test, expect } = require('@playwright/test');

test('Compare website with baseline', async ({ page }) => {
  
  await page.goto('file:///D:/Automation/PlaywrightAutomation/sample.html');

  await page.waitForLoadState('networkidle');
await page.locator('.dynamic-banner').evaluate(el => el.style.display = 'none'); //Hide/remove elements before screenshot:
  // Playwright handles screenshot + comparison
  await expect(page).toHaveScreenshot();
});  