const statuses = ["等待处理", "正在处理", "处理成功", "处理失败"];
const statusText = document.querySelector("#statusText");
const statusButton = document.querySelector("#statusButton");

let currentStatus = 0;

statusButton.addEventListener("click", () => {
  currentStatus = (currentStatus + 1) % statuses.length;
  statusText.textContent = statuses[currentStatus];
});
