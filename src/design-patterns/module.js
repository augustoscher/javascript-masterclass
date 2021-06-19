// https://www.digitalocean.com/community/tutorial_series/javascript-design-patterns
// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components.
// This provides loose coupling to support well-structured code.

// Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that
// protect variables and methods (however, it will return an object instead of a function). This is what it looks like:
(function() {
  // declare private variables and/or functions
  return {
      // declare public variables and/or functions
  }
})();

var HTMLChanger = (function() {
  var contents = 'contents'

  var changeHTML = function() {
  var element = document.getElementById('attribute-to-change');
  element.innerHTML = contents;
  }

  return {
  callChangeHTML: function() {
      changeHTML();
      console.log(contents);
  }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
