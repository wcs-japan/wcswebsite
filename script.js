const emailCard = document.getElementById('email-card');
const emailText = document.getElementById('email-text').innerText;
const toast = document.getElementById('toast');

// メールカードをクリックした時のコピー処理
emailCard.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText).then(() => {
    // 通知を表示
    toast.classList.add('show');
    
    // 2.5秒後に自動で通知を消す
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }).catch(err => {
    console.error('コピーに失敗しました:', err);
  });
});