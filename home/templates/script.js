// Clear button functionality
document.getElementById('clearButton').addEventListener('click', () => {
  document.getElementById('inputText').value = '';
});

// Translate button functionality
document.getElementById('translateButton').addEventListener('click', () => {
  const text = document.getElementById('inputText').value;
  if (text.trim() === '') {
    alert('Please enter text to translate.');
  } else {
    alert('Translation feature is under construction.');
  }
});

// Mic button functionality (stubbed)
document.getElementById('micButton').addEventListener('click', () => {
  alert('Voice input is not implemented yet.');
});
