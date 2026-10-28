import { test, expect } from "@playwright/test";

test("homepage displays the main heading and migration options", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Move your workspace/i }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Start a migration" }).first(),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "See what moves" }),
  ).toBeVisible();
});

test("Start a migration navigates to the migration page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Start a migration" }).first().click();

  await expect(page).toHaveURL(/\/migrate$/);
});
