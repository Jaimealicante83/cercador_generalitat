const playwright = require("playwright");

(async () => {
  const browser = await playwright["chromium"].launch({
    headless: false,
    slowMo: 50,
  });

  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto("https://web.gencat.cat/es/inici/index.html");
  await page.click("text=Agenda cultural");

  context.on("page", async (page) => {
    await page.waitForLoadState();
    await page.press("#cerca-button", "Enter");
  });
})();
