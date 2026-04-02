const translations = {
    ka: { nav_cold: "ცივი", nav_hot: "ცხელი", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელი", menu_label: "მენიუ", hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემო", footer_text: "© 2026 რესტორანი „ფიროსმანი“" },
    en: { nav_cold: "Cold", nav_hot: "Hot", nav_tsomeuli: "Bakery", nav_drinks: "Drinks", menu_label: "Menu", hero_title: "Welcome to Our Tavern", hero_tagline: "Georgian Taste", footer_text: "© 2026 Pirosmani Restaurant" },
    ru: { nav_cold: "Холодное", nav_hot: "Горячее", nav_tsomeuli: "Выпечка", nav_drinks: "Напитки", menu_label: "Меню", hero_title: "Добро пожаловать в дукан", hero_tagline: "Грузинский вкус", footer_text: "© 2026 Ресторан «Пиросмани»" }
};

const menuItemsData = {
    cold: [
        { name: {ka: "ფხალის ასორტი", en: "Assorted Pkhali", ru: "Ассорти Пхали"}, price: "22₾", desc: {ka: "ისპანახი, ჭარხალი, სტაფილო ნიგვზით", en: "Spinach, beetroot, carrot with walnuts", ru: "Шпинат, свекла, морковь с орехами"} },
        { name: {ka: "ყველის დაფა", en: "Cheese Board", ru: "Сырное ассорти"}, price: "28₾", desc: {ka: "იმერული, სულგუნი, გუდა", en: "Imeretian, Sulguni, Guda", ru: "Имеретинский, сулугуни, гуда"} },
        { name: {ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with Walnuts", ru: "Баклажаны с орехами"}, price: "15₾", desc: {ka: "ნიგვზის საკაზმით", en: "Walnut filling", ru: "С ореховой начинкой"} }
    ],
    hot: [
        { name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, price: "1.5₾", desc: {ka: "ხორცით და მწვანილით", en: "Meat and herbs", ru: "С мясом и зеленью"} },
        { name: {ka: "შქმერული", en: "Shkmeruli", ru: "Шкмерули"}, price: "28₾", desc: {ka: "ნივრიან სოუსში", en: "Garlic sauce", ru: "В чесночном соусе"} }
    ],
    tsomeuli: [
        { name: {ka: "ხაჭაპური", en: "Khachapuri", ru: "Хачапури"}, price: "18₾", desc: {ka: "იმერული ყველით", en: "Imeretian cheese", ru: "Имеретинский сыр"} },
        { name: {ka: "აჭარული", en: "Adjaruli", ru: "Аджарули"}, price: "18₾", desc: {ka: "კვერცხით და კარაქით", en: "Egg and butter", ru: "С яйцом и маслом"} }
    ],
    drinks: [
        { name: {ka: "ღვინო", en: "Wine", ru: "Вино"}, price: "35₾", desc: {ka: "ქვევრის საფერავი", en: "Qvevri Saperavi", ru: "Саперави из квеври"} },
        { name: {ka: "ლიმონათი", en: "Lemonade", ru: "Лимонад"}, price: "4₾", desc: {ka: "ნატახტარი", en: "Natakhtari", ru: "Натахтари"} }
    ]
};

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

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
            </article>`).join('');
    }
}

function changeLang(lang, flagSrc, langText) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.getElementById('current-flag').src = flagSrc;
    document.getElementById('current-text').textContent = langText;
    renderMenu(lang);
    localStorage.setItem('p_lang', lang);
    localStorage.setItem('p_flag', flagSrc);
    localStorage.setItem('p_text', langText);
}

window.onload = () => {
    const savedLang = localStorage.getItem('p_lang') || 'ka';
    const savedFlag = localStorage.getItem('p_flag') || 'https://flagcdn.com/w40/ge.png';
    const savedText = localStorage.getItem('p_text') || 'GEO';
    changeLang(savedLang, savedFlag, savedText);

    // Mobile Menu Toggle
    const menuTrigger = document.getElementById('menu-trigger');
    const navLinks = document.getElementById('navLinks');
    menuTrigger.addEventListener('click', () => navLinks.classList.toggle('active'));

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.remove('active');
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });
};
