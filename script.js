document.addEventListener("DOMContentLoaded", () => {
    // 定义图片数组
    const images = [
        'image1.jpg', // 替换为实际图片路径
        'image2.jpg'
    ];

    let currentIndex = 0; // 当前图片索引
    const header = document.querySelector('header'); // 选中 header 元素

    // 设置背景图片函数
    function setBackgroundImage(index) {
        header.style.setProperty(
            '--header-bg-image',
            `url(${images[index]})`
        );
    }

    // 初始化背景图片
    setBackgroundImage(currentIndex);

    // 获取按钮
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    // 点击上一张
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // 循环切换到上一张
        setBackgroundImage(currentIndex);
    });

    // 点击下一张
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // 循环切换到下一张
        setBackgroundImage(currentIndex);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // 更新日期和时间的函数
    function updateDateTime() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // 月份从 0 开始，需要加 1
        const date = today.getDate();
        const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][today.getDay()];
        const hours = today.getHours();
        const minutes = today.getMinutes().toString().padStart(2, "0"); // 补齐两位数
        const seconds = today.getSeconds().toString().padStart(2, "0"); // 补齐两位数

        // 计算家园成立的天数
        const startDate = new Date("2002-01-01"); // 家园成立日期
        const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)); // 计算天数

        // 拼接日期字符串
        const dateString = `${year}年${month}月${date}日${weekday} ${hours}:${minutes}:${seconds} <span class="spacing">家园成立的第${daysSinceStart}天</span>`;

        // 显示日期
        document.getElementById("date-display").innerHTML = dateString;
    }

    // 初始化显示
    updateDateTime();

    // 每秒更新一次
    setInterval(updateDateTime, 1000);
});


document.querySelectorAll('.knowledge-list li').forEach(function (item) {
    item.addEventListener('click', function () {
        // 移除所有菜单项的active类
        document.querySelectorAll('.knowledge-list li').forEach(function (el) {
            el.classList.remove('active');
        });

        // 添加当前点击项的active类
        item.classList.add('active');

        // 隐藏所有卡片
        document.querySelectorAll('.knowledge-cards .card-group').forEach(function (card) {
            card.style.display = 'none';
        });

        // 显示对应的卡片
        var targetId = item.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';
    });
});


// 获取所有导航项和内容区域
const menuItems = document.querySelectorAll('.menu-item');
const contentDisplays = document.querySelectorAll('.content-display');

// 添加点击事件监听器
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // 移除所有菜单项的 active 状态
    menuItems.forEach(menu => menu.classList.remove('active'));
    // 给当前点击的菜单项添加 active 状态
    item.classList.add('active');

    // 隐藏所有内容区域
    contentDisplays.forEach(content => content.classList.add('hidden'));
    // 显示对应的内容区域
    const targetContent = document.getElementById(item.dataset.content);
    if (targetContent) {
      targetContent.classList.remove('hidden');
    }
  });
});
