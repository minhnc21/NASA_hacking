module.exports = async (field, formName, value) => {
  console.log (`field: ${field}, formName: ${formName}, value: ${value}`);
  const selectorObj = require (`../selectors/${formName}`);
  const {selector} = selectorObj[field];
  console.log (`selector: ${selector}`);
  const ele = await $ (selector);
  await ele.setValue (value);
  await browser.pause (1000);
};
