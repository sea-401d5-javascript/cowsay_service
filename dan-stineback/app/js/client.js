'use strict';
const angular = require('angular');
const app = angular.module('CowApp', []);

require('./services')(app);
require('./cows')(app);
