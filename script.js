// ==================== SUPER DEWA JAVASCRIPT ==================== //
// Complete, bug-free, best practices

// ==================== PRODUCT DATA ==================== //
// ==================== PRODUCT DATA ==================== //
const products = [
    {
        id: 1,
        name: "ELECTRIC LIME",
        tagline: "CITRUS SURGE",
        description: "A VIBRANT BURST OF CITRUS THAT ELECTRIFIES YOUR SENSES AND ENERGIZES YOUR DAY.",
        color: "#00FF88",
        price: 4.99,
        vitamins: ["B12", "B6", "C"],
        featured: true,
        category: "featured",
        image: "https://i.pinimg.com/736x/e8/81/f5/e881f5b1e82f4497a286f404efa03108.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, CITRIC ACID, TAURINE, SODIUM CITRATE, CAFFEINE, NIACINAMIDE (VITAMIN B3), PYRIDOXINE HYDROCHLORIDE (VITAMIN B6), CYANOCOBALAMIN (VITAMIN B12), NATURAL FLAVORS.",
        composition: "CAFFEINE: 160MG, TAURINE: 1000MG, SUGAR: 0G",
        nutritionalInfo: { calories: 10, carbs: "2g", sugar: "0g", protein: "0g" }
    },
    {
        id: 2,
        name: "COSMIC BERRY",
        tagline: "BERRY BLAST",
        description: "A COSMIC FUSION OF MIXED BERRIES THAT TAKES YOUR TASTE BUDS ON AN INTERGALACTIC JOURNEY.",
        color: "#7B68EE",
        price: 4.99,
        vitamins: ["B12", "ANTIOXIDANTS"],
        featured: true,
        category: "featured",
        image: "https://i.pinimg.com/736x/b7/e3/cb/b7e3cb9949d4e958c4f8d97ffecfda00.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, CITRIC ACID, TAURINE, CAFFEINE, ACAI EXTRACT, BLUEBERRY EXTRACT, VITAMIN B12, SUCRALOSE.",
        composition: "CAFFEINE: 150MG, ANTIOXIDANTS: HIGH, SUGAR: 0G",
        nutritionalInfo: { calories: 15, carbs: "3g", sugar: "0g", protein: "0g" }
    },
    {
        id: 3,
        name: "ARCTIC BLUE",
        tagline: "ICE STORM",
        description: "A REFRESHINGLY COOL BLAST THAT AWAKENS YOUR MIND WITH GLACIER-INSPIRED CLARITY.",
        color: "#00F0FF",
        price: 4.99,
        vitamins: ["B12", "TAURINE"],
        featured: false,
        category: "classic",
        image: "https://i.pinimg.com/1200x/75/60/7e/75607ec6d54f6ae1384b6737d8fdc914.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, CITRIC ACID, ERYTHRITOL, TAURINE, CITRUS EXTRACT, CAFFEINE, GINSENG EXTRACT.",
        composition: "CAFFEINE: 140MG, TAURINE: 1200MG, SUGAR: 0G",
        nutritionalInfo: { calories: 5, carbs: "1g", sugar: "0g", protein: "0g" }
    },
    {
        id: 4,
        name: "SOLAR FLARE",
        tagline: "ORANGE BLAST",
        description: "HARNESS THE POWER OF THE SUN WITH THIS EXPLOSIVE ORANGE ENERGY SENSATION.",
        color: "#FF6B35",
        price: 4.99,
        vitamins: ["B12", "D3", "C"],
        featured: true,
        category: "premium",
        image: "https://i.pinimg.com/1200x/eb/25/74/eb2574413bdf0020afd3f2ef3c1eaa1c.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, ORANGE JUICE CONCENTRATE, CITRIC ACID, CAFFEINE, VITAMIN D3, VITAMIN C, NATURAL COLOR.",
        composition: "CAFFEINE: 160MG, VITAMIN C: 100% DV, SUGAR: 2G",
        nutritionalInfo: { calories: 25, carbs: "5g", sugar: "2g", protein: "0g" }
    },
    {
        id: 5,
        name: "MIDNIGHT GRAPE",
        tagline: "DARK ENERGY",
        description: "A MYSTERIOUS GRAPE INFUSION THAT FUELS YOUR NOCTURNAL AMBITIONS.",
        color: "#9B59B6",
        price: 4.99,
        vitamins: ["B12", "B6"],
        featured: false,
        category: "classic",
        image: "https://i.pinimg.com/736x/27/be/f7/27bef7636a5b892774451678061e4aa4.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, GRAPE EXTRACT, TARTARIC ACID, CAFFEINE, VITAMIN B BLEND, PURPLE CARROT JUICE (COLOR).",
        composition: "CAFFEINE: 150MG, L-THEANINE: 50MG, SUGAR: 0G",
        nutritionalInfo: { calories: 10, carbs: "2g", sugar: "0g", protein: "0g" }
    },
    {
        id: 6,
        name: "DRAGON FRUIT",
        tagline: "EXOTIC POWER",
        description: "AN EXOTIC DRAGON FRUIT BLEND THAT UNLEASHES YOUR INNER FIRE.",
        color: "#FF1493",
        price: 5.99,
        vitamins: ["B12", "ELECTROLYTES", "C"],
        featured: true,
        category: "premium",
        image: "https://i.pinimg.com/736x/4d/9f/20/4d9f20c22da3d376e1aa1e84864e9813.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, DRAGON FRUIT EXTRACT, COCONUT WATER CONCENTRATE, CAFFEINE, VITAMIN C, MAGNESIUM CITRATE.",
        composition: "CAFFEINE: 180MG, ELECTROLYTES: 300MG, SUGAR: 1G",
        nutritionalInfo: { calories: 20, carbs: "4g", sugar: "1g", protein: "0g" }
    },
    {
        id: 7,
        name: "NEBULA NECTAR",
        tagline: "PEACH PARADISE",
        description: "A SWEET AND JUICY PEACH BLEND THAT TRANSPORTS YOU TO A CELESTIAL ORCHARD.",
        color: "#FF9F43",
        price: 5.99,
        vitamins: ["A", "C", "E"],
        featured: false,
        category: "flavor-fusion",
        image: "https://i.pinimg.com/736x/e3/90/56/e3905643691be53593b5a7953a9ef732.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, PEACH PURÉE, CITRIC ACID, CAFFEINE, VITAMIN A, VITAMIN E, SUCRALOSE.",
        composition: "CAFFEINE: 140MG, VITAMIN A: 50% DV, SUGAR: 0G",
        nutritionalInfo: { calories: 15, carbs: "3g", sugar: "0g", protein: "0g" }
    },
    {
        id: 8,
        name: "VOID VANILLA",
        tagline: "SMOOTH HORIZON",
        description: "A SMOOTH AND CREAMY VANILLA EXPERIENCE THAT DEFIES THE EMPTINESS OF SPACE.",
        color: "#FECA57",
        price: 4.99,
        vitamins: ["CALCIUM", "D3"],
        featured: false,
        category: "classic",
        image: "https://i.pinimg.com/736x/d5/8b/3f/d58b3f371b6ff3f00cca4e115f00fed8.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, NATURAL VANILLA FLAVOR, CREAM SODA EXTRACT, CAFFEINE, CALCIUM LACTATE.",
        composition: "CAFFEINE: 120MG, CALCIUM: 10% DV, SUGAR: 0G",
        nutritionalInfo: { calories: 10, carbs: "1g", sugar: "0g", protein: "0g" }
    },
    {
        id: 9,
        name: "QUANTUM KIWI",
        tagline: "GREEN ENERGY",
        description: "A TANGY KIWI KICK WITH A STRAWBERRY TWIST FOR QUANTUM-LEVEL PERFORMANCE.",
        color: "#1DD1A1",
        price: 5.99,
        vitamins: ["C", "K"],
        featured: true,
        category: "flavor-fusion",
        image: "https://i.pinimg.com/736x/aa/8e/72/aa8e72409d2e9e5ad406d83c95688d73.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, KIWI JUICE, STRAWBERRY EXTRACT, CAFFEINE, VITAMIN K, CITRIC ACID.",
        composition: "CAFFEINE: 160MG, VITAMIN C: 150% DV, SUGAR: 3G",
        nutritionalInfo: { calories: 30, carbs: "6g", sugar: "3g", protein: "0g" }
    },
    {
        id: 10,
        name: "PLASMA PUNCH",
        tagline: "TROPICAL FUSION",
        description: "A VOLATILE MIX OF TROPICAL FRUITS THAT IGNITES YOUR CORE WITH PLASMA POWER.",
        color: "#FF5252",
        price: 4.99,
        vitamins: ["B12", "C"],
        featured: false,
        category: "classic",
        image: "https://i.pinimg.com/736x/8a/2d/ab/8a2dab6ef3ee3b089202d84e4db2c834.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, PINEAPPLE JUICE, PASSIONFRUIT EXTRACT, CAFFEINE, GUARANA, VITAMIN B12.",
        composition: "CAFFEINE: 170MG, ANTIOXIDANTS: HIGH, SUGAR: 4G",
        nutritionalInfo: { calories: 40, carbs: "9g", sugar: "4g", protein: "0g" }
    },
    {
        id: 11,
        name: "GRAVITY GUAVA",
        tagline: "HEAVY HITTER",
        description: "A SWEET GUAVA SENSATION THAT KEEPS YOU GROUNDED WHILE LIFTING YOUR SPIRITS.",
        color: "#FF7979",
        price: 5.99,
        vitamins: ["C", "FIBER"],
        featured: true,
        category: "premium",
        image: "https://i.pinimg.com/736x/1a/bc/d0/1abcd0616155509e569a45835d62acfb.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, PINK GUAVA PURÉE, CITRIC ACID, CAFFEINE, SOLUBLE CORN FIBER.",
        composition: "CAFFEINE: 150MG, FIBER: 3G, SUGAR: 2G",
        nutritionalInfo: { calories: 35, carbs: "10g", sugar: "2g", protein: "0g" }
    },
    {
        id: 12,
        name: "STARDUST STRAWBERRY",
        tagline: "CREAMY DREAM",
        description: "A CREAMY STRAWBERRY DELIGHT SPRINKLED WITH THE MAGIC OF STARDUST.",
        color: "#FF9FF3",
        price: 4.99,
        vitamins: ["B12", "MAGNESIUM"],
        featured: false,
        category: "classic",
        image: "https://i.pinimg.com/736x/06/1d/1e/061d1ead08989843022af53e4b1078f9.jpg",
        halal: true,
        ingredients: "CARBONATED WATER, STRAWBERRY JUICE, VANILLA EXTRACT, CAFFEINE, MAGNESIUM CHLORIDE.",
        composition: "CAFFEINE: 130MG, VITAMIN B12: 200% DV, SUGAR: 1G",
        nutritionalInfo: { calories: 20, carbs: "5g", sugar: "1g", protein: "0g" }
    },
    // NEW ARRIVALS & SPECIALS
    {
        id: 101,
        name: "NEON VOLT",
        tagline: "ELECTRIC RASPBERRY x YUZU",
        description: "THE TASTE OF THE FUTURE. LIMITED EDITION DROP.",
        color: "#00F0FF",
        price: 38.00,
        vitamins: ["B12", "NEURAL-LINK"],
        featured: true,
        category: "limited",
        image: "https://i.pinimg.com/736x/6a/ec/90/6aec9085a07de122313662daa0525c39.jpg",
        halal: true,
        ingredients: "FUTURE TECH FORMULA, YUZU EXTRACT, BLUE RASPBERRY.",
        composition: "CAFFEINE: 200MG, FOCUS: MAX, SUGAR: 0G",
        nutritionalInfo: { calories: 10, carbs: "2g", sugar: "0g", protein: "0g" }
    },
    {
        id: 102,
        name: "CYBER PUNCH",
        tagline: "DRAGONFRUIT x NEURAL LINK",
        description: "HIGH VOLTAGE HYDRATION FOR THE CYBER ELITE.",
        color: "#FF0055",
        price: 38.00,
        vitamins: ["B12", "C"],
        featured: true,
        category: "limited",
        image: "https://i.pinimg.com/1200x/6b/f4/ff/6bf4ffb82626e997acc23e6446df7393.jpg",
        halal: true,
        ingredients: "DRAGONFRUIT, ELECTROLYTE MATRIX, CYBER-ENHANCERS.",
        composition: "CAFFEINE: 200MG, ENERGY: HIGH, SUGAR: 0G",
        nutritionalInfo: { calories: 10, carbs: "2g", sugar: "0g", protein: "0g" }
    },
    {
        id: 103,
        name: "HYPER-FOCUS PACK",
        tagline: "GOLD TIER BUNDLE",
        description: "EQUIP YOUR SQUAD. DOMINATE THE LOBBY. INCLUDES 24x CANS & MERCH.",
        color: "#FFD700",
        price: 89.99,
        vitamins: ["ALL-IN-ONE"],
        featured: true,
        category: "bundle",
        image: "https://i.pinimg.com/736x/93/90/a1/9390a1854313724351f40507dccfee19.jpg",
        halal: true,
        ingredients: "VARIOUS FLAVORS INCLUDED.",
        composition: "VARIOUS",
        nutritionalInfo: { calories: 0, carbs: "0g", sugar: "0g", protein: "0g" }
    },
    {
        id: 104,
        name: "STREAMER LEGEND KIT",
        tagline: "PLATINUM TIER BUNDLE",
        description: "THE ULTIMATE SETUP. FRIDGE, 48x CANS, VIP STATUS.",
        color: "#E5E4E2",
        price: 249.99,
        vitamins: ["MAXIMUM"],
        featured: true,
        category: "bundle",
        image: "https://i.pinimg.com/1200x/27/30/e8/2730e8b4071a8ee4d700b719e22e3924.jpg",
        halal: true,
        ingredients: "FULL COLLECTION INCLUDED.",
        composition: "ULTIMATE",
        nutritionalInfo: { calories: 0, carbs: "0g", sugar: "0g", protein: "0g" }
    }
];


