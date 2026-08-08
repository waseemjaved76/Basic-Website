const button = document.getElementById('toggleBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  const current = message.textContent;
  message.textContent = current.includes('Thanks')
    ? 'The button is ready.'
    : 'Thanks for clicking! Your page is working.';
});
