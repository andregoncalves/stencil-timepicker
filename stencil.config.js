exports.config = {
  namespace: 'timepicker',
  outputTargets: [
    {
      type: 'dist',
      serviceWorker: false
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
  httpPort: '3000'
}