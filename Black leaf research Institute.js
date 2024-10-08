// 等待DOM完全加载后执行
document.addEventListener("DOMContentLoaded", function () {
  // 欢迎信息
  const welcomeMessage = document.createElement("div");
  welcomeMessage.style.position = "fixed";
  welcomeMessage.style.top = "50%";
  welcomeMessage.style.left = "50%";
  welcomeMessage.style.transform = "translate(-50%, -50%)";
  welcomeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  welcomeMessage.style.color = "white";
  welcomeMessage.style.padding = "10px";
  welcomeMessage.style.borderRadius = "5px";
  welcomeMessage.innerText = "欢迎来到黑树叶研究所！";

  // 设置自动关闭的欢迎信息
  document.body.appendChild(welcomeMessage);
  setTimeout(() => {
    welcomeMessage.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(welcomeMessage);
    }, 500);
  }, 3000);

  // 切换内容的显示状态
  const targetButton = document.getElementById("targetButton");
  const content = document.getElementById("content");

  targetButton.addEventListener("click", () => {
    // 切换内容的显示状态
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });

  questionButton.addEventListener("click", () => {
    // 切换内容的显示状态
    if (content2.style.display === "none" || content2.style.display === "") {
      content2.style.display = "block";
    } else {
      content2.style.display = "none";
    }
  });
});
