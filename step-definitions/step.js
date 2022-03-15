
const { Given, When, Then } = require('@cucumber/cucumber')

// describe('hdvn page', () => {
// it('should have the right title', async () => {

Given('The user open the website then click on the login button', async () => {

    await browser.url('https://hdvietnam.com/forums/fshare-vn.33/')

    let elem = await $('#loginBarHandle');
    await elem.isDisplayed();
    await elem.click();

});

When(/^Fill on "(.*)" and "(.*)$/, async (username, password) => {
    await $(`#LoginControl`).setValue(username)
    await $(`#ctrl_password`).setValue(password);
    return true;
});

Then('Click on login and verify the page', async () => {
    await $(`#loginBar .button.primary`).click();
    const chatDropdown = await $("a[href='https://hdvietnam.com/taigachat/'");
    await chatDropdown.waitForExist();
    await expect(chatDropdown).toHaveText('Chat')

});