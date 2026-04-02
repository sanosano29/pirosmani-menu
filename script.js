const translations = {
    ka: {
        nav_cold: "ცივი", nav_hot: "ცხელი", nav_tsomeuli: "ცომეული", nav_drinks: "სასმელი", 
        menu_label: "მენიუ", hero_title: "კეთილი იყოს თქვენი მობრძანება", hero_tagline: "ქართული გემო", 
        footer_text: "© 2026 რესტორანი „ფიროსმანი“"
    },
    en: {
        nav_cold: "Cold Starters", nav_hot: "Hot Dishes", nav_tsomeuli: "Bakery", nav_drinks: "Beverages", 
        menu_label: "Menu", hero_title: "Welcome to Our Restaurant", hero_tagline: "Georgian Taste", 
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
           name: {
            ka: "სტეიკის სალათი", // ქართული სახელი
            en: "Steak Salad",     // ინგლისური სახელი
            ru: "Салат со стейком" // რუსული სახელი
        }, 
        price: "25₾", // ფასიც შეგიძლია შეცვალო
        desc: {
            ka: "შემწვარი სტეიკი ბოსტნეულით", 
            en: "Grilled steak with fresh vegetables", 
            ru: "Жареный стейк со свежими овощами"
        },
            img: "image/kerdzi-civi1.jpg" 
        },
        { 
            name: {ka: "ყველის დაფა", en: "Georgian Cheese Board", ru: "Сырное ассорти"}, 
            price: "28₾", 
            desc: {ka: "იმერული, სულგუნი და გუდა", en: "Imeretian, Sulguni, and Guda cheese", ru: "Имеретинский, сулугуни и гуда"}, 
            img: "image/placeholder.png" 
        },
        { 
            name: {ka: "ბადრიჯანი ნიგვზით", en: "Eggplant with Walnuts", ru: "Баклажаны с орехами"}, 
            price: "15₾", 
            desc: {ka: "ნიგვზის საკაზმით და ბროწეულით", en: "With walnut filling and pomegranate", ru: "С ореховой начинкой и гранатом"}, 
            img: "image/placeholder.png" 
        }
        // ... შეგიძლია დაამატო დანარჩენი კერძებიც იგივე პრინციპით
    ],
    hot: [
        { 
            name: {ka: "ხინკალი", en: "Khinkali", ru: "Хинкали"}, 
            price: "1.5₾", 
            desc: {ka: "საქონლის და ღორის ხორცით (ცალი)", en: "With beef and pork (per piece)", ru: "С говядиной и свининой (за шт.)"}, 
            img: "image/placeholder.png" 
        }
    ],
    tsomeuli: [
        { 
            name: {ka: "აჭარული ხაჭაპური", en: "Adjaruli Khachapuri", ru: "Хачапури по-аджарски"}, 
            price: "18₾", 
            desc: {ka: "ნედლი ყველით და კვერცხით", en: "Boat-shaped bread with cheese and egg", ru: "Хачапури-лодочка с сыром и яйцом"}, 
            img: "image/placeholder.png" 
        }
    ],
    drinks: [
        { 
            name: {ka: "საფერავი (0.75ლ)", en: "Saperavi (0.75L)", ru: "Саперави (0.75л)"}, 
            price: "45₾", 
            desc: {ka: "ქვევრის მშრალი წითელი ღვინო", en: "Premium Qvevri dry red wine", ru: "Красное сухое вино из квеври"}, 
            img: "image/placeholder.png" 
        }
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
