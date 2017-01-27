var _getPercentageSave = function(lowerPrice, higherPrice) {
  let percentage = ((higherPrice - lowerPrice) / higherPrice) * 100;
  return percentage;
};

var _getUnitsSave = function(cheaperProd, expensiveProd) {
  let units = cheaperProd.amount - (cheaperProd.price / expensiveProd.unitValue);
  return units;
};

export function compareUnitValue(prodA, prodB, resultsObj) {
  const unitValueA = prodA.price / prodA.amount;
  const unitValueB = prodB.price / prodB.amount;

  let cheaper = '';

  if(unitValueA < unitValueB) {
    resultsObj.cheaper.name = 'A';
    resultsObj.cheaper.unitValue = unitValueA;
    resultsObj.expensive.name = 'B';
    resultsObj.expensive.unitValue = unitValueB;
    cheaper = prodA;
  } else if(unitValueA > unitValueB) {
    resultsObj.cheaper.name = 'B';
    resultsObj.cheaper.unitValue = unitValueB;
    resultsObj.expensive.name = 'A';
    resultsObj.expensive.unitValue = unitValueA;
    cheaper = prodB;
  } else if(unitValueA == unitValueB) {
    resultsObj.cheaper.name = 'equal';
    resultsObj.cheaper.unitValue = unitValueA;
    resultsObj.expensive.name = 'equal';
    resultsObj.expensive.unitValue = unitValueB;
    cheaper = prodA;
  }

  resultsObj.stats.percentageSave = _getPercentageSave(resultsObj.cheaper.unitValue, resultsObj.expensive.unitValue);
  resultsObj.stats.unitsSave = _getUnitsSave(cheaper, resultsObj.expensive);

  return resultsObj;
}
