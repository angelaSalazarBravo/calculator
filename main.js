const buttons = document.querySelectorAll('li');
const screen = document.getElementById('screen');

buttons.forEach((li) => {
  li.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const buttonValue = clickedButton.dataset.key;

    if (buttonValue === 'clear') {
      screen.textContent = '';
    } else if (buttonValue === 'equal') {
      try {
        screen.textContent = eval(screen.textContent);
      } catch (error) {
        screen.textContent = 'Error';
      }
    } else {
      screen.textContent += buttonValue;
    }
  });
});
