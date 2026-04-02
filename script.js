const translations = {
    ka: { nav_cold: "ცივი", nav_hot: "ცხელი", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელი", menu_label: "მენიუ", hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემო", footer_text: "© 2026 რესტორანი „ფიროსმანი“" },
    en: { nav_cold: "Cold", nav_hot: "Hot", nav_tsomeuli: "Bakery", nav_drinks: "Drinks", menu_label: "Menu", hero_title: "Welcome to Our Tavern", hero_tagline: "Georgian Taste", footer_text: "© 2026 Pirosmani Restaurant" },
    ru: { nav_cold: "Холодное", nav_hot: "Горячее", nav_tsomeuli: "Выпечка", nav_drinks: "Напитки", menu_label: "Меню", hero_title: "Добро пожаловать в дукан", hero_tagline: "Грузинский вкус", footer_text: "© 2026 Ресторан «Пиросмани»" }
};

const menuItemsData = {
    cold: [
        { name: {ka: "სტეიკის სალათი", en: "Assorted Pkhali", ru: "Ассорти Пхали"}, price: "22₾", desc: {ka: "საქონლის ხორცი, პამიდორი, ყველი ", en: "Spinach, beetroot, carrot with walnuts", ru: "Шпинат, свекла, морковь с орехами"}, img: "image/kerdzi-civi1.jpg" },
        { name: {ka: "ყველის დაფა", en: "Cheese Board", ru: "Сырное ассорти"}, price: "28₾", desc: {ka: "იმერული, სულგუნი, გუდა", en: "Imeretian, Sulguni, Guda", ru: "Имеретинский, сулугуни, гуда"}, img: "image/placeholder.png" },
        { name: {ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with Walnuts", ru: "Баклажаны с орехами"}, price: "15₾", desc: {ka: "ნიგვზის საკაზმით და ბროწეულით", en: "With walnut filling and pomegranate", ru: "С ореховой начинкой и гранатом"}, img: "image/placeholder.png" },
        { name: {ka: "ქართული სალათი", en: "Georgian Salad", ru: "Грузинский салат"}, price: "12₾", desc: {ka: "კიტრი, პომიდორი და კახური ზეთი", en: "Cucumber, tomato and Kakhetian oil", ru: "Огурцы, помидоры и кахетинское масло"}, img: "image/placeholder.png" },
        { name: {ka: "ნადუღი", en: "Nadughi", ru: "Надуги"}, price: "14₾", desc: {ka: "პიტნით სულგუნის ფირფიტებში", en: "With mint in sulguni leaves", ru: "С мятой в листах сулугуни"}, img: "image/placeholder.png" },
        { name: {ka: "მჟავის ასორტი", en: "Assorted Pickles", ru: "Ассорти солений"}, price: "10₾", desc: {ka: "ჯონჯოლი, კიტრი, წიწაკა", en: "Jonjoli, cucumber, pepper", ru: "Джонджоли, огурцы, перец"}, img: "image/placeholder.png" },
        { name: {ka: "კუჭმაჭი ნიგვზით", en: "Kuchmachi with Walnuts", ru: "Кучмачи с орехами"}, price: "16₾", desc: {ka: "მოხარშული შიგნეული ნიგვზით", en: "Cooked offal with walnuts", ru: "Отварные потроха с орехами"}, img: "image/placeholder.png" },
        { name: {ka: "გებჟალია", en: "Gebjalia", ru: "Гебжалия"}, price: "18₾", desc: {ka: "სულგუნის რულეტი პიტნით", en: "Sulguni roll with mint", ru: "Рулет из сулугуни с мятой"}, img: "image/placeholder.png" },
        { name: {ka: "მწვანე ლობიო", en: "Green Beans", ru: "Зеленая фасоль"}, price: "12₾", desc: {ka: "ნიგვზით და სუნელებით", en: "With walnuts and spices", ru: "С орехами и специями"}, img: "image/placeholder.png" },
        { name: {ka: "ქათმის სალათი", en: "Chicken Salad", ru: "Куриный салат"}, price: "14₾", desc: {ka: "მაიონეზით და მწვანილებით", en: "With mayo and herbs", ru: "С майонезом и зеленью"}, img: "image/placeholder.png" }
    ],
    hot: [
        { name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, price: "1.5₾", desc: {ka: "მოხეური, საქონლის და ღორის ხორცით", en: "Classic with beef and pork", ru: "Классические с говядиной и свининой"}, img: "image/placeholder.png" },
        { name: {ka: "მწვადი ღორის", en: "Pork Mtsvadi", ru: "Свиной шашлык"}, price: "20₾", desc: {ka: "ნაკვერჩხალზე შემწვარი", en: "Grilled on coals", ru: "Приготовлено на углях"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაქაფული", en: "Chakapuli", ru: "Чакапули"}, price: "25₾", desc: {ka: "ხბოს ხორცი ტყემლით და მწვანილით", en: "Veal with tkhali and herbs", ru: "Телятина с ткемали и зеленью"}, img: "image/placeholder.png" },
        { name: {ka: "შქმერული", en: "Shkmeruli", ru: "Шкмерули"}, price: "28₾", desc: {ka: "წიწილა ნივრიან სოუსში", en: "Chicken in garlic sauce", ru: "Цыпленок в чесночном соусе"}, img: "image/placeholder.png" },
        { name: {ka: "ოჯახური ღორის", en: "Ojakhuri Pork", ru: "Оджахури свиной"}, price: "18₾", desc: {ka: "ხორცი შემწვარი კარტოფილით", en: "Meat with fried potatoes", ru: "Мясо с жареным картофелем"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაშუშული", en: "Chashushuli", ru: "Чашушули"}, price: "22₾", desc: {ka: "ხბოს ხორცი პომიდვრის სოუსში", en: "Veal in tomato sauce", ru: "Телятина в томатном соусе"}, img: "image/placeholder.png" },
        { name: {ka: "ხბოს მწვადი", en: "Veal Mtsvadi", ru: "Телячий шашлык"}, price: "24₾", desc: {ka: "ნაზი ხბოს რბილი ხორცი", en: "Tender veal meat", ru: "Нежное телячье мясо"}, img: "image/placeholder.png" },
        { name: {ka: "აფხაზურა", en: "Abkhazura", ru: "Абхазура"}, price: "16₾", desc: {ka: "შემწვარი კატლეტი ბროწეულით", en: "Fried meatballs with pomegranate", ru: "Жареные котлеты с гранатом"}, img: "image/placeholder.png" },
        { name: {ka: "კუჭმაჭი ცხელი", en: "Hot Kuchmachi", ru: "Кучмачи горячий"}, price: "15₾", desc: {ka: "შიგნეული კეცზე", en: "Offal on ketsi", ru: "Потроха на кеци"}, img: "image/placeholder.png" },
        { name: {ka: "სოკო კეცზე", en: "Mushrooms on Ketsi", ru: "Грибы на кеци"}, price: "12₾", desc: {ka: "სულგუნით ან მის გარეშე", en: "With or without sulguni", ru: "С сулугуни или без"}, img: "image/placeholder.png" }
    ],
    tsomeuli: [
        { name: {ka: "იმერული ხაჭაპური", en: "Imeretian Khachapuri", ru: "Имеретинский хачапури"}, price: "16₾", desc: {ka: "კლასიკური ყველით", en: "Classic with cheese", ru: "Классика с сыром"}, img: "image/placeholder.png" },
        { name: {ka: "აჭარული", en: "Adjaruli", ru: "Аджарули"}, price: "18₾", desc: {ka: "ნედლი ყველით და კვერცხით", en: "With fresh cheese and egg", ru: "Со свежим сыром и яйцом"}, img: "image/placeholder.png" },
        { name: {ka: "ლობიანი", en: "Lobiani", ru: "Лобиани"}, price: "12₾", desc: {ka: "ლორით ან მის გარეშე", en: "With or without ham", ru: "С ветчиной или без"}, img: "image/placeholder.png" },
        { name: {ka: "მეგრული ხაჭაპური", en: "Megrelian Khachapuri", ru: "Мегрельский хачапури"}, price: "20₾", desc: {ka: "ორმაგი ყველით", en: "With double cheese", ru: "С двойным сыром"}, img: "image/placeholder.png" },
        { name: {ka: "ხაბიზგინა", en: "Khabizgina", ru: "Хабизгина"}, price: "17₾", desc: {ka: "კარტოფილით და ყველით", en: "With potato and cheese", ru: "С картофелем и сыром"}, img: "image/placeholder.png" },
        { name: {ka: "მჭადი", en: "Mchadi", ru: "Мчади"}, price: "2₾", desc: {ka: "სიმინდის კვერი", en: "Cornbread", ru: "Кукурузная лепешка"}, img: "image/placeholder.png" },
        { name: {ka: "ჭვიშტარი", en: "Chvishtari", ru: "Чвиштари"}, price: "5₾", desc: {ka: "მჭადი ყველით", en: "Cornbread with cheese", ru: "Лепешка с сыром"}, img: "image/placeholder.png" },
        { name: {ka: "სვანური ლემზირი", en: "Svan Lemziri", ru: "Сванский лемзири"}, price: "14₾", desc: {ka: "სვანური ტრადიციული პური", en: "Traditional Svan bread", ru: "Традиционный сванский хлеб"}, img: "image/placeholder.png" },
        { name: {ka: "კუბდარი", en: "Kubdari", ru: "Кубдари"}, price: "18₾", desc: {ka: "ცომეული ხორცის გულსართით", en: "Meat filled pastry", ru: "Выпечка с мясом"}, img: "image/placeholder.png" },
        { name: {ka: "პური (შოთი)", en: "Bread (Shoti)", ru: "Хлеб (Шоти)"}, price: "2₾", desc: {ka: "თონეში გამომცხვარი", en: "Baked in tone", ru: "Печеный в тонэ"}, img: "image/placeholder.png" }
    ],
    drinks: [
        { name: {ka: "საფერავი (0.75ლ)", en: "Saperavi", ru: "Саперави"}, price: "45₾", desc: {ka: "ქვევრის წითელი მშრალი", en: "Qvevri dry red", ru: "Сухое красное из квеври"}, img: "image/placeholder.png" },
        { name: {ka: "წინანდალი (0.75ლ)", en: "Tsinandali", ru: "Цинандали"}, price: "35₾", desc: {ka: "თეთრი მშრალი ღვინო", en: "White dry wine", ru: "Белое сухое вино"}, img: "image/placeholder.png" },
        { name: {ka: "ბორჯომი", en: "Borjomi", ru: "Боржоми"}, price: "3₾", desc: {ka: "მინერალური წყალი", en: "Mineral water", ru: "Минеральная вода"}, img: "image/placeholder.png" },
        { name: {ka: "ნაბეღლავი", en: "Nabeghlavi", ru: "Набеглави"}, price: "3₾", desc: {ka: "გაზიანი წყალი", en: "Sparkling water", ru: "Газированная вода"}, img: "image/placeholder.png" },
        { name: {ka: "ნატახტარი", en: "Natakhtari", ru: "Натахтари"}, price: "4₾", desc: {ka: "ლიმონათი (სხვადასხვა)", en: "Assorted Lemonade", ru: "Лимонад в ассортименте"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაი", en: "Tea", ru: "Чай"}, price: "5₾", desc: {ka: "ქართული შავი ან მწვანე", en: "Georgian black or green", ru: "Грузинский черный или зеленый"}, img: "image/placeholder.png" },
        { name: {ka: "ყავა თურქული", en: "Turkish Coffee", ru: "Кофе по-турецки"}, price: "5₾", desc: {ka: "ქვიშაზე მომზადებული", en: "Sand-brewed coffee", ru: "Кофе на песке"}, img: "image/placeholder.png" },
        { name: {ka: "ლუდი", en: "Beer", ru: "Пиво"}, price: "6₾", desc: {ka: "ქართული ჩამოსასხმელი", en: "Georgian draft beer", ru: "Грузинское разливное"}, img: "image/placeholder.png" },
        { name: {ka: "არაყი (0.1ლ)", en: "Vodka", ru: "Водка"}, price: "8₾", desc: {ka: "ჭაჭა ან კლასიკური", en: "Chacha or classic", ru: "Чача или классика"}, img: "image/placeholder.png" },
        { name: {ka: "ხილის წვენი", en: "Fruit Juice", ru: "Фруктовый сок"}, price: "10₾", desc: {ka: "ნატურალური ასორტი", en: "Natural assorted", ru: "Натуральное ассорти"}, img: "image/placeholder.png" }
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
                    <img src="${item.img || 'image/placeholder.png'}" class="item-img" alt="dish" onerror="this.src='image/placeholder.png'">
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
    document.getElementById('current-lang-display').querySelector('img').src = flagSrc;
    document.getElementById('current-lang-display').querySelector('span').textContent = langText;
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
