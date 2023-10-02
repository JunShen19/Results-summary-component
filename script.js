// 引用 HTML 中的目標元素
const dataContainer = document.getElementById("summary");

// 使用 Fetch API 讀取 JSON 檔案
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // 創建一個包含資料的 HTML 字串
    const colors = ["red", "yellow", "green", "blue"];
    const summaryBox = data
      .map((d, idx) => {
        return `<div class="summary-box ${colors[idx]}">
              <p><img src='${d.icon}'/>${d.category}</p>
              <p class="summary-score"><span class="scored">${d.score}</span> / 100</p>
            </div>`;
      })
      .join("");

    // 插入 HTML 到目標元素
    dataContainer.innerHTML = summaryBox;
  })
  .catch((error) => console.error("Error fetching JSON:", error));
