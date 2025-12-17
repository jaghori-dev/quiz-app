const cards = document.querySelectorAll('[data-js="card"]');


cards.forEach(card => {
  const toggleButton = card.querySelector('[data-js="toggle-answer"]');
  const answer = card.querySelector('[data-js="answer"]');

  if (toggleButton && answer) {
    toggleButton.addEventListener('click', () => {
      answer.classList.toggle('card__answer--show');
    });
  }
});


const bodyElement = document.querySelector('[data-js="root"]');
const toggleTheme = document.querySelector('[data-js="lightmode"]');
if (toggleTheme && bodyElement) {
  toggleTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("light");
  });
}