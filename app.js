const statuses = ["等待处理", "正在处理", "处理成功", "处理失败"];
const statusText = document.querySelector("#statusText");
const statusButton = document.querySelector("#statusButton");

let currentStatus = 0;
let changeCount = 0;

statusButton.addEventListener("click", () => {
  currentStatus = (currentStatus + 1) % statuses.length;
  changeCount += 1;

  statusText.textContent = statuses[currentStatus];
  statusButton.textContent = `切换状态（已操作 ${changeCount} 次）`;
});