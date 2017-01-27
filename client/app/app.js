'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
// import ngCookies from 'angular-cookies';
// import ngResource from 'angular-resource';
// import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
// import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import calculator from './components/calculator/calculator.component';
import results from './components/results/results.component';
import './app.less';

angular.module('compareApp', [uiRouter, navbar,
  main, constants, util, calculator, results
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['compareApp'], {
      strictDi: true
    });
  });
