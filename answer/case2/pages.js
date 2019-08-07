

const {Browser, By, Key, Actions, until} = require("selenium-webdriver");
const url = 'http://the-internet.herokuapp.com/';


class ScrollPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            infiniteScroll:By.linkText('Infinite Scroll'),
            addedScroll: By.css('.jscroll-added'),
            nextScroll: By.css(".jscroll-next-parent"),
            loadingScroll: By.css('.jscroll-loading'),
            lastScroll: By.css('.jscroll-inner div:last-child'),
           title: By.css('h3'),
        }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        let link = await this.driver.findElement(this.locators.infiniteScroll)
            await link.click()
    }

    
    async scroll(){
      

        let scroller = await this.driver.findElement(this.locators.lastScroll);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", scroller);
        await this.driver.wait(until.elementLocated(By.css('.jscroll-inner div:last-child:not(.jscroll-loading)')));;
    
    }

    async titleScroll(){
        let scroller = await this.driver.findElement(this.locators.title);
        await this.driver.executeScript("arguments[0].scrollIntoView(false);", scroller);
    }
        

  
};

module.exports = ScrollPage;