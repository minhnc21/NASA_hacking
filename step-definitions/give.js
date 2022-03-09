const {Given} = require ('@cucumber/cucumber');
const loadPage = require('../step-actions/loadPage');

Given (/^load login page$/, loadPage);
