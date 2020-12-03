const puppeteer = require('puppeteer');

(async () => {  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:5000/cv/`, {waitUntil: 'networkidle2'});
  await page.pdf({path: 'cv.pdf', format: 'A4', printBackground: true, margin: { bottom: '5px', right: '5px'}});

  await browser.close();
})();