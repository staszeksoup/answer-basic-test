

const {Browser, By, Key, until} = require("selenium-webdriver");
const url = 'http://the-internet.herokuapp.com/';


class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            formAuthentication:By.xpath('//*[@id="content"]/ul/li[21]/a'),
            username: By.name("username"),
            password: By.id("password"),
            login: By.className("radius"),
            message: By.id("flash")
           
        }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        let link = await this.driver.findElement(this.locators.formAuthentication)
            await link.click()
    }
    async typeUserName(user){
        await this.driver.findElement(this.locators.username)
            .sendKeys(user)
    }
    async typePassword(pass){
        await this.driver.findElement(this.locators.password)
            .sendKeys(pass)
    }


    async loginClick(){
        const button = await this.driver.findElement(this.locators.login);
        await button.click();
    }

    async retrieveMessage(){
        let outMessage = await this.driver.findElement(this.locators.message)
        await outMessage.getText()
        
    }

  
}

module.exports = LoginPage;