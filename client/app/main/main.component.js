import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  constructor() {
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

    this.showResults = false;
  }

  changeShowResults() {
    this.showResults = false;
  }
}

export default angular.module('compareApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
