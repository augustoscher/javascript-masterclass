let condition = {
  description: 'as',
  category: 'as',
  target: 'as',
  target_options: [{ name: 'as'}],
  expression_type: [],
  period_operator: 'as',
  operator: 'as',
  values: [],
  values_labels: [],
  frequency_operator: 'as',
  frequency_values: [],
  period_values: [],
  expanded: false
};

let group = {
  connector: 'must',
  conditions: [condition, condition]
}

let segmentation = {
  connector: 'must',
  groups: [group, group]
};

const segmentationAdapter = segmentation => ({
  ...segmentation,
  groups: segmentation.groups.map(group => {
    return {
      ...group,
      conditions: group.conditions.map(condition => {
        return {
          ...condition,
          target_options: undefined,
          expanded: undefined
        };
      })
    };
  })
});

console.log(JSON.stringify(segmentation));
console.log()
console.log(JSON.stringify(segmentationAdapter(segmentation)));




