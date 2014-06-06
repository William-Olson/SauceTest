

describe('Example test 1', function(){
  it('(should always pass)', function(){
    expect(true).toBe(true);
  });
});

/*describe('Example test 2', function(){
  it('(should always fail)', function(){
    expect(false).toBe(true);
  });
});
*/




/*
//getIpAddress() is a function that will return your host machines current ipv4 (local) address
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



describe('\nExigo Login', function() {
  it('should append @exigo.com to user input field when missing when leaving focus', function() { 
    browser.get('192.168.100.10');  
    element(by.model('user.username')).sendKeys('rirvin');
    element(by.model('user.password')).sendKeys('password');
    var inputUser = element(by.binding('user.username'));

    expect(inputUser.getText()).toEqual('rirvin@exigo.com');
  });
  it('should reject login if password is incorrect', function (){
    element(by.css("btn-primary"))).click();

    expect(element(by.model('user.password')).isPresent()).toBe(true);
  }); 
});
*/





/*
describe('\nMy Angular Demo1', function() {
  it('should greet the user by input name', function() {
    browser.get('http://192.168.1.11:3333/code/angular/angularDemo1');  // static ip's work on remote vm's
    //browser.get('http://' + getIpAddress() + ':3333/code/angular/angularDemo1/');  // works same as above line
    //browser.get('http://uweb.txstate.edu/~wko4/code/angular/angularDemo1'); 
    element(by.model('name')).sendKeys('William');

    var greeting = element(by.binding('name'));

    expect(greeting.getText()).toEqual('William');
  });

  describe('My List', function() {
    var todoList;
    //get items from list
    todoList = element.all(by.repeater('item in listItems'));

    it('should contain all 10 items', function() {
      	expect(todoList.count()).toEqual(10);
    });

    it('should have "1). First Item" as the first element in the list', function() {  
      	expect(todoList.get(0).getText()).toEqual('1). FIRST ITEM');  
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
  })
});
*/

