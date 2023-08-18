const dice = document.querySelector('.dice');
const randomQuote = document.querySelector('#randomQuote');
const theNumbersMason = document.querySelector('#theNumbersMason');
let lastAdviceId = null;

// Load a random quote when the page is loaded
window.addEventListener('load', function () {
  randomQuote.innerHTML = `Patience is key <br />⌛️ 🙇‍♂️`;
  theNumbersMason.innerHTML = `Advice #000`;

  fetchAdvice();
});

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;
      
      // Check if the new advice ID is the same as the last one
      if (adviceId === lastAdviceId) {
        // Fetch again to get a new quote
        fetchAdvice();
      } else {
        randomQuote.innerHTML = '"' + advice + '"';
        theNumbersMason.innerHTML = `Adivce #${adviceId}`;
        // Update the last advice ID
        lastAdviceId = adviceId;
      }
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}

dice.addEventListener('click', function handleClick() {
  
  randomQuote.innerHTML = `Looking for more deep thoughts <br />🤔`;
  theNumbersMason.innerHTML = ''; // Clear previous advice ID if any

  fetchAdvice();
});
