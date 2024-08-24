const questionContainers = document.querySelectorAll('.question-container');
questionContainers.forEach(container => {
  const buttons = container.querySelector('.buttons');
  const answer = container.querySelector('.answer');
  const plusButton = container.querySelector('#plus');
  const minusButton = container.querySelector('#minus');

  buttons.addEventListener('click', function() {
    this.classList.toggle('active');
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      plusButton.style.display = 'block';
      minusButton.style.display = 'none';
    } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      plusButton.style.display = 'none';
      minusButton.style.display = 'block';
    }
  });
});