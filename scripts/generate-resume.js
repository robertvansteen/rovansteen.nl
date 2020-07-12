const puppeteer = require("puppeteer");
const url = "http://localhost:3000/resume";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 2480, height: 3508 });
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.pdf({
    path: "public/resume.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  await browser.close();
})();
