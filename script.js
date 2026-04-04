const translations = {
    ka: {
        nav_cold: "ცივი", nav_hot: "ცხელი", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელი", 
        menu_label: "მენიუ", hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემო", 
        footer_text: "© 2026 რესტორანი „ფიროსმანი“"
    },
    en: {
        nav_cold: "Cold Starters", nav_hot: "Main Courses", nav_tsomeuli: "Bakery", nav_drinks: "Beverages", 
        menu_label: "Menu", hero_title: "Welcome to Our Restaurant", hero_tagline: "Authentic Georgian Taste", 
        footer_text: "© 2026 Pirosmani Restaurant"
    },
    ru: {
        nav_cold: "Холодные закуски", nav_hot: "Горячие блюда", nav_tsomeuli: "Выпечка", nav_drinks: "Напитки", 
        menu_label: "Меню", hero_title: "Добро пожаловать в ресторан", hero_tagline: "Грузинский вкус", 
        footer_text: "© 2026 Ресторан «Пиросмани»"
    }
};

const menuItemsData = {
    cold: [
        { 
            name: {ka: "ქათმის სალათი", en: "Chicken Salad", ru: "Куриный салат"}, 
            price: "18₾", 
            desc: {ka: "მოხარშული ქათმის ფილე ახალი ბოსტნეულით", en: "Boiled chicken fillet with fresh vegetables", ru: "Отварное куриное филе со свежими овощами"}, 
            img: "image/qatmis-salata.jpg" 
        },
        { 
            name: {ka: "სტეიკის სალათი", en: "Steak Salad", ru: "Салат со стейком"}, 
            price: "25₾", 
            desc: {ka: "შემწვარი სტეიკი ახალი ბოსტნეულით", en: "Grilled steak with fresh garden vegetables", ru: "Стейк на гриле со свежими овощами"}, 
            img: "image/steikis-salati.jpg" 
        },
        { 
            name: {ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with Walnuts", ru: "Баклажаны с орехами"}, 
            price: "15₾", 
            desc: {ka: "ნიგვზის საკაზმით და ბროწეულით", en: "With walnut filling and pomegranate", ru: "С ореховой начинкой и гранатом"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "ყველის დაფა", en: "Cheese Board", ru: "Сырное ассорти"}, 
            price: "28₾", 
            desc: {ka: "იმერული, სულგუნი და გუდა", en: "Imeretian, Sulguni, and Guda cheese", ru: "Имеретинский, сулугуни и гуда"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "ქართული სალათი", en: "Georgian Salad", ru: "Грузинский салат"}, 
            price: "12₾", 
            desc: {ka: "კიტრი, პომიდორი და კახური ზეთი", en: "Cucumber, tomato, and Kakhetian oil", ru: "Огурцы, помидоры и кахетинское масло"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "ნადუღი", en: "Nadughi", ru: "Надуги"}, 
            price: "14₾", 
            desc: {ka: "პიტნით სულგუნის ფირფიტებში", en: "Minted cottage cheese in sulguni leaves", ru: "Творожный сыр с мятой в сулугуни"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "მჟავის ასორტი", en: "Assorted Pickles", ru: "Ассорти солений"}, 
            price: "10₾", 
            desc: {ka: "ჯონჯოლი, კიტრი და წიწაკა", en: "Jonjoli, cucumber, and hot peppers", ru: "Джонджоли, огурцы и перец"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "კუჭმაჭი ნიგვზით", en: "Kuchmachi with Walnuts", ru: "Кучмачи с орехами"}, 
            price: "16₾", 
            desc: {ka: "მოხარშული შიგნეული ნიგვზით", en: "Traditional offal with walnuts", ru: "Отварные потроха с орехами"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "გებჟალია", en: "Gebjalia", ru: "Гебжалия"}, 
            price: "18₾", 
            desc: {ka: "სულგუნის რულეტი პიტნით", en: "Sulguni rolls with mint and matsoni", ru: "Рулетики из сулугуни с мятой"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "მწვანე ლობიო", en: "Green Beans", ru: "Зеленая фасоль"}, 
            price: "12₾", 
            desc: {ka: "ნიგვზით და ქართული სუნელებით", en: "With ground walnuts and Georgian spices", ru: "С грецким орехом и специями"}, 
            img: "image/placeholder.png" 
        }
    ],
    hot: [
        { name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, price: "1.5₾", desc: {ka: "საქონლის და ღორის ხორცით (ცალი)", en: "With beef and pork (per piece)", ru: "С говядиной и свининой (за шт.)"}, img: "image/xinkali.jpg" },
        { name: {ka: "მწვადი ღორის", en: "Pork Mtsvadi", ru: "Свиной шашлык"}, price: "20₾", desc: {ka: "ნაკვერჩხალზე შემწვარი", en: "Grilled on coals", ru: "На углях"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაქაფული", en: "Chakapuli", ru: "Чакапули"}, price: "25₾", desc: {ka: "ხბოს ხორცი ტყემლით", en: "Veal stew with tarragon and plums", ru: "Телятина с тархуном"}, img: "image/placeholder.png" },
        { name: {ka: "შქმერული", en: "Shkmeruli", ru: "Шкмерули"}, price: "28₾", desc: {ka: "წიწილა ნივრიან სოუსში", en: "Chicken in creamy garlic sauce", ru: "Цыпленок в чесночном соусе"}, img: "image/placeholder.png" },
        { name: {ka: "ოჯახური", en: "Ojakhuri", ru: "Оджахури"}, price: "18₾", desc: {ka: "ხორცი შემწვარი კარტოფილით", en: "Fried meat with potatoes", ru: "Мясо с картофелем"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაშუშული", en: "Chashushuli", ru: "Чашушули"}, price: "22₾", desc: {ka: "ხბოს ხორცი პომიდორში", en: "Veal in tomato sauce", ru: "Телятина в томате"}, img: "image/placeholder.png" },
        { name: {ka: "ხბოს მწვადი", en: "Veal Mtsvadi", ru: "Телячий шашлык"}, price: "24₾", desc: {ka: "ნაზი ხბოს რბილი ხორცი", en: "Tender veal BBQ", ru: "Телячий шашлык на углях"}, img: "image/placeholder.png" },
        { name: {ka: "აფხაზურა", en: "Abkhazura", ru: "Абхазура"}, price: "16₾", desc: {ka: "შემწვარი კატლეტი ბროწეულით", en: "Spicy meatballs with pomegranate", ru: "Острые котлеты с гранатом"}, img: "image/placeholder.png" },
        { name: {ka: "კუჭმაჭი კეცზე", en: "Kuchmachi on Ketsi", ru: "Кучмачи на кеци"}, price: "15₾", desc: {ka: "შიგნეული სუნელებით", en: "Fried offal with spices", ru: "Жареные потроха"}, img: "image/placeholder.png" },
        { name: {ka: "სოკო კეცზე", en: "Mushrooms on Ketsi", ru: "Грибы на кеци"}, price: "12₾", desc: {ka: "სულგუნით ან მის გარეშე", en: "With or without sulguni", ru: "Грибы с сулугуни"}, img: "image/placeholder.png" }
    ],
    tsomeuli: [
        { name: {ka: "იმერული ხაჭაპური", en: "Imeretian Khachapuri", ru: "Имеретинский хачапури"}, price: "16₾", desc: {ka: "კლასიკური ხაჭაპური ყველით", en: "Traditional cheese bread", ru: "Классический хачапури"}, img: "image/placeholder.png" },
        { name: {ka: "აჭარული ხაჭაპური", en: "Adjaruli Khachapuri", ru: "Хачапури по-аджарски"}, price: "18₾", desc: {ka: "ნედლი ყველით და კვერცხით", en: "Boat-shaped bread with egg", ru: "Лодочка с яйцом"}, img: "image/placeholder.png" },
        { name: {ka: "ლობიანი", en: "Lobiani", ru: "Лобиани"}, price: "12₾", desc: {ka: "ლორით ან მის გარეშე", en: "Bean-filled bread", ru: "Лепешка с фасолью"}, img: "image/placeholder.png" },
        { name: {ka: "მეგრული ხაჭაპური", en: "Megrelian Khachapuri", ru: "Мегрельский хачапури"}, price: "20₾", desc: {ka: "ორმაგი ყველით", en: "With extra cheese on top", ru: "С двойным сыром"}, img: "image/placeholder.png" },
        { name: {ka: "ხაბიზგინა", en: "Khabizgina", ru: "Хабизгина"}, price: "17₾", desc: {ka: "კარტოფილით და ყველით", en: "Bread with potato and cheese", ru: "С картофелем и сыром"}, img: "image/placeholder.png" },
        { name: {ka: "მჭადი", en: "Mchadi", ru: "Мчади"}, price: "2₾", desc: {ka: "სიმინდის კვერი", en: "Traditional cornbread", ru: "Кукурузная лепешка"}, img: "image/placeholder.png" },
        { name: {ka: "ჭვიშტარი", en: "Chvishtari", ru: "Чвиштари"}, price: "5₾", desc: {ka: "მჭადი ყველით", en: "Cornbread with cheese", ru: "Лепешка с сыром"}, img: "image/placeholder.png" },
        { name: {ka: "ლემზირი", en: "Lemziri", ru: "Лемзири"}, price: "14₾", desc: {ka: "სვანური რიტუალური პური", en: "Traditional Svan bread", ru: "Сванский хлеб"}, img: "image/placeholder.png" },
        { name: {ka: "კუბდარი", en: "Kubdari", ru: "Кубдари"}, price: "18₾", desc: {ka: "ხორცის გულსართით", en: "Meat-filled bread with spices", ru: "Лепешка с мясом"}, img: "image/placeholder.png" },
        { name: {ka: "შოთის პური", en: "Shoti Bread", ru: "Хлеб Шоти"}, price: "2₾", desc: {ka: "თონეში გამომცხვარი", en: "Baked in a clay oven", ru: "Хлеб из печи"}, img: "image/placeholder.png" }
    ],
    drinks: [
        { name: {ka: "საფერავი (0.75ლ)", en: "Saperavi (0.75L)", ru: "Саперави (0.75л)"}, price: "45₾", desc: {ka: "ქვევრის მშრალი წითელი", en: "Qvevri dry red wine", ru: "Красное сухое из квеври"}, img: "image/placeholder.png" },
        { name: {ka: "წინანდალი (0.75ლ)", en: "Tsinandali (0.75L)", ru: "Цинандали (0.75л)"}, price: "35₾", desc: {ka: "თეთრი მშრალი ღვინო", en: "Dry white wine", ru: "Белое сухое вино"}, img: "image/placeholder.png" },
        { name: {ka: "ბორჯომი", en: "Borjomi", ru: "Боржоми"}, price: "3₾", desc: {ka: "მინერალური წყალი", en: "Sparkling mineral water", ru: "Минеральная вода"}, img: "image/placeholder.png" },
        { name: {ka: "ნაბეღლავი", en: "Nabeghlavi", ru: "Набеглави"}, price: "3₾", desc: {ka: "გაზიანი მინერალური წყალი", en: "Sparkling water", ru: "Газированная вода"}, img: "image/placeholder.png" },
        { name: {ka: "ნატახტარი", en: "Natakhtari", ru: "Натахтари"}, price: "4₾", desc: {ka: "ლიმონათი ასორტი", en: "Assorted Lemonade", ru: "Лимонад"}, img: "image/placeholder.png" },
        { name: {ka: "ჩაი", en: "Tea", ru: "Чай"}, price: "5₾", desc: {ka: "შავი ან მწვანე", en: "Black or green tea", ru: "Черный или зеленый чай"}, img: "image/placeholder.png" },
        { name: {ka: "ყავა ქვიშაზე", en: "Sand Coffee", ru: "Кофе на песке"}, price: "5₾", desc: {ka: "ტრადიციული მეთოდით", en: "Traditionally brewed", ru: "Традиционный метод"}, img: "image/placeholder.png" },
        { name: {ka: "ლუდი", en: "Local Beer", ru: "Пиво"}, price: "6₾", desc: {ka: "ქართული ჩამოსასხმელი", en: "Fresh draft beer", ru: "Разливное пиво"}, img: "image/placeholder.png" },
        { name: {ka: "ჭაჭა (0.1ლ)", en: "Chacha (0.1L)", ru: "Чача (0.1л)"}, price: "8₾", desc: {ka: "ტრადიციული არაყი", en: "Traditional brandy", ru: "Традиционная чача"}, img: "image/placeholder.png" },
        { name: {ka: "ხილის წვენი", en: "Fresh Juice", ru: "Свежий сок"}, price: "10₾", desc: {ka: "ნატურალური ასორტი", en: "100% Natural juice", ru: "Натуральный сок"}, img: "image/placeholder.png" }
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
}

window.onload = () => {
    const savedLang = localStorage.getItem('p_lang') || 'ka';
    const savedFlag = savedLang === 'ka' ? 'https://flagcdn.com/w40/ge.png' : savedLang === 'en' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/ru.png';
    const savedText = savedLang === 'ka' ? 'GEO' : savedLang === 'en' ? 'ENG' : 'RUS';
    
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
