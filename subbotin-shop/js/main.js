// === Данные товаров с описаниями ===
const products = [
    {
        id: 1,
        name: 'Колпаки из нержавейки 22.5 ступичный Scania (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-scania.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков Scania. Защищают ступицу от грязи и повреждений. Комплект 2 штуки.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'Scania' }
        ]
    },
    {
        id: 2,
        name: 'Колпаки из нержавейки 22.5 ступичный Volvo (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-volvo.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков Volvo. Долговечные и устойчивые к коррозии.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'Volvo' }
        ]
    },
    {
        id: 3,
        name: 'Колпаки из нержавейки 22.5 ступичный Mercedes (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-mercedes.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков Mercedes. Подчёркивают стиль вашего автомобиля.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'Mercedes' }
        ]
    },
    {
        id: 4,
        name: 'Колпаки из нержавейки 22.5 ступичный DAF (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-daf.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков DAF. Высокое качество и долговечность.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'DAF' }
        ]
    },
    {
        id: 5,
        name: 'Колпаки из нержавейки 22.5 ступичный КАМАЗ (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-kamaz.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков КАМАЗ. Надёжная защита ступицы.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'КАМАЗ' }
        ]
    },
    {
        id: 6,
        name: 'Колпаки из нержавейки 22.5 ступичный Schmitz (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-schmitz.jpg',
        desc: 'Колпаки из нержавеющей стали для полуприцепов Schmitz. Идеально подходят для прицепной техники.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'Schmitz' }
        ]
    },
    {
        id: 7,
        name: 'Колпаки из нержавейки 22.5 ступичный пустые (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-empty.jpg',
        desc: 'Универсальные колпаки из нержавеющей стали без логотипа. Подходят для любых марок грузовиков.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Логотип', value: 'Отсутствует' }
        ]
    },
    {
        id: 8,
        name: 'Колпаки из нержавейки 22.5 передние',
        price: 8500,
        category: 'caps',
        img: 'img/cap-front.jpg',
        desc: 'Передние колпаки из нержавеющей стали для грузовиков. Большой диаметр, надёжное крепление.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'Передние' }
        ]
    },
    {
        id: 9,
        name: 'Колпаки из нержавейки 22.5 задние',
        price: 9000,
        category: 'caps',
        img: 'img/cap-rear.jpg',
        desc: 'Задние колпаки из нержавеющей стали для грузовиков. Устойчивы к высоким нагрузкам.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'Задние' }
        ]
    },
    {
        id: 10,
        name: 'Колпаки из нержавейки на газель r16',
        price: 15000,
        category: 'caps',
        img: 'img/cap-gazel.jpg',
        desc: 'Колпаки из нержавеющей стали для Газели. Радиус R16, комплект 2 штуки.',
        specs: [
            { label: 'Радиус', value: 'R16' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марка', value: 'Газель' }
        ]
    },
    {
        id: 11,
        name: 'Колпаки из нержавейки 22.5 ступичный половинчатые',
        price: 3600,
        category: 'caps',
        img: 'img/cap-half.jpg',
        desc: 'Половинчатые колпаки из нержавеющей стали. Удобны для быстрой установки.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'Половинчатые' }
        ]
    },
    {
        id: 12,
        name: 'Колпаки из нержавейки 22.5 на ступицу',
        price: 3600,
        category: 'caps',
        img: 'img/cap-hub.jpg',
        desc: 'Колпаки на ступицу из нержавеющей стали. Защищают ступичные узлы от грязи.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'На ступицу' }
        ]
    },
    {
        id: 13,
        name: 'Колпачки на гайки нержавейка',
        price: 110,
        category: 'accessories',
        img: 'img/nuts.jpg',
        desc: 'Декоративные колпачки на гайки из нержавеющей стали. Придают аккуратный вид колёсам.',
        specs: [
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'Колпачки на гайки' }
        ]
    },
    {
        id: 14,
        name: 'Шипцы для снятия колпачков с гайками',
        price: 800,
        category: 'accessories',
        img: 'img/pliers.jpg',
        desc: 'Специальные шипцы для быстрого и безопасного снятия колпачков с гаек.',
        specs: [
            { label: 'Тип', value: 'Инструмент' },
            { label: 'Назначение', value: 'Снятие колпачков' }
        ]
    },
    {
        id: 15,
        name: 'Ремкомплект для колпаков R 22,5',
        price: 900,
        category: 'accessories',
        img: 'img/repair-kit.jpg',
        desc: 'Ремкомплект для колпаков R22.5. Включает все необходимые крепёжные элементы.',
        specs: [
            { label: 'Радиус', value: 'R22.5' },
            { label: 'Состав', value: 'Крепёжные элементы' }
        ]
    },
    {
        id: 16,
        name: 'Колпаки для грузовиков 22,5 лучи',
        price: 1000,
        category: 'accessories',
        img: 'img/spokes.jpg',
        desc: 'Декоративные колпаки-лучи для грузовиков. Придают стильный вид колёсам.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Тип', value: 'Лучи' }
        ]
    },
    {
        id: 17,
        name: 'Крепления к колпакам на колеса р 22.5 Лучи',
        price: 700,
        category: 'accessories',
        img: 'img/mounts.jpg',
        desc: 'Крепления для установки колпаков-лучей на колёса R22.5.',
        specs: [
            { label: 'Радиус', value: 'R22.5' },
            { label: 'Тип', value: 'Крепления для лучей' }
        ]
    },
    {
        id: 18,
        name: 'Колпаки из нержавейки 22.5 на грузовик 135мм',
        price: 8500,
        category: 'caps',
        img: 'img/cap-truck-135.jpg',
        desc: 'Колпаки из нержавеющей стали для грузовиков. Диаметр 135 мм, надёжное крепление.',
        specs: [
            { label: 'Диаметр', value: '135 мм' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Тип', value: 'Для грузовиков' }
        ]
    },
    {
        id: 19,
        name: 'Ремкомплект для колпаков R 22,5 (10 штук)',
        price: 900,
        category: 'accessories',
        img: 'img/repair-kit-10.jpg',
        desc: 'Ремкомплект для колпаков R22.5, комплект 10 штук. Включает все необходимые элементы.',
        specs: [
            { label: 'Радиус', value: 'R22.5' },
            { label: 'Количество', value: '10 шт' }
        ]
    },
    {
        id: 20,
        name: 'Ремкомплект для колпаков нержавейка (10 штук)',
        price: 1800,
        category: 'accessories',
        img: 'img/repair-kit-10-steel.jpg',
        desc: 'Ремкомплект из нержавеющей стали для колпаков. Комплект 10 штук, высокое качество.',
        specs: [
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '10 шт' }
        ]
    },
    {
        id: 21,
        name: 'Колпаки для грузовиков 22,5 лучи цветные (4 шт)',
        price: 1000,
        category: 'accessories',
        img: 'img/spokes-color.jpg',
        desc: 'Цветные колпаки-лучи для грузовиков. Комплект 4 штуки разных цветов: белый, чёрный, серый, красный.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Количество', value: '4 шт' },
            { label: 'Цвета', value: 'Белый, чёрный, серый, красный' }
        ]
    },
    {
        id: 22,
        name: 'Колпаки из нержавейки на Газель/IVECO Daily R16 задние (2 шт)',
        price: 13950,
        category: 'caps',
        img: 'img/cap-gazel-r16-2.jpg',
        desc: 'Задние колпаки из нержавеющей стали для Газель и IVECO Daily. Радиус R16, комплект 2 штуки.',
        specs: [
            { label: 'Радиус', value: 'R16' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '2 шт' },
            { label: 'Марки', value: 'Газель, IVECO Daily' }
        ]
    },
    {
        id: 23,
        name: 'Колпаки лучи 22.5 с логотипом Mercedes',
        price: 1120,
        category: 'accessories',
        img: 'img/spokes-mercedes.jpg',
        desc: 'Колпак-луч с логотипом Mercedes для грузовиков. Диаметр 22.5 дюйма.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Логотип', value: 'Mercedes' },
            { label: 'Тип', value: 'Луч' }
        ]
    },
    {
        id: 24,
        name: 'Колпаки из нержавейки Газель r16 (4 шт)',
        price: 19110,
        category: 'caps',
        img: 'img/cap-gazel-r16-4.jpg',
        desc: 'Колпаки из нержавеющей стали для Газели. Радиус R16, комплект 4 штуки.',
        specs: [
            { label: 'Радиус', value: 'R16' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Количество', value: '4 шт' },
            { label: 'Марка', value: 'Газель' }
        ]
    },
    {
        id: 25,
        name: 'Крепления к Колпакам на колеса р 22.5 (на ось и прицеп)',
        price: 700,
        category: 'accessories',
        img: 'img/mounts-axle.jpg',
        desc: 'Крепления для колпаков на ведущую ось и прицеп. Универсальные, подходят для большинства грузовиков.',
        specs: [
            { label: 'Радиус', value: 'R22.5' },
            { label: 'Тип', value: 'На ось и прицеп' }
        ]
    },
    {
        id: 26,
        name: 'Колпаки из нержавейки 22.5 с логотипом (набор)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-logo-set.jpg',
        desc: 'Колпаки из нержавеющей стали с логотипом. Универсальный набор для грузовиков.',
        specs: [
            { label: 'Диаметр', value: '22.5 дюйма' },
            { label: 'Материал', value: 'Нержавеющая сталь' },
            { label: 'Логотип', value: 'Есть' }
        ]
    }
];

