/*var phantom = require('phantom');

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open("google.com").then(function(status) {
            page.render('curriculum.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});*/
'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('index.html');

  await page.pdf({
    path: 'example.pdf',
  });

  await browser.close();
})();