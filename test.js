const allSectionsExperiments = [
  {
    experimentName: 'homepage',
    controlKey: 'default',
    experimentGroup: 'serp',
    filter: ({ req }) => req.cookies.from_search_homepage === 'true',
  },
  {
    experimentName: 'motion-enabled-on-general-search',
    controlKey: 'disabled',
    experimentGroup: 'serp',
    filter: () => true,
  },
  {
    experimentName: 'didyoumean-tests',
    controlKey: 'disabled',
    experimentGroup: 'serp',
    filter: () => true,
    helperBuild: {
      name: 'isDidYouMeanEnabled',
      check: (alternative) => alternative === 'enabled',
    },
  },
];

const experimentsPerSection = {
  general: [...allSectionsExperiments],
  jurisprudencia: [...allSectionsExperiments],
  legislacao: [
    {
      experimentName: 'legis-topic-redirect',
      controlKey: 'no-redirect',
      experimentGroup: 'serp',
      filter: ({ req }) => req.query.e === 'legis-redirect',
    },
    ...allSectionsExperiments,
  ],
};

const activeExperiments = Object.keys(experimentsPerSection).flatMap(
  (section) => experimentsPerSection[section]
).filter((experiment) => experiment.filter({ req: { cookies: {}, query: {} } }));


const buildExperimentHelper = ({ experiment, alternative, participating }) => {
  return activeExperiments.reduce((activeHelpers, experimentKey) => {
    const { experimentName, helperBuild = null } = experimentKey;
    if (helperBuild) {
      return {
        [helperBuild.name]:
          participating && experimentName === experiment && helperBuild.check(alternative),
        ...activeHelpers,
      };
    }
    return activeHelpers;
  }, {});
};

const { experimentName, controlKey } = activeExperiments[0];

const r = buildExperimentHelper({ experiment: experimentName, alternative: controlKey, participating: true })
console.log(r)

