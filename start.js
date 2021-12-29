'use strict';

const puppeteer = require('puppeteer');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 80 || 5000;

app.use(express.static("./static/"));
app.listen(port, () => console.log('Listening on port ' + port));


(async () => {
    var type = -1;
    var url = "http://google.com";
    switch (type) {
        case 0:
            var phantom = require('phantom');

            phantom.create().then(function (ph) {
                ph.createPage().then(function (page) {
                    page.open(url).then(function (status) {
                        page.render('curriculum.pdf').then(function () {
                            console.log('Page Rendered');
                            ph.exit();
                        });
                    });
                });
            });
            break;
        case 1:
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.goto(url);

            await page.pdf({
                path: 'example.pdf',
            });

            await browser.close();
            break;
        default:
    }
})();