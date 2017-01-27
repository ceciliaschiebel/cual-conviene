'use strict';

describe('Component: results', function() {
  // load the component's module
  beforeEach(module('compareApp.results'));

  var resultsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    resultsComponent = $componentController('results', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
