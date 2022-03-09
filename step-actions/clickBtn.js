module.exports = async (field, formName) => {
  console.log (`field: ${field}, formName: ${formName}`);
  const selectorObj = require (`../selectors/${formName}`);
  const {selector} = selectorObj[field];
  console.log (`selector: ${selector}`);
  const ele = await $ (selector);
  await ele.click ();
  await browser.pause (1000);
};
