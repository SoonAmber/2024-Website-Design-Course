
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