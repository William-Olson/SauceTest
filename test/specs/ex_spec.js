

// Custom locator.
by.addLocator('buttonTextSimple', function(buttonText, opt_parentElement) {
  // This function will be serialized as a string and will execute in the
  // browser. The first argument is the text for the button. The second
  // argument is the parent element, if any.
  var using = opt_parentElement || document,
  buttons = using.querySelectorAll('button');

  // Return an array of buttons with the matching text.
  return Array.prototype.filter.call(buttons, function(button) {
    var temp = button.textContent;
    return button.textContent === buttonText;
  });
});




describe('\nMy Angular Demo1', function() {
  browser.get('http://localhost:3333/angularDemo1/');

  it('should greet the user by input name', function() { 
    element(by.model('name')).sendKeys('William'); 
    var greeting = element(by.binding('name')); 
    expect(greeting.getText()).toEqual('William');
  });

  describe('My List', function() {
    var itemList = element.all(by.repeater('item in listItems')); 
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
   		for (var i = 0; i < 3; i++) 
        		    clickMeBttn.click();  
    	var countLabel = element(by.binding('count'));
    	expect(countLabel.getText()).toEqual('Count: 3'); 
  	})
  });

  describe('the Clear Button', function (){
    it('should reset the count to zero', function (){ 
      element(by.buttonTextSimple('Clear')).click(); // Using the custom locator.
      var countLabel = element(by.binding('count'));
      expect(countLabel.getText()).toEqual('Count: 0'); 
    });
  });

});