// ==================== CART STATE ==================== //
let cart = [];

// ==================== DOM ELEMENTS ==================== //
const loader = document.getElementById('loader');
const loaderProgress = document.getElementById('loaderProgress');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const scrollProgress = document.getElementById('scrollProgress');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const sendAnother = document.getElementById('sendAnother');
const scrollTop = document.getElementById('scrollTop');
const cartBadge = document.getElementById('cartBadge');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const toastContainer = document.getElementById('toastContainer');

// ==================== UTILITIES ==================== //
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i data-lucide="x"></i>
        </button>
    `;
    document.body.appendChild(toast); // Append to body, assuming toastContainer issues

    // Initialize Lucide icons in toast
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Animate in
    requestAnimationFrame(() => toast.classList.add('show'));

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showModal(content) {
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize Lucide icons in modal
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateCartBadge() {
    if (cartBadge) {
        cartBadge.textContent = cart.length;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
    }
}

// ==================== LOADER ==================== //
function initLoader() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                if (loader) loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                // Initialize Lucide icons after loader
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }, 500);
        }
        if (loaderProgress) {
            loaderProgress.style.width = progress + '%';
        }
    }, 100);
}

// ==================== NAVBAR ==================== //
function initNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            if (mobileMenu) mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu && mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// ==================== SCROLL PROGRESS ==================== //
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrolled + '%';
        }
    });
}

// ==================== SCROLL TO TOP ==================== //
function initScrollTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            if (scrollTop) scrollTop.classList.add('visible');
        } else {
            if (scrollTop) scrollTop.classList.remove('visible');
        }
    });

    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ==================== PRODUCTS ==================== //

// ==================== PRODUCTS RENDER ==================== //
function createProductCard(product) {
    // Note: onclick is removed in favor of event delegation
    return `
        <div class="product-card" data-category="${product.category}" data-product-id="${product.id}" data-aos="fade-up">
            <div class="product-glow" style="background: radial-gradient(circle at center, ${product.color}20, transparent 70%);"></div>
            
            <div class="product-image-wrapper" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-image-overlay" style="background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);">
                    <span class="view-details-text">CLICK FOR DETAILS</span>
                </div>
            </div>
            
            <div class="product-content">
                <div class="product-header">
                    <span class="product-tag">${product.tagline}</span>
                    ${product.featured ? '<span class="product-featured"><i data-lucide="star"></i> FEATURED</span>' : ''}
                </div>
                
                <div class="product-footer">
                    <div class="product-vitamins">
                        ${product.vitamins.map(v => `<span class="vitamin-pill">${v}</span>`).join('')}
                    </div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price-row">
                        <span class="product-price">$${product.price.toFixed(2)}<small>/PRODUCTS</small></span>
                        <button class="product-add-btn" style="--btn-color: ${product.color};" data-action="add-to-cart" data-id="${product.id}" aria-label="ADD ${product.name} TO CART">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="product-corner top-left" style="border-color: ${product.color};"></div>
            <div class="product-corner bottom-right" style="border-color: ${product.color};"></div>
        </div>
    `;
}

// Make globally available immediately
window.showProductDetails = function (productId) {
    if (!productId) return;
    const product = products.find(p => p.id === Number(productId));
    if (!product) return;

    // Handle composition string parsing
    const compositionItems = product.composition.split(',').map(item => {
        const [name, value] = item.trim().split(':');
        return { name: name.trim(), value: value ? value.trim() : '' };
    });

    const compositionHtml = compositionItems.map(item =>
        `<div class="comp-tag">${item.name}: <span>${item.value}</span></div>`
    ).join('');

    showModal(`
        <div class="product-detail-modal" style="--glow-color: ${product.color}; --glow-color-alpha: ${product.color}40;">
            <!-- LEFT SIDE -->
            <div class="detail-visual-side">
                <div class="detail-image-container">
                    <div class="detail-bg-glow"></div>
                    <img src="${product.image}" alt="${product.name}" class="detail-main-image">
                </div>
                <div class="detail-badges-floating">
                    ${product.halal ? `<div class="god-badge halal"><i data-lucide="check-circle"></i> HALAL CERTIFIED</div>` : ''}
                    <div class="god-badge"><i data-lucide="zap"></i> ${(product.nutritionalInfo.sugar === '0g' || product.nutritionalInfo.sugar === '0G') ? 'ZERO SUGAR' : 'LOW SUGAR'}</div>
                </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="detail-content-side">
                <div class="modal-product-header">
                    <span class="modal-series-tag">AURA CRYSTAL SERIES // 2026</span>
                    <h2 class="modal-product-title" style="color: ${product.color};">${product.name}</h2>
                    <div class="modal-product-subtitle">${product.tagline}</div>
                </div>

                <div class="info-grid-container">
                    <div class="info-section">
                        <h3>DESCRIPTION</h3>
                        <p class="description-text">${product.description}</p>
                    </div>

                    <div class="info-section">
                        <h3>ACTIVE COMPOSITION</h3>
                        <div class="composition-list">
                            ${compositionHtml}
                        </div>
                    </div>

                    <div class="info-section">
                        <h3>NUTRITIONAL MATRIX</h3>
                        <div class="god-nutrition-grid">
                            <div class="god-nutri-item"><span>CALORIES</span><strong>${product.nutritionalInfo.calories}</strong></div>
                            <div class="god-nutri-item"><span>CARBS</span><strong>${product.nutritionalInfo.carbs}</strong></div>
                            <div class="god-nutri-item"><span>SUGAR</span><strong>${product.nutritionalInfo.sugar}</strong></div>
                            <div class="god-nutri-item"><span>PROTEIN</span><strong>${product.nutritionalInfo.protein}</strong></div>
                        </div>
                    </div>

                     <div class="info-section">
                        <h3>FULL INGREDIENTS</h3>
                        <div class="ingredients-box">
                            <p>${product.ingredients}</p>
                        </div>
                    </div>
                </div>

                <div class="modal-footer-action">
                    <div class="price-display">
                        <span class="price-label">UNIT PRICE</span>
                        <span class="price-value">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="btn-god-modal" onclick="addToCart(${product.id}); closeModal();">
                        ADD TO LOADOUT <i data-lucide="shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    `);
};

