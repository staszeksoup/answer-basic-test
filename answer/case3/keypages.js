

const {Browser, By, Key, actions, until} = require("selenium-webdriver");
const url = 'http://the-internet.herokuapp.com/';


class KeyPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            keyPress: By.linkText('Key Presses'),
            inText: By.id('target'),
            outText: By.id('result'),
            
        }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        let link = await this.driver.findElement(this.locators.keyPress)
            await link.click()
    }

    
    async type(char){
        await this.driver.findElement(this.locators.inText).clear()
        await this.driver.findElement(this.locators.inText)
            .sendKeys(char)
        
    }

    async press(btn){
        const actions = this.driver.actions({bridge: true});
        await this.driver.findElement(this.locators.inText).clear()
        await this.driver
            .actions()
            .sendKeys(btn)
            .perform();
        
    }

  
};

module.exports = KeyPage;