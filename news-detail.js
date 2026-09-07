const params = new URLSearchParams(window.location.search);
const newsId = params.get("id");

const news = newsData.find((item) => item.id === newsId);

const detail = document.getElementById("news-detail");

if (news) {
  document.title = `${news.title} | White Coat Society Japan`;

  detail.innerHTML = `
    <p class="detail-date">${news.date}</p>

    <h1 class="detail-title">${news.title}</h1>

    <div class="detail-line"></div>

    <div class="detail-content">
      ${news.content}
    </div>
  `;
} else {
  detail.innerHTML = `
    <h1 class="detail-title">お知らせが見つかりませんでした。</h1>
  `;
}