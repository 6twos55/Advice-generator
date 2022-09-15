const button = document.querySelector('.button');
const words = document.querySelector('.words');
const no = document.querySelector('span');


const generateAdvice = async () => {

  const response = await fetch('https://api.adviceslip.com/advice');

  if(response.status !== 200){
    throw new Error('Cannot fetch the data');
  }

  const data = await response.json();
  return data;

};

button.addEventListener('click', () => {

  generateAdvice()
  .then(data => {
    words.innerText = data.slip.advice;
    no.innerText = data.slip.id;
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

});