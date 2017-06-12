module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactMailchimpSubscribe',
      externals: {
        react: 'React'
      }
    }
  }
}
