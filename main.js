const Menu_Button = document.querySelector('.icon_Menu');
const Menu = document.querySelector('.Menu');

const Taipei_Button = document.querySelector('.location_Taipei');
const Sydney_Button = document.querySelector('.location_Sydney');
const Taipei_Info = document.querySelector('.info_Taipei');
const Sydney_Info = document.querySelector('.info_Sydney');

const switch_left = document.querySelector('.switch_left');
const switch_right = document.querySelector('.switch_right');
const Item_Research = document.querySelector('.ItemResearch');
const Item_Strategy = document.querySelector('.ItemStrategy');
const Item_Content = document.querySelector('.ItemContent');
const Item_Experience = document.querySelector('.ItemExperience');



let Item_index = 1

Menu_Button.addEventListener('click', () => {
    Menu.classList.add('active');
    Menu.classList.remove('hide');
});

Menu.addEventListener('click', (e) => {
    if (e.target === Menu) {
        Menu.classList.remove('active');
        Menu.classList.add('hide');
    }
});

if(Taipei_Button != null){
    Taipei_Button.addEventListener('click', () => {
        Taipei_Info.classList.add('show');
        Taipei_Info.classList.remove('hide');
        Sydney_Info.classList.add('hide');
        Sydney_Info.classList.remove('show');
    });
}
if(Sydney_Button != null){
    Sydney_Button.addEventListener('click', () => {
        Taipei_Info.classList.remove('show');
        Taipei_Info.classList.add('hide');
        Sydney_Info.classList.remove('hide');
        Sydney_Info.classList.add('show');
    });
}

if(switch_right != null){
    switch_right.addEventListener('click', () => {
        if(Item_index == 1){
            Item_Strategy.setAttribute("style", "display: flex !important;");
            Item_Research.setAttribute("style", "display: none !important;");
            Item_index = 2;
            console.log(Item_index)
        }
        else if(Item_index == 2){
            Item_Content.setAttribute("style", "display: flex !important;");
            Item_Strategy.setAttribute("style", "display: none !important;");
            Item_index = 3;
            console.log(Item_index)
        }
        else if(Item_index == 3){
            Item_Experience.setAttribute("style", "display: flex !important;");
            Item_Content.setAttribute("style", "display: none !important;");
            Item_index = 4;
            console.log(Item_index)
        }
        else if(Item_index == 4){
            Item_Research.setAttribute("style", "display: flex !important;");
            Item_Experience.setAttribute("style", "display: none !important;");
            Item_index = 1;
            console.log(Item_index)
        }
    });
}

if(switch_left != null){
    switch_left.addEventListener('click', () => {
        if(Item_index == 1){
            Item_Experience.setAttribute("style", "display: flex !important;");
            Item_Research.setAttribute("style", "display: none !important;");
            Item_index = 4;
            console.log(Item_index)
        }
        else if(Item_index == 2){
            Item_Research.setAttribute("style", "display: flex !important;");
            Item_Strategy.setAttribute("style", "display: none !important;");
            Item_index = 1;
            console.log(Item_index)
        }
        else if(Item_index == 3){
            Item_Strategy.setAttribute("style", "display: flex !important;");
            Item_Content.setAttribute("style", "display: none !important;");
            Item_index = 2;
            console.log(Item_index)
        }
        else if(Item_index == 4){
            Item_Content.setAttribute("style", "display: flex !important;");
            Item_Experience.setAttribute("style", "display: none !important;");
            Item_index = 3;
            console.log(Item_index)
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {

    /* slideshow */
    const slides = document.querySelectorAll('.slide');
    const titles = document.querySelectorAll('.project');
    const sideTitles = document.querySelectorAll('.sideTitle');
    const itemBar = document.querySelectorAll('.itemline');
    let currentIndex = 0;
    let titleIndex = 0;
    let sidetitleIndex = 0;
    let itemBarIndex = 0

    function showNextSlide() {
        // 將當前的圖片移除 `active` 類別
        slides[currentIndex].classList.remove('active');

        // 計算下一張圖片的索引
        currentIndex = (currentIndex + 1) % slides.length;

        // 將新的圖片加上 `active` 類別
        slides[currentIndex].classList.add('active');
    }

    function changeTitle(){
        /** change RWD 800px down */
        // 將當前的圖片移除 `active` 類別
        titles[titleIndex].classList.remove('active');

        // 計算下一張圖片的索引
        titleIndex = (titleIndex + 1) % titles.length;

        // 將新的圖片加上 `active` 類別
        titles[titleIndex].classList.add('active');
        
        /** change RWD 800px up */
        // change font weight
        // 將當前的圖片移除 `active` 類別
        sideTitles[sidetitleIndex].classList.remove('bold');

        // 計算下一張圖片的索引
        sidetitleIndex = (sidetitleIndex + 1) % sideTitles.length;

        // 將新的圖片加上 `active` 類別
        sideTitles[sidetitleIndex].classList.add('bold');

        // change bar translation
        // 將當前的圖片移除 `active` 類別
        itemBar[itemBarIndex].classList.remove('active');

        // 計算下一張圖片的索引
        itemBarIndex = (itemBarIndex + 1) % itemBar.length;

        // 將新的圖片加上 `active` 類別
        itemBar[itemBarIndex].classList.add('active');
    }

    // 每 2 秒切換一次圖片
    setInterval(showNextSlide, 3000);
    setInterval(changeTitle, 3000);

    /* fade-in */
    const elements = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 元素進入視窗，淡入
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('invisible');
                } else {
                    // 元素離開視窗，淡出
                    entry.target.classList.add('invisible');
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.5, // 目標元素有 50% 可見時觸發
        }
    );

    // 監視所有需要的元素
    elements.forEach((el) => observer.observe(el));
});