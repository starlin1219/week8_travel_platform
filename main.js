import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// Bootstrap 表單驗證
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// 密碼及 toggle icon 的顯示/隱藏
document.addEventListener("DOMContentLoaded", () => {
    // 密碼顯示/隱藏切換
    document.addEventListener("click", (e) => {
        const toggle = e.target.closest(".password-toggle");
        if (!toggle) return;

        const group = toggle.closest(".password-input");
        if (!group) return;

        const input = group.querySelector(
            'input[type="password"], input[type="text"]'
        );
        const eyeOpen = toggle.querySelector(".eye-open");
        const eyeClose = toggle.querySelector(".eye-close");
        if (!input || !eyeOpen || !eyeClose) return;

        const willShow = input.type === "password";
        input.type = willShow ? "text" : "password";

        eyeOpen.classList.toggle("d-none", !willShow);
        eyeOpen.classList.toggle("d-block", willShow);
        eyeClose.classList.toggle("d-none", willShow);
        eyeClose.classList.toggle("d-block", !willShow);
    });

    // 有輸入文字時才顯示 toggle icon
    document
        .querySelectorAll(
            ".password-input input[type='password'], .password-input input[type='text']"
        )
        .forEach((input) => {
            const toggle =
                input.parentElement.querySelector(".password-toggle");
            if (!toggle) return; // 如果找不到就跳過

            // 初始狀態
            toggle.style.display = input.value ? "block" : "none";

            // 每次輸入變更
            input.addEventListener("input", () => {
                toggle.style.display = input.value ? "block" : "none";
            });
        });
});

// 啟用/停用表單送出按鈕
document.addEventListener("DOMContentLoaded", () => {
    // 所有帶 .needs-validation 的表單
    document.querySelectorAll(".needs-validation").forEach((form) => {
        const submitBtn = form.querySelector('button[type="submit"]'); // 取得該表單的送出按鈕

        // 依目前欄位更新按鈕狀態
        // HTML5 Constraint Validation API 的 form.checkValidity()，檢查表單內所有可驗證欄位，用來切換送出按鈕 disabled
        const updateSubmitState = () => {
            submitBtn.disabled = !form.checkValidity();
        };

        // 初次進頁先判斷一次
        updateSubmitState();

        // 監聽使用者輸入/變更；email、password、checkbox…都會觸發
        form.addEventListener("input", updateSubmitState);
        form.addEventListener("change", updateSubmitState);
    });
});

// 專屬推薦-輪播
const recommendSwiper = new Swiper(".recommend-swiper", {
    spaceBetween: 16,
    slidesPerView: "auto",

    pagination: {
        el: ".recommend-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            spaceBetween: 24,
        },
        1200: {
            spaceBetween: 0, // XL 用 CSS gap 管間距
        },
    },
});

// 景點標籤-輪播
const tagSwiper = new Swiper(".tag-swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    slideToClickedSlide: true,
});

// 景點內容-輪播
const attractionSwiper = new Swiper(".attraction-swiper", {
    spaceBetween: 16,
    slidesPerView: "auto",

    breakpoints: {
        768: {
            spaceBetween: 24,
        },
    },

    // 分頁
    pagination: {
        el: ".attraction-pagination",
    },
    // 左右箭頭
    navigation: {
        nextEl: ".attraction-button-next",
        prevEl: ".attraction-button-prev",
    },
});

// 行程-輪播
const journeySwiper = new Swiper(".journey-swiper", {
    spaceBetween: 24,
    slidesPerView: "auto",

    // 左右箭頭
    navigation: {
        nextEl: ".journey-button-next",
        prevEl: ".journey-button-prev",
    },
});

// 商品-輪播
const productSwiper = new Swiper(".product-swiper", {
    // loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",

    // 分頁
    pagination: {
        el: ".product-pagination",
    },
});