function renderProducts(filter = 'all') {
    const filtered = filter === 'all'
        ? products
        : filter === 'featured'
            ? products.filter(p => p.featured)
            : products.filter(p => p.category === filter);

    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.innerHTML = filtered.map(createProductCard).join('');
    }

    // Re-init AOS and Lucide
    if (window.initScrollAnimations) window.initScrollAnimations();
    if (window.lucide) window.lucide.createIcons();
}

function initProducts() {
    renderProducts();

    // Event Delegation for Products Grid
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            // Check for Add to Cart button or its icon
            const addBtn = e.target.closest('.product-add-btn');
            if (addBtn) {
                e.stopPropagation();
                const id = addBtn.dataset.id;
                addToCart(Number(id));
                return;
            }

            // Check for Product Card click (for details)
            const card = e.target.closest('.product-card');
            // Ensure we aren't clicking something interactive that shouldn't open details
            if (card && !e.target.closest('button')) {
                const id = card.dataset.productId;
                if (id) window.showProductDetails(id);
            }
        });
    }

    // Filter Buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
            showToast(`SHOWING ${btn.textContent.toUpperCase()}`, 'info');
        });
    });
}


// Add to cart function - Global
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartBadge();
        showToast(`${product.name} ADDED TO CART!`, 'success');
    }
}

