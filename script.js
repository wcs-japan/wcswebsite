const emailCard = document.getElementById('email-card');
const emailText = document.getElementById('email-text').innerText;
const toast = document.getElementById('toast');

emailCard.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText).then(() => {
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }).catch(err => {
    console.error('コピーに失敗しました:', err);
  });
});