import { test, expect } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Should stack editor and preview on mobile screens", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.setViewportSize({ width: 375, height: 667 }); 

    const editor = await page.locator("textarea");
    const formPreview = await page.locator("form");

    expect(await editor.isVisible()).toBeTruthy();
    expect(await formPreview.isVisible()).toBeTruthy();
  });
});