// ==================== CONTACT FORM ==================== //
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');

            // Simulate form submission
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                contactForm.classList.add('hide');
                formSuccess.classList.add('show');
                showToast('MESSAGE SENT SUCCESSFULLY!', 'success');
            }, 1500);
        });
    }

    if (sendAnother) {
        sendAnother.addEventListener('click', () => {
            contactForm.reset();
            contactForm.classList.remove('hide');
            formSuccess.classList.remove('show');
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showToast(`SUBSCRIBED WITH ${email.toUpperCase()}!`, 'success');
            newsletterForm.reset();
        });
    }
}

// ==================== SCROLL ANIMATIONS ==================== //
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ==================== SMOOTH SCROLL ==================== //
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== PARALLAX EFFECTS ==================== //
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Hero parallax
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && scrolled < window.innerHeight) {
            heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Glow orbs parallax
        document.querySelectorAll('.glow-orb').forEach((orb, i) => {
            const speed = 0.1 + (i * 0.05);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ==================== BUTTON CLICK HANDLERS ==================== //
function initButtonHandlers() {
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            showModal(`
                <div class="search-modal">
                    <h3>SEARCH PRODUCTS</h3>
                    <div class="search-input-wrapper">
                        <i data-lucide="search"></i>
                        <input type="text" placeholder="SEARCH FOR FLAVORS, PRODUCTS..." autofocus>
                    </div>
                    <div class="search-suggestions">
                        <p>POPULAR SEARCHES:</p>
                        <div class="suggestion-tags">
                            <span onclick="closeModal(); document.getElementById('products').scrollIntoView({behavior:'smooth'})">ELECTRIC LIME</span>
                            <span onclick="closeModal(); document.getElementById('products').scrollIntoView({behavior:'smooth'})">COSMIC BERRY</span>
                            <span onclick="closeModal(); document.getElementById('products').scrollIntoView({behavior:'smooth'})">ARCTIC BLUE</span>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            const cartContent = cart.length === 0
                ? '<p class="cart-empty">YOUR CART IS EMPTY</p>'
                : cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image-wrapper">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        </div>
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                `).join('');

            const total = cart.reduce((sum, item) => sum + item.price, 0);

            showModal(`
                <div class="cart-modal">
                    <h3><i data-lucide="shopping-bag"></i> YOUR CART (${cart.length})</h3>
                    <div class="cart-items">${cartContent}</div>
                    ${cart.length > 0 ? `
                        <div class="cart-total">
                            <span>TOTAL:</span>
                            <span class="total-amount">$${total.toFixed(2)}</span>
                        </div>
                        <button class="btn-god full-width" onclick="handleCheckout()">
                            PROCEED TO CHECKOUT
                            <i data-lucide="arrow-right"></i>
                        </button>
                    ` : ''}
                </div>
            `);
        });
    }

    // Shop Now buttons
    const shopNowBtn = document.getElementById('shopNowBtn');
    const mobileShopBtn = document.getElementById('mobileShopBtn');
    const shopHandler = () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        if (mobileMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    if (shopNowBtn) shopNowBtn.addEventListener('click', shopHandler);
    if (mobileShopBtn) mobileShopBtn.addEventListener('click', shopHandler);

    // Explore Collection button
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Watch Story button
    const watchBtn = document.getElementById('watchBtn');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            showModal(`
                <div class="video-modal">
                    <h3>AURA CRYSTAL STORY</h3>
                    <div class="video-placeholder">
                        <i data-lucide="play-circle"></i>
                        <p>VIDEO COMING SOON</p>
                    </div>
                </div>
            `);
        });
    }

    // View Catalog button
    const viewCatalogBtn = document.getElementById('viewCatalogBtn');
    if (viewCatalogBtn) {
        viewCatalogBtn.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            filterBtns.forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            renderProducts('all');
            showToast('SHOWING FULL CATALOG', 'success');
        });
    }

    // Modal close handlers
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Make showProductDetails global
    window.showProductDetails = showProductDetails;
}

