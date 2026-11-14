// === Данные товаров ===
const products = [
    {
        id: 1,
        name: 'Колпаки из нержавейки 22.5 ступичный Scania (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-scania.jpg'
    },
    {
        id: 2,
        name: 'Колпаки из нержавейки 22.5 ступичный Volvo (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-volvo.jpg'
    },
    {
        id: 3,
        name: 'Колпаки из нержавейки 22.5 ступичный Mercedes (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-mercedes.jpg'
    },
    {
        id: 4,
        name: 'Колпаки из нержавейки 22.5 ступичный DAF (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-daf.jpg'
    },
    {
        id: 5,
        name: 'Колпаки из нержавейки 22.5 ступичный КАМАЗ (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-kamaz.jpg'
    },
    {
        id: 6,
        name: 'Колпаки из нержавейки 22.5 ступичный Schmitz (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-schmitz.jpg'
    },
    {
        id: 7,
        name: 'Колпаки из нержавейки 22.5 ступичный пустые (2 шт)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-empty.jpg'
    },
    {
        id: 8,
        name: 'Колпаки из нержавейки 22.5 передние',
        price: 8500,
        category: 'caps',
        img: 'img/cap-front.jpg'
    },
    {
        id: 9,
        name: 'Колпаки из нержавейки 22.5 задние',
        price: 9000,
        category: 'caps',
        img: 'img/cap-rear.jpg'
    },
    {
        id: 10,
        name: 'Колпаки из нержавейки на газель r16',
        price: 15000,
        category: 'caps',
        img: 'img/cap-gazel.jpg'
    },
    {
        id: 11,
        name: 'Колпаки из нержавейки 22.5 ступичный половинчатые',
        price: 3600,
        category: 'caps',
        img: 'img/cap-half.jpg'
    },
    {
        id: 12,
        name: 'Колпаки из нержавейки 22.5 на ступицу',
        price: 3600,
        category: 'caps',
        img: 'img/cap-hub.jpg'
    },
    {
        id: 13,
        name: 'Колпачки на гайки нержавейка',
        price: 110,
        category: 'accessories',
        img: 'img/nuts.jpg'
    },
    {
        id: 14,
        name: 'Шипцы для снятия колпачков с гайками',
        price: 800,
        category: 'accessories',
        img: 'img/pliers.jpg'
    },
    {
        id: 15,
        name: 'Ремкомплект для колпаков R 22,5',
        price: 900,
        category: 'accessories',
        img: 'img/repair-kit.jpg'
    },
    {
        id: 16,
        name: 'Колпаки для грузовиков 22,5 лучи',
        price: 1000,
        category: 'accessories',
        img: 'img/spokes.jpg'
    },
    {
        id: 17,
        name: 'Крепления к колпакам на колеса р 22.5 Лучи',
        price: 700,
        category: 'accessories',
        img: 'img/mounts.jpg'
    },
    {
        id: 18,
        name: 'Колпаки из нержавейки 22.5 на грузовик 135мм',
        price: 8500,
        category: 'caps',
        img: 'img/cap-truck-135.jpg'
    },
    {
        id: 19,
        name: 'Ремкомплект для колпаков R 22,5 (10 штук)',
        price: 900,
        category: 'accessories',
        img: 'img/repair-kit-10.jpg'
    },
    {
        id: 20,
        name: 'Ремкомплект для колпаков нержавейка (10 штук)',
        price: 1800,
        category: 'accessories',
        img: 'img/repair-kit-10-steel.jpg'
    },
    {
        id: 21,
        name: 'Колпаки для грузовиков 22,5 лучи цветные (4 шт)',
        price: 1000,
        category: 'accessories',
        img: 'img/spokes-color.jpg'
    },
    {
        id: 22,
        name: 'Колпаки из нержавейки на Газель/IVECO Daily R16 задние (2 шт)',
        price: 13950,
        category: 'caps',
        img: 'img/cap-gazel-r16-2.jpg'
    },
    {
        id: 23,
        name: 'Колпаки лучи 22.5 с логотипом Mercedes',
        price: 1120,
        category: 'accessories',
        img: 'img/spokes-mercedes.jpg'
    },
    {
        id: 24,
        name: 'Колпаки из нержавейки Газель r16 (4 шт)',
        price: 19110,
        category: 'caps',
        img: 'img/cap-gazel-r16-4.jpg'
    },
    {
        id: 25,
        name: 'Крепления к Колпакам на колеса р 22.5 (на ось и прицеп)',
        price: 700,
        category: 'accessories',
        img: 'img/mounts-axle.jpg'
    },
    {
        id: 26,
        name: 'Колпаки из нержавейки 22.5 с логотипом (набор)',
        price: 3600,
        category: 'caps',
        img: 'img/cap-logo-set.jpg'
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
                <div class="product-price">${product.price.toLocaleString('ru-RU')} &#8381;</div>
                <div class="product-location">Владимирская обл., Гороховец</div>
                <button class="add-to-cart" data-id="${product.id}">В корзину</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
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
                <span class="cart-item-price">${(item.price * item.qty).toLocaleString('ru-RU')} &#8381;</span>
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

// === Форма контактов ===
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
});

// === Инициализация ===
renderProducts();