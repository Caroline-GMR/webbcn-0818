'use strict';

const main = () => {

  const findStudents = terms => {
    let results = [];
    if (terms){
      results = students.filter(student => student.name.toLowerCase().indexOf(terms) >= 0);
    };
    return results;
  };

  const displayResults = results => {

    const searchResults = document.querySelector('.quick-nav .search-results');
    searchResults.innerHTML = "";

    const ul = document.createElement('ul');

    results.forEach(student => {
      const link = document.createElement('a');
      link.innerText = student.name;
      link.setAttribute('href', "../" + student.url);   
      
      const li = document.createElement('li');
      li.appendChild(link);
      ul.appendChild(li);
    })
    searchResults.appendChild(ul);
  };

  const handleChange = event => {   
    const searchTerms = input.value.toLowerCase();
    const results = findStudents(searchTerms);
    displayResults(results);
  };

  const handleKey = event => {
    event.key === 'Escape' || event.keyCode === 27 ? clearResults() : handleChange(event);
    }

  const clearResults = () => {
    const searchResults = document.querySelector('.quick-nav .search-results');
    const text = document.querySelector(".quick-nav input");
    searchResults.innerHTML = "";
    //text.value = "";
  }

  const handleClick = event => {
    clearResults();
    event.stopPropagation();
  };

  const input = document.querySelector(".quick-nav input");
  input.addEventListener('keyup', handleKey);
  //input.addEventListener('focus', handleChange);
  
  const body = document.querySelector('body');
  body.addEventListener('click', handleClick);
};


const counter = () => {
  const counter = document.querySelector('.counter');
  let timeLeft = 30;
  const intervalId = setInterval(() => {
    if (timeLeft) {
      timeLeft--;
      counter.innerHTML = timeLeft;
    } else {
      clearInterval(intervalId);
    }
  }, 1000)
  
  counter.addEventListener('click', (event) => {
    clearInterval(intervalId);
    event.stopPropagation();
  })
}; 

window.addEventListener('load', main);
window.addEventListener('load', counter);
