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

  function handleChange(){   
    var searchTerms = input.value.toLowerCase();
    var results = findStudents(searchTerms);
    displayResults(results);
  };

  var input = document.querySelector(".quick-nav input");
  input.addEventListener('keyup', handleChange);
};

window.addEventListener('load', main);

