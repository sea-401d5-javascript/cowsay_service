const angular = require('angular');
const app = angular.module('CowApp', []);

require('./cows')(app);
require('./services')(app);