// === Корзина ===
let cart = [];

// === Переключение вкладок ===
const navLinks = document.querySelectorAll('.nav-link, .footer-col a[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.dataset.tab;

        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(l => l.classList.add('active'));

        tabContents.forEach(t => t.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// === Рендер товаров ===
const productsGrid = document.getElementById('productsGrid');

function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.textContent='Фото товара';">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price.toLocaleString('ru-RU')} руб.</div>
                <div class="product-location">Владимирская обл., Гороховец</div>
                <button class="add-to-cart" data-id="${product.id}">В корзину</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Клик по карточке — открыть товар
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) return;
            openProductModal(filtered[index].id);
        });
    });

    // Кнопки "В корзину"
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });
}

// === Фильтры ===
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// === Модальное окно товара ===
let currentProductId = null;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentProductId = id;

    document.getElementById('productModalTitle').textContent = 'Товар';
    document.getElementById('productModalName').textContent = product.name;
    document.getElementById('productModalPrice').textContent = product.price.toLocaleString('ru-RU') + ' руб.';
    document.getElementById('productModalDesc').textContent = product.desc;
    document.getElementById('productModalImg').src = product.img;
    document.getElementById('productModalImg').alt = product.name;

    const specsList = document.getElementById('productModalSpecs');
    specsList.innerHTML = '';
    if (product.specs) {
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${spec.label}</span><strong>${spec.value}</strong>`;
            specsList.appendChild(li);
        });
    }

    document.getElementById('productModal').classList.add('active');
}

document.getElementById('productClose').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('active');
});

document.getElementById('productAddToCart').addEventListener('click', () => {
    if (currentProductId) {
        addToCart(currentProductId);
        document.getElementById('productModal').classList.remove('active');
    }
});

// === Корзина ===
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    document.getElementById('cartCount').textContent = count;

    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartBody.innerHTML = '<p class="cart-empty">Корзина пуста</p>';
        cartFooter.style.display = 'none';
    } else {
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span class="cart-item-name">${item.name} x${item.qty}</span>
                <span class="cart-item-price">${(item.price * item.qty).toLocaleString('ru-RU')} руб.</span>
                <button class="cart-item-remove" data-id="${item.id}">&times;</button>
            </div>
        `).join('');
        cartFooter.style.display = 'flex';
        document.getElementById('cartTotal').textContent = total.toLocaleString('ru-RU');

        cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
        });
    }
}

