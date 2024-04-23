
function subscribe(){
  const buttonElement = document.querySelector('.js-subsctibe');


  if(buttonElement.innerHTML === 'subscribe'){
    buttonElement.innerHTML = 'subscribed';
    buttonElement.classList.add('subscribed');
  } else {
    buttonElement.innerHTML = 'subscribe';
    buttonElement.classList.remove('subscribed');
  }
}