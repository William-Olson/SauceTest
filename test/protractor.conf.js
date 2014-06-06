 
 
exports.config = {

 
  chromeOnly: false,    
  splitTestsBetweenCapabilities: true,  
  multiCapabilities: [{
    'browserName': 'firefox',
    'platform': 'WINDOWS',
    'maxInstances': 1, 
  }, {
    'browserName': 'chrome',
    'platform': 'LINUX',
    'maxInstances': 1
  },{ 
    'browserName': 'internet explorer',
    'version': 11,
    'platform': 'WINDOWS',
    'maxInstances': 1, 
  },

    'browserName': 'safari',
    'platform': 'MAC',
    'maxInstances': 1, 
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