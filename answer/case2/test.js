const {Broswer, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const ScrollPage = require('../case2/pages.js');
require("chromedriver");

suite(function(env) {
    describe('Scrolls down and up', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new ScrollPage(driver);
            await page.open()
        });

        it('clicks Form infinte scroll', async function(){
            await page.clickLink()
        });  


        it('adds a paragraph', async function(){

            await driver.findElement(page.locators.nextScroll);        
            let paragraphs = await driver.findElements(page.locators.addedScroll);
            let oldPCount = paragraphs.length;
            console.log(oldPCount);
            await page.scroll();
            
        
            paragraphs = await driver.findElements(page.locators.addedScroll);
            let newPCount = paragraphs.length;
            console.log(newPCount);
            assert(newPCount > oldPCount);
            await page.titleScroll();
           

        });


 
         it('adds another paragraph', async function(){
        
             let paragraphs = await driver.findElements(page.locators.addedScroll);
             let oldPCount = paragraphs.length;
             console.log(oldPCount);
             await page.scroll();
             
         
             paragraphs = await driver.findElements(page.locators.addedScroll);
             let newPCount = paragraphs.length;
             console.log(newPCount);
             assert(newPCount > oldPCount);
             await page.titleScroll();
 
         })
       
      
        it('finds title', async function(){
            await page.titleScroll();
            let heading = await driver.findElement(page.locators.title);
            let text = await heading.getText();
            assert(text.includes("Infinite Scroll"));

        });
            
 





        after(async function(){
            driver.quit();
        });
    });
});
