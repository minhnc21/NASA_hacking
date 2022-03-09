require ('dotenv').config ();
const {expect} = require ('chai');

module.exports = async () => {
  await browser.url (process.env.LOGIN_PAGE);
  await browser.pause (1000);
  const url = await browser.getUrl ();
  expect (url).to.equal (process.env.LOGIN_PAGE);
};
