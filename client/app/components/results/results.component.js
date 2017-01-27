'use strict';
const angular = require('angular');

export class resultsComponent {
}

export default angular.module('compareApp.results', [])
  .component('results', {
    template: require('./results.html'),
    bindings: { showResults: '<', results: '<' },
    controller: resultsComponent
  })
  .name;
