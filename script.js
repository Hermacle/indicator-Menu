console.clear();
const list = document.querySelectorAll('.list');
const nav = document.querySelector('.navigation');
const finger = document.querySelector('.finger');
const rainy = document.querySelector('.rainy');
const planet = document.querySelector('.planet');
const sunny = document.querySelector('.sunny');
const mail = document.querySelector('.mail');

const finger_icon = document.querySelector('.finger-icon');
const rainy_icon = document.querySelector('.rainy-icon');
const planet_icon = document.querySelector('.planet-icon');
const sunny_icon = document.querySelector('.sunny-icon');
const mail_icon = document.querySelector('.mail-icon');

// Add a "click" event listener to each item in the list
list.forEach(item => item.addEventListener('click', () => {

  // Remove the "active" class from all items in the list
  list.forEach(li => li.classList.remove('active'));

  // Add the "active" class to the clicked item
  item.classList.add('active');

  // Change the color of finger to white if finger-icon is active
  if (finger_icon.classList.contains('active')) {
    finger.style.color = 'white';
  } else {
    finger.style.color = '';
  }

  // Change the color of rainy to white if rainy-icon is active
  if (rainy_icon.classList.contains('active')) {
    rainy.style.color = 'white';
  } else {
    rainy.style.color = '';
  }

  // Change the color of planet to white if planet-icon is active
  if (planet_icon.classList.contains('active')) {
    planet.style.color = 'white';
  } else {
    planet.style.color = '';
  }

  // Change the color of sunny to white if sunny-icon is active
  if (sunny_icon.classList.contains('active')) {
    sunny.style.color = 'white';
  } else {
    sunny.style.color = '';
  }

  // Change the color of mail to white if mail-icon is active
  if (mail_icon.classList.contains('active')) {
    mail.style.color = 'white';
  } else {
    mail.style.color = '';
  }
}));
