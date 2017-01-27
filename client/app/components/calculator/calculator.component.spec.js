'use strict';

describe('Component: calculator', function() {
  // load the component's module
  beforeEach(module('compareApp.calculator'));

  var calculatorComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    calculatorComponent = $componentController('calculator', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