// 其他人也買了-輪播
const alsoBoughtSwiper = new Swiper(".also-bought-swiper", {
    spaceBetween: 24,
    slidesPerView: "auto",

    // 左右箭頭
    navigation: {
        nextEl: ".also-bought-button-next",
        prevEl: ".also-bought-button-prev",
    },
});

// 搜尋地點-輪播
const searchSwiper = new Swiper(".search-swiper", {
    // loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",

    // 分頁
    pagination: {
        el: ".search-pagination",
    },
});

// 排名-輪播
const rankingSwiper = new Swiper(".ranking-swiper", {
    spaceBetween: 24,
    slidesPerView: "auto",

    // 左右箭頭
    navigation: {
        nextEl: ".ranking-button-next",
        prevEl: ".ranking-button-prev",
    },
});

// 大阪推薦標籤-輪播
const osakaTagSwiper = new Swiper(".osaka-tag-swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    slideToClickedSlide: true,
});

// 大阪推薦-輪播
const osakaSwiper = new Swiper(".osaka-swiper", {
    spaceBetween: 24,
    slidesPerView: "auto",

    // 左右箭頭
    navigation: {
        nextEl: ".osaka-button-next",
        prevEl: ".osaka-button-prev",
    },
});

// 登入註冊-輪播
const loginSwiper = new Swiper(".login-swiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: { delay: 3000 },
});

// 日曆設定
// 語系資料
const zh = {
    days: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ],
    daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
    ],
    monthsShort: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ],
    today: "今天",
    clear: "清除",
    format: "yyyy/mm/dd",
    timeFormat: "hh:mm aa",
    firstDay: 0,
};

// 設定停用日期
const disabledDate = [
    "2025-08-01",
    "2025-08-02",
    "2025-08-03",
    "2025-08-04",
    "2025-08-05",
    "2025-08-06",
    "2025-08-07",
    "2025-08-09",
    "2025-08-10",
    "2025-08-11",
    "2025-08-14",
    "2025-08-16",
    "2025-08-17",
    "2025-08-18",
    "2025-08-19",
    "2025-08-22",
    "2025-08-23",
    "2025-08-24",
    "2025-08-25",
    "2025-08-26",
    "2025-08-27",
    "2025-08-28",
    "2025-08-29",
    "2025-08-30",
    "2025-08-31",
];

// 加入月曆
const dp = new AirDatepicker("#airDatepicker", {
    inline: true,
    locale: zh,
    navTitles: {
        days: `
        <div class="custom-nav-title">
        <span class="nav-year">yyyy 年</span>
        <span class="nav-month">M 月</span>
        </div>
        `,
    },
    showOtherMonths: false,
});
dp.disableDate(disabledDate);

// 商品說明收合
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".expand-box").forEach((box) => {
        const btn = box.querySelector(".expand-toggle");
        btn.addEventListener("click", () => {
            const expanded = box.classList.toggle("is-expanded");
            btn.setAttribute("aria-expanded", true);
            btn.textContent = expanded ? "收起內容" : "展開更多";
        });
    });
});

// 選單切換
const header = document.querySelector(".navbar.fixed-top");
const pageNav = document.getElementById("pageNav");
const optionsSection = document.getElementById("options");

function getHeaderH() {
    return header ? header.offsetHeight : 0;
}

function toggleNav() {
    if (!header || !pageNav || !optionsSection) return;
    const headerH = getHeaderH();
    const optionsTop = optionsSection.offsetTop;
    const scrolledY = window.scrollY;

    const reachedOptions = scrolledY + headerH >= optionsTop;

    if (reachedOptions) {
        header.classList.add("is-hidden");
        pageNav.classList.add("is-visible");
    } else {
        pageNav.classList.remove("is-visible");
        header.classList.remove("is-hidden");
    }
}

// 綁定事件 + 初次執行
window.addEventListener("scroll", toggleNav, { passive: true });
window.addEventListener("resize", toggleNav);
// DOM 結構準備好先跑一次
document.addEventListener("DOMContentLoaded", toggleNav);
// 等所有資源載入再跑一次
window.addEventListener("load", toggleNav);
