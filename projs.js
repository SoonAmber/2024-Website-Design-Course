
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

// 获取选项卡按钮和内容区域
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有按钮的激活状态
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // 激活当前选项卡和对应内容
        tab.classList.add('active');
        const target = document.querySelector(tab.dataset.target);
        target.classList.add('active');
    });
});

// 为选项卡按钮添加点击事件，平滑滚动到对应的内容区域
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有按钮的激活状态
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active'); // 激活当前选项卡

        // 获取目标内容区域
        const targetId = tab.dataset.target; // 获取 data-target 的值
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 平滑滚动到对应内容区域
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");

    // 显示/隐藏回到顶部按钮
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            // 当滚动超过300px时，显示按钮
            backToTopButton.style.opacity = "1";
            backToTopButton.style.visibility = "visible";
        } else {
            // 当滚动小于300px时，隐藏按钮
            backToTopButton.style.opacity = "0";
            backToTopButton.style.visibility = "hidden";
        }
    });

    // 点击按钮回到顶部
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0, // 回到顶部
            behavior: "smooth", // 平滑滚动
        });
    });
});
