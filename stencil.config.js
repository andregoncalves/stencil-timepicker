exports.config = {
  namespace: 'timepicker',
  generateDistribution: true,
  bundles: [
    { components: ['st-timepicker'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
