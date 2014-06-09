 
 
exports.config = {


  sauceUser: $SAUCE_USERNAME,
  sauceKey: $SAUCE_ACCESS_KEY,
  //seleniumAddress: 'http://localhost:4445/wd/hub',
 
  chromeOnly: false,    
  splitTestsBetweenCapabilities: true,  
  multiCapabilities: [{
    'browserName': 'firefox',
    'platform': 'MAC',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'maxInstances': 1
  }, {
    'browserName': 'chrome',
    'platform': 'LINUX',
    'version': 33,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'maxInstances': 1
  },{ 
    'browserName': 'internet explorer',
    'version': 11,
    'platform': 'ANY',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'maxInstances': 1
  },{
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': 10,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'maxInstances': 1
  }],


  // Spec patterns are relative to the current working directly where
  // protractor is called.
  specs: ['./specs/*pec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
};