const {Broswer, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const KeyPage = require('./keypages.js');
require("chromedriver");

suite(function(env) {
    describe('Types and checks Keys', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new KeyPage(driver);
            await page.open()
        });

        it('clicks Key Presses on Menu', async function(){
            await page.clickLink()
        });  

        it('types "T" and checks',async function(){
            await page.type('T')
            let result = await driver.findElement(page.locators.outText)
                .getText();
            assert(result.includes('T'))
        });

        it('types "5" and checks',async function(){
            await page.type('5')
            let result = await driver.findElement(page.locators.outText)
                .getText();
            assert(result.includes('5'))
        });

        it('presses "shift" and checks', async function(){
            await page.press(Key.SHIFT);
            let result = await driver.findElement(page.locators.outText)
                .getText();
            assert(result.includes('SHIFT'))
        })

        it('presses "enter" and checks', async function(){
            await page.press(Key.ENTER);
            let result = await driver.findElement(page.locators.outText)
                .getText();
            assert(result.includes('ENTER'))
        })


        after(async function(){
            driver.quit();
        });
    });
});
