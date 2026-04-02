const translations = {
    ka: {
        nav_cold: "ცივი", nav_hot: "ცხელი", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელი",
        hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემო", footer_text: "© 2026 რესტორანი „ფიროსმანი“"
    },
    en: {
        nav_cold: "Cold", nav_hot: "Hot", nav_tsomeuli: "Bakery", nav_drinks: "Drinks",
        hero_title: "Welcome to Our Tavern", hero_tagline: "Georgian Taste", footer_text: "© 2026 Pirosmani Restaurant"
    },
    ru: {
        nav_cold: "Холодное", nav_hot: "Горячее", nav_tsomeuli: "Выпечка", nav_drinks: "Напитки",
        hero_title: "Добро пожаловать в дукан", hero_tagline: "Грузинский вкус", footer_text: "© 2026 Ресторан «Пиросмани»"
    }
};

const menuItemsData = {
    cold: [
        { name: {ka: "ფხალის ასორტი", en: "Assorted Pkhali", ru: "Ассорти Пхали"}, price: "22.00 ₾", desc: {ka: "ისპანახი, ჭარხალი, სტაფილო ნიგვზით", en: "Spinach, beetroot, carrot with walnuts", ru: "Шпинат, свекла, морковь с орехами"} },
        { name: {ka: "ყველის დაფა", en: "Cheese Board", ru: "Сырное ассорти"}, price: "28.00 ₾", desc: {ka: "იმერული, სულგუნი, გუდა", en: "Imeretian, Sulguni, Guda", ru: "Имеретинский, сулугуни, гуда"} }
    ],
    hot: [
        { name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, price: "1.50 ₾", desc: {ka: "ტრადიციული ხორცით და მწვანილით", en: "Traditional with meat and herbs", ru: "Традиционные с мясом и зеленью"} },
        { name: {ka: "შქმერული", en: "Shkmeruli", ru: "Шкмерули"}, price: "28.00 ₾", desc: {ka: "წიწილა ნივრიან სოუსში", en: "Chicken in garlic sauce", ru: "Цыпленок в чесночном соусе"} }
    ],
    tsomeuli: [
        { name: {ka: "ხაჭაპური", en: "Khachapuri", ru: "Хачапури"}, price: "18.00 ₾", desc: {ka: "იმერული ყველით და კარაქით", en: "With Imeretian cheese and butter", ru: "С имеретинским сыром и маслом"} },
        { name: {ka: "აჭარული", en: "Adjaruli", ru: "Аджарули"}, price: "18.00 ₾", desc: {ka: "ნედლი ყველით და კვერცხით", en: "With fresh cheese and egg", ru: "Со свежим сыром и яйцом"} }
    ],
    drinks: [
        { name: {ka: "ღვინო", en: "Wine", ru: "Вино"}, price: "35.00 ₾", desc: {ka: "ქვევრის საფერავი", en: "Qvevri Saperavi", ru: "Саперави из квеври"} },
        { name: {ka: "ლიმონათი", en: "Lemonade", ru: "Лимонад"}, price: "4.00 ₾", desc: {ka: "ნატახტარის ასორტი", en: "Natakhtari assorted", ru: "Натахтари в ассортименте"} }
    ]
};

// ზემოთ ასვლის ფუნქცია
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMenu(lang) {
    for (let cat in menuItemsData) {
        const container = document.getElementById(`${cat}-items`);
        if (!container) continue;
        container.innerHTML = menuItemsData[cat].map(item => `
            <article class="menu-item">
                <div class="item-image-wrapper">
                    <img src="https://via.placeholder.com/400x300/1a1a1a/d4af37?text=PIROSMANI" class="item-img" alt="dish">
                </div>
                <div class="item-details">
                    <div class="item-header">
                        <h3 class="item-name">${item.name[lang]}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-description">${item.desc[lang]}</p>
                </div>
            </article>
        `).join('');
    }
}

function changeLang(lang, flagSrc, langText) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    const display = document.getElementById('current-lang-display');
    display.querySelector('img').src = flagSrc;
    display.querySelector('span').textContent = langText;

    renderMenu(lang);
    
    const options = document.getElementById('langOptions');
    options.style.display = 'none';
    setTimeout(() => { options.style.display = ''; }, 300);

    localStorage.setItem('p_lang', lang);
    localStorage.setItem('p_flag', flagSrc);
    localStorage.setItem('p_text', langText);
}

window.onload = () => {
    const savedLang = localStorage.getItem('p_lang') || 'ka';
    const savedFlag = localStorage.getItem('p_flag') || 'https://flagcdn.com/w40/ge.png';
    const savedText = localStorage.getItem('p_text') || 'GEO';
    
    changeLang(savedLang, savedFlag, savedText);

    // Smooth Scroll მობილურისთვისაც
    document.querySelectorAll('.nav-links a, .navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = window.innerWidth < 768 ? 70 : 80;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
};
