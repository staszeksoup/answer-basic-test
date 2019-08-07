const {Broswer, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const LoginPage = require('../pages/case1.js');
require("chromedriver")

suite(function(env) {
    describe('Attempt Login', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new LoginPage(driver);
            await page.open()
        });

        it('clicks Form Authentication', async function(){
            await page.clickLink()
        });

        it('attempts correct username and wrong password', async function(){
            await page.typeUserName('tomsmith');
            await page.typePassword('wrongpassword');
            await page.loginClick();
        });

        it('attempts incorrect username and right password', async function(){
            await page.typeUserName('wrongname');
            await page.typePassword('SuperSecretPassword!');
            await page.loginClick();
            
        });

        it('attempts correct username and right password', async function(){
            await page.typeUserName('tomsmith');
            await page.typePassword('SuperSecretPassword!');
            await page.loginClick();
            
        })





        after(async function(){
         //   driver.quit();
        });
    });
});
