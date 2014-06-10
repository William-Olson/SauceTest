

describe('Example test 1', function(){
  it('(should always pass)', function(){
    expect(true).toBe(true);
  });
});

  
//getIpAddress() is a function that will return your host machines current ipv4 (192.168.x.x) address
var os = require('os'); 
    function getIpAddress() {
      var ipAddress = null;
      var ifaces = os.networkInterfaces();

      function processDetails(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1' && !ipAddress) {
          ipAddress = details.address;
        }
      }

      for (var dev in ifaces) {
        ifaces[dev].forEach(processDetails);
      }
      return ipAddress;
    }


 
// Custom locator.
by.addLocator('buttonTextSimple', function(buttonText, opt_parentElement) {
  // This function will be serialized as a string and will execute in the
  // browser. The first argument is the text for the button. The second
  // argument is the parent element, if any.
  var using = opt_parentElement || document,
  buttons = using.querySelectorAll('button');

  // Return an array of buttons with the text.
  return Array.prototype.filter.call(buttons, function(button) {
    return button.textContent === buttonText || button.textContent === buttonText + " " 
        || button.textContent === " " buttonText || button.textContent === " " + buttonText + " ";
  });
});





describe('\nMy Angular Demo1', function() {
  it('should greet the user by input name', function() { 

    //browser.get('http://' + getIpAddress() + ':7777/angularDemo1/');   
    //browser.get('http://localhost:3333/angularDemo1/'); //use localhost instead
    browser.get('http://uweb.txstate.edu/~wko4/code/angular/angularDemo1/');
    element(by.model('name')).sendKeys('William'); 
    var greeting = element(by.binding('name'));

    expect(greeting.getText()).toEqual('William');
  });

  describe('My List', function() {
    var itemList;
    //get items from list
    itemList = element.all(by.repeater('item in listItems'));

    it('should contain all 10 items', function() {
      	expect(itemList.count()).toEqual(10);
    });

    it('should have "1). First Item" as the first element in the list', function() {  
      	expect(itemList.get(0).getText()).toEqual('1). FIRST ITEM');  
    });

  });
  describe('the Click me Button', function (){
  	it('should change the count label to 3 when clicked 3 times', function (){
  		var clickMeBttn = element(by.css('button'));
  		browser.debugger(); //leaves a breakpoint-like halting spot in debug mode
 		for (var i = 0; i < 3; i++) 
      		clickMeBttn.click();  
    	var countLabel = element(by.binding('count'));
    	expect(countLabel.getText()).toEqual('Count: 3'); 
  	})
  });
  describe('the Clear Button', function (){
    it('should reset the count to zero', function (){ 
      element(by.buttonTextSimple('Clear')).click(); // Usign the custom locator.
      var countLabel = element(by.binding('count'));
      expect(countLabel.getText()).toEqual('Count: 0'); 
    })
  })
});



