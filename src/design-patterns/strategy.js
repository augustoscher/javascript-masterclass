// https://betterprogramming.pub/design-patterns-using-the-strategy-pattern-in-javascript-3c12af58fd8a
// When to Use the Strategy Pattern
// 1. When you need to use several algorithms with different variations. You need create a concrete class to implement your algorithm (which can consist of a or some functions).
// 2. When there are conditional statements around several related algorithms.
// 3. When most of your classes have related behaviours.

class LP {
  constructor({ name, experimentProvider }){
    this.name = name;
    this.experimentProvider = experimentProvider
  }
}

class ArgosExperimentProvider {
  create(landingPage) {
    console.log(`create experiment with Argos for LP: ${landingPage.name}.`)
  }
}

class SixpackExperimentProvider {
  create(landingPage) {
    console.log(`create experiment with Sixpack for LP: ${landingPage.name}.`)
  }
}

const config = {
  'ARGOS': new ArgosExperimentProvider(),
  'SIXPACK': new SixpackExperimentProvider(),
}

class ExperimentProviderHandler {
  constructor(landingPage) {
    this.landingPage = landingPage
  }

  buildExperiment(experimentProvider) {
    experimentProvider.create(this.landingPage)
  }
}

const lp1 = new LP({ name: 'A', experimentProvider: 'ARGOS'});
const lp2 = new LP({ name: 'A', experimentProvider: 'SIXPACK'});

const experimentHandler = new ExperimentProviderHandler(lp1);
experimentHandler.buildExperiment(config[lp1.experimentProvider])