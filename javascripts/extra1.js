Document.addEventListener("DOMContentLoaded", function() {
    // 获取导航栏右侧容器
    var navRight = document.querySelector(".md-header__inner .md-header__title");
  
    // 创建自定义按钮1
    var button1 = document.createElement("button");
    button1.className = "md-header__button";
    button1.innerText = "English";
    button1.onclick = function() {
      window.location.href = "https://yy-li.com";
    };
  
    // 创建自定义按钮2
    var button2 = document.createElement("button");
    button2.className = "md-header__button";
    button2.innerText = "提示";
    button2.onclick = function() {
      alert("这是一个提示信息！");
    };
  
    // 创建自定义按钮3
    var button3 = document.createElement("button");
    button3.className = "md-header__button";
    button3.innerText = "信息";
    button3.onclick = function() {
      console.log("这是一些信息！");
    };
  
    // 将按钮添加到导航栏右侧
    if (navRight) {
      navRight.appendChild(button1);
      navRight.appendChild(button2);
      navRight.appendChild(button3);
    }
  });