const translations = {
    ka: {
        nav_cold: "ცივი კერძები", nav_hot: "ცხელი კერძები", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელები",
        hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემოს დუქანი", footer_text: "© 2026 რესტორანი „ფიროსმანი“"
    },
    en: {
        nav_cold: "Cold Starters", nav_hot: "Hot Dishes", nav_tsomeuli: "Bakery", nav_drinks: "Drinks",
        hero_title: "Welcome to Our Tavern", hero_tagline: "The Soul of Georgian Taste", footer_text: "© 2026 Pirosmani Restaurant"
    },
    ru: {
        nav_cold: "Холодные закуски", nav_hot: "Горячие блюда", nav_tsomeuli: "Выпечка", nav_drinks: "Напитки",
        hero_title: "Добро пожаловать в дукан", hero_tagline: "Душа грузинского вкуса", footer_text: "© 2026 Ресторан «Пиросмани»"
    }
};

const menuItemsData = {
    cold: [
        { name: {ka: "ფხალის ასორტი", en: "Assorted Pkhali", ru: "Ассорти Пхали"}, price: "22.00 ₾", desc: {ka: "ისპანახი, ჭარხალი, სტაფილო ნიგვზით", en: "Spinach, beetroot, carrot with walnuts", ru: "Шпинат, свекла, морковь с орехами"} },
        { name: {ka: "ყველის დაფა", en: "Cheese Board", ru: "Сырное ассорти"}, price: "28.00 ₾", desc: {ka: "იმერული, სულგუნი, გუდა", en: "Imeretian, Sulguni, Guda", ru: "Имеретинский, сулугуни, гуда"} },
        { name: {ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with Walnuts", ru: "Баклажаны с орехами"}, price: "15.00 ₾", desc: {ka: "შემწვარი ბადრიჯანი ნიგვზის საკაზმით", en: "Fried eggplant with walnut filling", ru: "Жареные баклажаны с ореховой начинкой"} },
        { name: {ka: "ქართული სალათი", en: "Georgian Salad", ru: "Грузинский салат"}, price: "12.00 ₾", desc: {ka: "კიტრი, პომიდორი, მწვანილი და ზეთი", en: "Cucumber, tomato, herbs and oil", ru: "Огурцы, помидоры, зелень и масло"} },
        { name: {ka: "ნადუღი", en: "Nadughi", ru: "Надуги"}, price: "14.00 ₾", desc: {ka: "ნადუღი პიტნით სულგუნის ფირფიტებში", en: "Cream cheese with mint in sulguni", ru: "Творожный сыр с мятой в сулугуни"} }
    ],
    hot: [
        { name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, price: "1.50 ₾", desc: {ka: "ტრადიციული ხორცით და მწვანილით", en: "Traditional with meat and herbs", ru: "Традиционные с мясом и зеленью"} },
        { name: {ka: "მწვადი", en: "Mtsvadi", ru: "Мцвади"}, price: "20.00 ₾", desc: {ka: "ღორის ხორცი ნაკვერჩხალზე", en: "Pork barbeque on coals", ru: "Свиной шашлык на углях"} },
        { name: {ka: "ჩაქაფული", en: "Chakapuli", ru: "Чакапули"}, price: "25.00 ₾", desc: {ka: "ხბოს ხორცი მწვანილებით და ტყემლით", en: "Veal with herbs and tkhali", ru: "Телятина с зеленью и ткемали"} },
        { name: {ka: "ოჯახური", en: "Ojakhuri", ru: "Оджахури"}, price: "18.00 ₾", desc: {ka: "ღორის ხორცი კარტოფილით", en: "Pork with fried potatoes", ru: "Свинина с картофелем"} },
        { name: {ka: "შქმერული", en: "Shkmeruli", ru: "Шкмерули"}, price: "28.00 ₾", desc: {ka: "წიწილა ნივრიან სოუსში", en: "Chicken in garlic sauce", ru: "Цыпленок в чесночном соусе"} }
    ],
    tsomeuli: [
        { name: {ka: "ხაჭაპური", en: "Khachapuri", ru: "Хачапури"}, price: "18.00 ₾", desc: {ka: "იმერული ყველით და კარაქით", en: "With Imeretian cheese and butter", ru: "С имеретинским сыром и маслом"} },
        { name: {ka: "ლობიანი", en: "Lobiani", ru: "Лобиани"}, price: "12.00 ₾", desc: {ka: "ლობიოს გულსართით", en: "With bean filling", ru: "С фасолевой начинкой"} },
        { name: {ka: "მჭადი", en: "Mchadi", ru: "Мчади"}, price: "6.00 ₾", desc: {ka: "ტრადიციული სიმინდის კვერი", en: "Traditional cornbread", ru: "Традиционная кукурузная лепешка"} },
        { name: {ka: "ხაბიზგინა", en: "Khabizgina", ru: "Хабизгина"}, price: "17.00 ₾", desc: {ka: "კარტოფილით და ყველით", en: "With potatoes and cheese", ru: "С картофелем и сыром"} },
        { name: {ka: "აჭარული", en: "Adjaruli", ru: "Аджарули"}, price: "18.00 ₾", desc: {ka: "ნედლი ყველით და კვერცხით", en: "With fresh cheese and egg", ru: "Со свежим сыром и яйцом"} }
    ],
    drinks: [
        { name: {ka: "ღვინო", en: "Wine", ru: "Вино"}, price: "35.00 ₾", desc: {ka: "ქვევრის საფერავი", en: "Qvevri Saperavi", ru: "Саперави из квеври"} },
        { name: {ka: "ლიმონათი", en: "Lemonade", ru: "Лимонад"}, price: "4.00 ₾", desc: {ka: "ნატახტარის ასორტი", en: "Natakhtari assorted", ru: "Натахтари в ассортименте"} },
        { name: {ka: "წყალი", en: "Water", ru: "Вода"}, price: "3.00 ₾", desc: {ka: "ბორჯომი ან ნაბეღლავი", en: "Borjomi or Nabeghlavi", ru: "Боржоми или Набеглави"} },
        { name: {ka: "ლუდი", en: "Beer", ru: "Пиво"}, price: "6.00 ₾", desc: {ka: "ცივი ჩამოსასხმელი", en: "Cold draft beer", ru: "Холодное разливное пиво"} },
        { name: {ka: "ყავა", en: "Coffee", ru: "Кофе"}, price: "5.00 ₾", desc: {ka: "თურქული ან ნესკაფე", en: "Turkish or Nescafe", ru: "Турецкий или Нескафе"} }
    ]
};

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
    // 1. მთავარი ტექსტების შეცვლა (სათაურები, ნავბარი)
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    // 2. ენის პანელის ვიზუალი
    const display = document.getElementById('current-lang-display');
    display.querySelector('img').src = flagSrc;
    display.querySelector('span').textContent = langText;

    // 3. მენიუს ქარდების რენდერი (სახელების და აღწერების თარგმნა)
    renderMenu(lang);
    
    // 4. მენიუს აკეცვა
    const options = document.getElementById('langOptions');
    options.style.display = 'none';
    setTimeout(() => { options.style.display = ''; }, 300);

    // 5. შენახვა
    localStorage.setItem('p_lang', lang);
    localStorage.setItem('p_flag', flagSrc);
    localStorage.setItem('p_text', langText);
}

window.onload = () => {
    const savedLang = localStorage.getItem('p_lang') || 'ka';
    const savedFlag = localStorage.getItem('p_flag') || 'https://flagcdn.com/w40/ge.png';
    const savedText = localStorage.getItem('p_text') || 'GEO';
    
    changeLang(savedLang, savedFlag, savedText);

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });
};