const {Then} = require ('@cucumber/cucumber');
const clickBtn = require('../step-actions/clickBtn');

Then (/^click "(.*)" button on "(.*)" page$/, clickBtn);