// ==================== GLOBAL FUNCTIONS ==================== //
function handleSocialClick(platform) {
    event.preventDefault();
    showToast(`Opening ${platform}...`, 'info');
}

function handleDirections() {
    event.preventDefault();
    showToast('Opening maps...', 'info');
}

function handleCheckout() {
    // Show processing state
    showModal(`
        <div class="checkout-modal">
            <div class="checkout-loader">
                <i data-lucide="loader-2" class="spin"></i>
            </div>
            <h3>Processing Order</h3>
            <p>Securing your energy supply...</p>
        </div>
    `);

    // Simulate API call
    setTimeout(() => {
        const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

        showModal(`
            <div class="checkout-success">
                <div class="success-icon-large">
                    <i data-lucide="check-circle"></i>
                </div>
                <h3>Order Confirmed!</h3>
                <p class="order-id">Order ID: ${orderId}</p>
                <p>Your order has been placed successfully. A confirmation email has been dispatched.</p>
                <button class="btn-god full-width" onclick="closeModal()">
                    Return to Mission
                </button>
            </div>
        `);

        // Reset cart
        cart = [];
        updateCartBadge();
    }, 2000);
}

// ==================== INITIALIZE ==================== //
document.addEventListener('DOMContentLoaded', () => {

    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';

    initLoader();
    initNavbar();
    initScrollProgress();
    initScrollTop();
    initProducts();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
    initParallax();
    initButtonHandlers();

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Make functions available globally
window.addToCart = addToCart;
window.handleSocialClick = handleSocialClick;
window.handleDirections = handleDirections;
window.handleCheckout = handleCheckout;
window.closeModal = closeModal;
window.showProductDetails = showProductDetails;

// ==================== LIVE INTEL MODAL ==================== //
const liveIntelData = {
    'launch': {
        title: "GENESIS LAUNCH EVENT",
        date: "26.10.2026",
        image: "https://i.pinimg.com/1200x/b0/d5/f8/b0d5f8c526c067fbaabd39b328cc313c.jpg",
        desc: `
            <p>The dawn of a new era in performance energy. Join us for the worldwide reveal of the AURA Crystal series at the Neo-Tokyo Dome. Witness the future.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>ATTENDEES</span>
                    <strong>50,000+</strong>
                </div>
                <div class="intel-stat">
                    <span>LOCATION</span>
                    <strong>NEO-TOKYO</strong>
                </div>
                <div class="intel-stat">
                    <span>STATUS</span>
                    <strong>CONFIRMED</strong>
                </div>
            </div>
            <h3>MISSION OBJECTIVES</h3>
            <ul class="intel-list">
                <li>Exclusive first taste of "Quantum Kiwi" prototype</li>
                <li>Live performance by 'Neon Gods' & Holo-Dancers</li>
                <li>Pro-Gamer tournament finals (Apex Legends / Valorant)</li>
                <li>VIP Afterparty access codes hidden in venue</li>
            </ul>
        `
    },
    'neon': {
        title: "NEON NIGHTS SERIES",
        date: "15.11.2026",
        image: "https://i.pinimg.com/1200x/11/3f/15/113f151c6dbdc4ce4996ae802d1cf29b.jpg",
        desc: `
            <p>Illuminate the darkness. The Neon Nights series introduces three limited-edition glow-in-the-dark cans designed for the nightlife elite.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>FLAVORS</span>
                    <strong>3 NEW</strong>
                </div>
                <div class="intel-stat">
                    <span>EDITION</span>
                    <strong>LIMITED</strong>
                </div>
                <div class="intel-stat">
                    <span>EFFECT</span>
                    <strong>UV REACT</strong>
                </div>
            </div>
            <h3>COLLECTION DATA</h3>
            <p>Featuring "Cyber Punk Punch", "Laser Lemon", and "Midnight Mint". Each can features our proprietary bioluminescent ink technology that charges under UV light.</p>
        `
    },
    'cyber': {
        title: "CYBER EDITION DROP",
        date: "01.12.2026",
        image: "https://i.pinimg.com/736x/c8/e5/12/c8e51292274b4b2a94acf1839b159c98.jpg",
        desc: `
            <p>Upgrade your hardware. Similar to our standard line but enhanced with 200mg of Alpha-GPC for maximum neural connectivity and focus.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>FOCUS</span>
                    <strong>MAXIMUM</strong>
                </div>
                <div class="intel-stat">
                    <span>NET WT</span>
                    <strong>500ML</strong>
                </div>
                <div class="intel-stat">
                    <span>TECH</span>
                    <strong>NOOTROPIC</strong>
                </div>
            </div>
            <h3>SYSTEM SPECS</h3>
            <p>Designed for extended coding sessions, raid nights, and cyber-security ops. Zero crash, zero latency. Pure processing power.</p>
        `
    },
    'community': {
        title: "ELITE SQUAD RECRUITMENT",
        date: "10.12.2026",
        image: "https://i.pinimg.com/736x/7f/9a/79/7f9a79d1d95e083409fbb494d88cc88b.jpg",
        desc: `
            <p>Do you have what it takes? We are scouting for the next generation of Aura Ambassadors. Join the ranks of the elite.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>ROLES</span>
                    <strong>OPEN</strong>
                </div>
                <div class="intel-stat">
                    <span>PERKS</span>
                    <strong>LEGENDARY</strong>
                </div>
                <div class="intel-stat">
                    <span>REGION</span>
                    <strong>GLOBAL</strong>
                </div>
            </div>
            <h3>OPERATIVE BENEFITS</h3>
            <ul class="intel-list">
                <li>Monthly supply drops of unreleased flavors</li>
                <li>Exclusive "Friends & Family" merch access</li>
                <li>Access to private Discord command channels</li>
                <li>Sponsorship opportunities for top performers</li>
            </ul>
        `
    }
};

function openLiveModal(type) {
    const data = liveIntelData[type];
    if (!data) return;

    const modal = document.getElementById('liveModal');
    const title = document.getElementById('modalTitle');
    const date = document.getElementById('modalDate');
    const img = document.getElementById('modalImg');
    const desc = document.getElementById('modalDesc');

    if (modal && title && date && img && desc) {
        title.innerText = data.title;
        date.innerText = data.date;
        img.src = data.image;
        desc.innerHTML = data.desc;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (window.lucide) window.lucide.createIcons();
    }
}

function closeLiveModal() {
    const modal = document.getElementById('liveModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==================== COLLECTION MODAL LOGIC ==================== //
const collectionData = {
    'hoodie': {
        title: "CYBER HOODIE // TECHWEAR",
        tag: "APPAREL SERIES 01",
        image: "https://i.pinimg.com/1200x/34/b5/d5/34b5d5260c9992ee7af71201fd4159f0.jpg",
        desc: `
            <p>Engineered for the digital nomad. Water-resistant, thermal-regulated fabric with hidden cable routing ports.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>MATERIAL</span>
                    <strong>GORE-TEX</strong>
                </div>
                <div class="intel-stat">
                    <span>FIT</span>
                    <strong>OVERSIZED</strong>
                </div>
                <div class="intel-stat">
                    <span>STOCK</span>
                    <strong>LOW</strong>
                </div>
            </div>
            <h3>TECHNICAL SPECS</h3>
            <ul class="intel-list">
                <li>Anti-RFID pocket lining for data security</li>
                <li>Reflective "AURA" glyph strips for night visibility</li>
                <li>Modular hood with magnetic latch system</li>
                <li>Authenticated NFC chip woven into sleeve</li>
            </ul>
        `
    },
    'cap': {
        title: "TACTICAL CAP // SNAPBACK",
        tag: "APPAREL SERIES 01",
        image: "https://i.pinimg.com/736x/f4/37/96/f43796c5731b3898681c36c73b9fabf9.jpg",
        desc: `
            <p>Low-profile tactical headwear. Breathable honeycomb mesh structure with reinforced stitching.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>PROFILE</span>
                    <strong>LOW</strong>
                </div>
                <div class="intel-stat">
                    <span>SIZE</span>
                    <strong>ADJUST</strong>
                </div>
                <div class="intel-stat">
                    <span>PANELS</span>
                    <strong>5-PANEL</strong>
                </div>
            </div>
            <h3>GEAR DETAILS</h3>
            <ul class="intel-list">
                <li>Moisture-wicking inner headband</li>
                <li>Matte black metal hardware</li>
                <li>Embroidered 3D Aura logo</li>
                <li>Under-brim circuit board pattern print</li>
            </ul>
        `
    },
    'tee': {
        title: "NEON TEE // OVERSIZED",
        tag: "APPAREL SERIES 01",
        image: "https://i.pinimg.com/736x/a1/84/3c/a1843ca24d01adf2a5594f9939af86e8.jpg",
        desc: `
            <p>Heavyweight cotton street tee. Features high-density UV-reactive ink print that glows under blacklight.</p>
            <div class="intel-grid">
                <div class="intel-stat">
                    <span>WEIGHT</span>
                    <strong>240 GSM</strong>
                </div>
                <div class="intel-stat">
                    <span>PRINT</span>
                    <strong>UV-REACT</strong>
                </div>
                <div class="intel-stat">
                    <span>CUT</span>
                    <strong>BOXY</strong>
                </div>
            </div>
            <h3>FABRIC DATA</h3>
            <ul class="intel-list">
                <li>100% Pre-shrunk Organic Cotton</li>
                <li>Drop-shoulder silhouette</li>
                <li>Reinforced collar ribbing</li>
                <li>Limited edition "Launch" back print</li>
            </ul>
        `
    }
};

function openCollectionModal(type) {
    const data = collectionData[type];
    if (!data) return;

    const modal = document.getElementById('collectionModal');
    const title = document.getElementById('colModalTitle');
    const tag = document.getElementById('colModalTag');
    const img = document.getElementById('colModalImg');
    const desc = document.getElementById('colModalDesc');

    if (modal && title && tag && img && desc) {
        title.innerText = data.title;
        tag.innerText = data.tag;
        img.src = data.image;
        desc.innerHTML = data.desc;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (window.lucide) window.lucide.createIcons();
    }
}

function closeCollectionModal() {
    const modal = document.getElementById('collectionModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==================== ACCORDION ==================== //
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;

            // Close other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                }
            });

            // Toggle current
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
}

// ==================== INITIALIZATION ==================== //
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNavbar();
    initScrollProgress();
    initScrollTop();
    initProducts();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
    initParallax();
    initButtonHandlers();
    initAccordion();      // Accordion

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// ==================== GLOBAL EXPORTS FOR HTML HANDLERS ==================== //
window.addToCart = addToCart;
window.showToast = showToast;
window.openLiveModal = openLiveModal;
window.closeLiveModal = closeLiveModal;
window.openCollectionModal = openCollectionModal;
window.closeCollectionModal = closeCollectionModal;
// Define handleSocialClick and handleDirections if they don't exist, as they appeared in HTML
window.handleSocialClick = (platform) => {
    console.log(`Navigating to ${platform}...`);
    // Placeholder logic
};
window.handleDirections = () => {
    window.open('https://maps.google.com', '_blank');
};
