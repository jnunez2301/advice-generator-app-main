const dice = document.querySelector('.dice');
const randomQuote = document.querySelector('#randomQuote');
const theNumbersMason = document.querySelector('#theNumbersMason');

dice.addEventListener('click', function handleClick() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      randomQuote.innerHTML = '"' + advice + '"';
      const adviceId = data.slip.id;
      theNumbersMason.innerHTML = adviceId;

    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
});
