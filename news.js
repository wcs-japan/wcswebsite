const allNewsList = document.getElementById("all-news-list");

newsData.forEach((news) => {
  allNewsList.innerHTML += `
    <a href="news-detail.html?id=${news.id}" class="news-item">
      <span class="news-date">${news.date}</span>
      <span class="news-title">${news.title}</span>
      <i class="fa-solid fa-chevron-right"></i>
    </a>
  `;
});