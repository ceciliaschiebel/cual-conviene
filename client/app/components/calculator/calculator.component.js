'use strict';
const angular = require('angular');
import {compareUnitValue} from './priceCalcs';

export class calculatorComponent {
  /*@ngInject*/
  constructor() {
    this.prodA = {
      price: '',
      amount: '',
    };

    this.prodB = {
      price: '',
      amount: '',
    };

    this.emptyInput = false;
    this.showBtnResults = false;
  }

  validateForm(form) {
    this.showResults = false;
    this.emptyInput = false;
    this.showBtnResults = false;

    angular.forEach(form.$error.required, function(field) {
      if(field.$setSubmitted) {
        angular.forEach(field.$error.required, function(theField) {
          theField.$setDirty();
        });
      } else {
        field.$setDirty();
      }
    });

    if(form.$valid) {
      // write results
      this.results = compareUnitValue(this.prodA, this.prodB, this.results);
      this.showBtnResults = true;
    } else {
      this.emptyInput = true;
    }
  }

  seeResults() {
    this.showResults = true;
  }

  clearForm(form) {
    this.prodA = {
      price: '',
      amount: '',
    };

    this.prodB = {
      price: '',
      amount: '',
    };

    this.emptyInput = false;
    // from main
    this.results = {
      cheaper: {
        name: '',
        unitValue: ''
      },
      expensive: {
        name: '',
        unitValue: ''
      },
      stats: {
        percentageSave: '',
        unitsSave: ''
      },
    };

    this.showBtnResults = false;
    this.showResults = false;

    form.$setPristine();
  }
}

export default angular.module('compareApp.calculator', [])
  .component('calculator', {
    template: require('./calculator.html'),
    bindings: { showResults: '=', results: '=' },
    controller: calculatorComponent
  })
  .name;
