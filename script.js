document.getElementById('survey-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour votre participation !');
  this.reset();
});