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
  'ARGOS': ArgosExperimentProvider,
  'SIXPACK': SixpackExperimentProvider,
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
const lp2 = new LP({ name: 'B', experimentProvider: 'SIXPACK'});

const experimentHandler = new ExperimentProviderHandler(lp1);
experimentHandler.buildExperiment(new config[lp1.experimentProvider]())