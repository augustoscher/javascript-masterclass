const target_options = [
  {
    label: 'no evento',
    value: 'on_event',
    expression_type: [
      'EVENT'
    ]
  },
  {
    label: 'a partir da origem',
    value: 'from_traffic_source',
    expression_type: [
      'SOURCE'
    ]
  }
];

let condition = {
  description: 'conversion',
  category: 'not_converted',
  target: 'on_event',
  target_options,
  expression_type: ['EVENT'],
  period_operator: '',
  operator: '',
  values: [],
  values_labels: [],
  frequency_operator: '',
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




