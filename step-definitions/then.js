const {When} = require ('@cucumber/cucumber');
const setTextField = require ('../step-actions/setTextField');

When (/^set "(.*)" textField on "(.*)" is "(.*)"$/, setTextField);