// === Модальное окно корзины ===
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartClose = document.getElementById('cartClose');

cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
cartClose.addEventListener('click', () => cartModal.classList.remove('active'));
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('active');
});

// === Оформление заказа ===
const checkoutBtn = document.getElementById('checkoutBtn');
const orderModal = document.getElementById('orderModal');
const orderClose = document.getElementById('orderClose');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const successModal = document.getElementById('successModal');
const successClose = document.getElementById('successClose');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    let summaryHTML = '<h4>Ваш заказ:</h4>';
    cart.forEach(item => {
        summaryHTML += `
            <div class="order-item">
                <span>${item.name} x${item.qty}</span>
                <span>${(item.price * item.qty).toLocaleString('ru-RU')} руб.</span>
            </div>
        `;
    });
    summaryHTML += `
        <div class="order-total">
            <span>Итого:</span>
            <span>${total.toLocaleString('ru-RU')} руб.</span>
        </div>
    `;

    orderSummary.innerHTML = summaryHTML;

    cartModal.classList.remove('active');
    orderModal.classList.add('active');
});

orderClose.addEventListener('click', () => orderModal.classList.remove('active'));
orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) orderModal.classList.remove('active');
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const email = document.getElementById('orderEmail').value;
    const comment = document.getElementById('orderComment').value;

    // Здесь можно отправить данные на сервер или в Telegram
    console.log('Заказ:', { name, phone, email, comment, cart });

    orderModal.classList.remove('active');
    orderForm.reset();
    cart = [];
    updateCart();

    successModal.classList.add('active');
});

successClose.addEventListener('click', () => successModal.classList.remove('active'));
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) successModal.classList.remove('active');
});

// === Форма контактов ===
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
});

// === Инициализация ===
renderProducts();
