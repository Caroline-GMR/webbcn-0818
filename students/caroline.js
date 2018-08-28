'use strict';

function main() {

  function findStudents(terms){
    var results = [];
    if (terms){
      results = students.filter(function(student){
      return student.name.toLowerCase().indexOf(terms) >= 0;
      });
    };
    return results;
  };

  function displayResults(results){

    var searchResults = document.querySelector('.quick-nav .search-results');
    searchResults.innerHTML = "";

    var ul = document.createElement('ul');

    results.forEach(function(student){
      var link = document.createElement('a');
      link.innerText = student.name;
      link.setAttribute('href', "../" + student.url);   
      
      var li = document.createElement('li');
      li.appendChild(link);
      ul.appendChild(li);
    })
    searchResults.appendChild(ul);
  };

  function handleChange(event){   
    var searchTerms = input.value.toLowerCase();
    var results = findStudents(searchTerms);
    displayResults(results);
  };

  function handleKey(event){
    if (event.key === 'Escape' || event.keyCode === 27){
      clearResults();
    }
    else{
      handleChange(event);
    }
  }

  function clearResults(){
    var searchResults = document.querySelector('.quick-nav .search-results');
    var text = document.querySelector(".quick-nav input");
    searchResults.innerHTML = "";
    //text.value = "";
  }

  function handleClick(event){
    clearResults();
    event.stopPropagation();
  };

  var input = document.querySelector(".quick-nav input");
  input.addEventListener('keyup', handleKey);
  input.addEventListener('focus', handleChange);
  
  var body = document.querySelector('body');
  body.addEventListener('click', handleClick);
};

window.addEventListener('load', main);
window.addEventListener('load', counter);

function counter(){
  var counter = document.querySelector('.counter');
  var timeLeft = 30;
  var intervalId = setInterval(function() {
    if (timeLeft) {
      timeLeft--;
      counter.innerHTML = timeLeft;
    } else {
      clearInterval(intervalId);
    }
  }, 1000)

  counter.addEventListener('click', function(event) {
    clearInterval(intervalId);
    event.stopPropagation();
  })
}; 

