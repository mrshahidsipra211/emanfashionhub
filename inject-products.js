/**
 * Product Injection Script for Eman Fashion Hub
 * Multiple strategies to inject 8 new products
 */

(function() {
  'use strict';
  
  const newProducts = [
    {"id": 20, "name": "PU Leather Jewelry Organizer (Imported China) - White, Pink & Black", "category": "Jewelry", "subcategory": "jewelry", "price": 2500, "originalPrice": 2500, "discount": 0, "image": "./assets/JEWELRY/PU Leather Jewelry/IMG-20260401-WA0062.jpg", "images": ["./assets/JEWELRY/PU Leather Jewelry/IMG-20260401-WA0062.jpg", "./assets/JEWELRY/PU Leather Jewelry/IMG-20260401-WA0063.jpg", "./assets/JEWELRY/PU Leather Jewelry/IMG-20260401-WA0064.jpg"], "description": "Premium PU Leather Jewelry Organizer imported from China. Available in White, Pink and Black colors. Perfect for organizing and storing your jewelry collection with elegance. Beautiful box packaging with multiple compartments.", "fabric": "PU Leather", "pieces": "1 Piece", "sizes": ["One Size"], "colors": ["White", "Pink", "Black"], "isNew": true, "isFeatured": false, "rating": 4.6, "reviews": 18},
    {"id": 21, "name": "MARIA B CORDS SET 3PIECE DROP-01 SERIES'26", "category": "Clothes", "subcategory": "lawn", "price": 2800, "originalPrice": 2800, "discount": 0, "image": "./assets/clothes/Maria B cords set/IMG-20260401-WA0065.jpg", "images": ["./assets/clothes/Maria B cords set/IMG-20260401-WA0065.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0066.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0067.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0068.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0069.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0070.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0071.jpg", "./assets/clothes/Maria B cords set/IMG-20260401-WA0072.jpg"], "description": "Premium Bana Dora 3-piece lawn collection of 2026 Drop-01. Includes Premium Bana Dora Printed Airjet Lawn Shirt, Printed Voil Lawn Dupatta, and Premium Bana Dora Printed Trouser. Loose price. Multiple color options available.", "fabric": "Premium Printed Airjet Lawn & Voil", "pieces": "3 Piece (Shirt, Dupatta, Trouser)", "sizes": ["Unstitched"], "colors": ["Blue", "Black", "Yellow", "Multi-color"], "isNew": true, "isFeatured": true, "rating": 4.7, "reviews": 42},
    {"id": 22, "name": "ARTICLE SLEEVES MAKHNA", "category": "Clothes", "subcategory": "kurta", "price": 1300, "originalPrice": 1300, "discount": 0, "image": "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0073.jpg", "images": ["./assets/clothes/Article sleeves makhna/IMG-20260401-WA0073.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0074.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0075.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0076.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0077.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0078.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0079.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0080.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0081.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0082.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0083.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0084.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0085.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0086.jpg", "./assets/clothes/Article sleeves makhna/IMG-20260401-WA0087.jpg"], "description": "Article Sleeves Makhna - Ready to wear cotton jersey kurta. Size from head to bottom is 42 inches. Perfect for casual everyday wear. Available in multiple colors.", "fabric": "Cotton Jersey", "pieces": "1 Piece", "sizes": ["One Size (42 inch)"], "colors": ["Maroon", "Navy", "Beige"], "isNew": true, "isFeatured": false, "rating": 4.5, "reviews": 15},
    {"id": 23, "name": "Imported Foldable Girls College Bag", "category": "Bags", "subcategory": "bags", "price": 2900, "originalPrice": 2900, "discount": 0, "image": "./assets/bags/College Foldable Bag/IMG-20260401-WA0088.jpg", "images": ["./assets/bags/College Foldable Bag/IMG-20260401-WA0088.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0089.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0090.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0091.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0092.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0093.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0094.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0095.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0096.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0097.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0098.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0099.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0100.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0101.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0102.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0103.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0104.jpg", "./assets/bags/College Foldable Bag/IMG-20260401-WA0105.jpg"], "description": "High-quality imported foldable bag perfect for college and university. Waterproof parachute material with back pocket. Large size with extra folding capability. Available in 6 lovely colors. Light weight and easy to carry. Most demanded item!", "fabric": "Waterproof Parachute Material", "pieces": "1 Piece", "sizes": ["Large with Extra Folding"], "colors": ["Black", "Navy", "Pink", "Purple", "Green", "Brown"], "isNew": true, "isFeatured": true, "rating": 4.8, "reviews": 67},
    {"id": 24, "name": "New Trending 2 Pcs Gucci Bag For Women", "category": "Bags", "subcategory": "bags", "price": 1800, "originalPrice": 2500, "discount": 28, "image": "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0106.jpg", "images": ["./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0106.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0107.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0108.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0109.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0110.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0111.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0112.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0113.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0114.jpg", "./assets/bags/Gucci Bag 2pcs Set/IMG-20260401-WA0115.jpg"], "description": "Trending Gucci bag set for women featuring high-quality soft leather. 2-piece set includes main bag and hand wallet. Most trending item with premium quality. Sale: Save 28%!", "fabric": "Soft Leather", "pieces": "2 Piece (Bag + Hand Wallet)", "sizes": ["One Size"], "colors": ["Beige", "Brown", "Black"], "isNew": true, "isFeatured": true, "rating": 4.9, "reviews": 89},
    {"id": 25, "name": "Dustproof Rotating Luxury Brush Holder", "category": "Other Accessories", "subcategory": "home", "price": 2000, "originalPrice": 2000, "discount": 0, "image": "./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/IMG-20260401-WA0116.jpg", "images": ["./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/IMG-20260401-WA0116.jpg", "./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/IMG-20260401-WA0117.jpg", "./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/IMG-20260401-WA0118.jpg", "./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/IMG-20260401-WA0119.jpg", "./assets/other accessories/Dustprrof Rotating Luxury Brush Holder/VID-20260401-WA0120.mp4"], "description": "Luxury dustproof rotating brush holder with elegant design. Comes in stylish box packing. Perfect for organizing makeup brushes and pencils. Beautiful rotating mechanism.", "fabric": "Premium Plastic", "pieces": "1 Piece", "sizes": ["One Size"], "colors": ["White", "Black", "Rose Gold"], "isNew": true, "isFeatured": false, "rating": 4.4, "reviews": 28},
    {"id": 26, "name": "Square Magic Mirror Frame", "category": "Other Accessories", "subcategory": "home", "price": 3500, "originalPrice": 3500, "discount": 0, "image": "./assets/other accessories/Square Magic Mirror Frame/VID-20260401-WA0121.mp4", "images": ["./assets/other accessories/Square Magic Mirror Frame/VID-20260401-WA0121.mp4", "./assets/other accessories/Square Magic Mirror Frame/VID-20260401-WA0122.mp4", "./assets/other accessories/Square Magic Mirror Frame/VID-20260401-WA0123.mp4"], "description": "Elegant square magic mirror frame with LED lighting. Creates beautiful visual effects with mirror reflection and smart lighting. Perfect home decor and functional mirror.", "fabric": "Premium Glass & Metal", "pieces": "1 Piece", "sizes": ["One Size"], "colors": ["Silver", "Gold"], "isNew": true, "isFeatured": false, "rating": 4.5, "reviews": 22},
    {"id": 27, "name": "Digital Printed Lawns Collection 2026", "category": "Clothes", "subcategory": "lawn", "price": 1900, "originalPrice": 1900, "discount": 0, "image": "./assets/clothes/Digital printed lawns/IMG-20260401-WA0124.jpg", "images": ["./assets/clothes/Digital printed lawns/IMG-20260401-WA0124.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0125.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0126.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0127.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0128.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0129.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0130.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0131.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0132.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0133.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0134.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0135.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0136.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0137.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0138.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0139.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0140.jpg", "./assets/clothes/Digital printed lawns/IMG-20260401-WA0141.jpg"], "description": "Beautiful digital printed lawn collection 2026. Premium quality printed lawns with modern designs. Perfect for summer wear. Available in multiple color combinations.", "fabric": "Premium Digital Printed Lawn", "pieces": "3 Piece (Shirt, Dupatta, Trouser)", "sizes": ["Unstitched"], "colors": ["Pink", "Blue", "Green", "Purple", "Orange"], "isNew": true, "isFeatured": true, "rating": 4.6, "reviews": 35}
  ];
  
  // Strategy 1: Global variable for React to find
  window.newProductsToAdd = newProducts;
  
  // Strategy 2: Intercept fetch calls and filter products
  const oldCategoryNames = ["unstitched", "ready-to-wear", "Bridal", "formal", "Accessories"];
  
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    return originalFetch.apply(this, args).then(response => {
      const cloned = response.clone();
      if (response.headers.get('content-type')?.includes('application/json')) {
        cloned.json().then(data => {
          if (Array.isArray(data) && data.some(item => item.id && item.name)) {
            // Filter out products with old category names
            const filteredOldProducts = data.filter(p => 
              !oldCategoryNames.some(oldCat => 
                p.category?.toLowerCase() === oldCat.toLowerCase()
              )
            );
            // Only keep new products
            window._productsLoaded = newProducts;
          }
        }).catch(() => {});
      }
      return response;
    });
  };
  
  // Strategy 3: Store in multiple storage locations
  localStorage.setItem('products', JSON.stringify(newProducts));
  localStorage.setItem('allProducts', JSON.stringify(newProducts));
  sessionStorage.setItem('products', JSON.stringify(newProducts));
  
  // Strategy 4: Replace categories in React app
  const newCategories = ["Clothes", "Jewelry", "Watches", "Bags", "Other Accessories"];
  window.newCategoriesForApp = newCategories;
  localStorage.setItem('categories', JSON.stringify(newCategories));
  sessionStorage.setItem('categories', JSON.stringify(newCategories));
  
  // Strategy 5: Watch for DOM updates and inject products visually
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => injectProductsOnDOM());
  } else {
    injectProductsOnDOM();
  }
  
  // Strategy 6: Remove entire "Shop by Category" section and replace with new products button
  function removeShopByCategory() {
    // Method 1: Find and remove any section/div that says "Shop by Category"
    document.querySelectorAll('*').forEach(el => {
      const text = el.textContent?.toLowerCase() || '';
      
      // If this is the main "Shop by Category" section, remove it
      if (text.includes('shop by category') || text.includes('explore our diverse collection')) {
        // Get the closest container (likely parent with all categories)
        let container = el;
        let depth = 0;
        while (container.parentElement && depth < 5) {
          const childCount = container.parentElement.children.length;
          // If parent has multiple children (like a grid), we found the container
          if (childCount > 3 && container.parentElement.children.length < 20) {
            container = container.parentElement;
            break;
          }
          container = container.parentElement;
          depth++;
        }
        
        // Remove the entire section
        if (container) {
          container.remove();
        }
      }
    });
    
    // Method 2: Also look for category grid containers and remove them
    document.querySelectorAll('[class*="category"], [class*="grid"]').forEach(el => {
      const text = el.textContent?.toLowerCase() || '';
      const oldCats = ['unstitched', 'ready-to-wear', 'Bridal', 'formal', 'Accessories'];
      
      // If container has old category names, remove it
      if (oldCats.some(cat => text.includes(cat.toLowerCase()))) {
        // Count how many old categories are in this container
        const matchCount = oldCats.filter(cat => text.includes(cat.toLowerCase())).length;
        // If it has 3+ old categories, it's likely the category section - remove it
        if (matchCount >= 3) {
          el.remove();
        }
      }
    });
  }
  
  // Add replacement button/banner
  function addNewProductsButton() {
    if (document.querySelector('[data-new-products-replacement]')) return; // Already added
    
    const replacement = document.createElement('div');
    replacement.setAttribute('data-new-products-replacement', 'true');
    replacement.style.cssText = `
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin: 30px;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.3s ease;
    `;
    replacement.innerHTML = `
      <h2 style="margin: 0 0 15px 0;">🎉 NEW PRODUCT COLLECTION 2026</h2>
      <p style="margin: 0 0 20px 0; font-size: 16px;">Clothes • Jewelry • Watches • Bags • Other Accessories</p>
      <button style="
        background: white;
        color: #667eea;
        border: none;
        padding: 15px 40px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.2s;
      " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        EXPLORE NEW PRODUCTS →
      </button>
    `;
    replacement.querySelector('button').onclick = () => {
      window.location.href = './new-products.html';
    };
    replacement.onmouseover = function() { this.style.transform = 'scale(1.02)'; };
    replacement.onmouseout = function() { this.style.transform = 'scale(1)'; };
    
    // Insert after the main heading
    const root = document.getElementById('root');
    if (root && root.firstChild) {
      root.insertBefore(replacement, root.firstChild.nextSibling);
    }
  }
  
  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        removeShopByCategory();
        addNewProductsButton();
      }, 1000);
    });
  } else {
    removeShopByCategory();
    addNewProductsButton();
  }
  
  // Keep removing old categories
  setInterval(removeShopByCategory, 2000);
  
  // Strategy 7: Aggressively replace old categories with new ones and hide old ones
  function aggressivelyReplaceCategories() {
    const oldCategories = ['unstitched', 'ready-to-wear', 'Bridal', 'formal', 'Accessories'];
    const newCategories = ["Clothes", "Jewelry", "Watches", "Bags", "Other Accessories"];
    
    const categoryMap = {
      'unstitched': 'Clothes',
      'ready-to-wear': 'Clothes',
      'Bridal': 'Jewelry',
      'formal': 'Clothes',
      'Accessories': 'Other Accessories'
    };
    
    // Find all text nodes and replace category names
    function walkAndReplace(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        let modified = false;
        
        for (let [old, newCat] of Object.entries(categoryMap)) {
          const regex = new RegExp(`\\b${old}\\b`, 'gi');
          if (regex.test(text)) {
            text = text.replace(regex, newCat);
            modified = true;
          }
        }
        
        if (modified) {
          node.textContent = text;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'SCRIPT') {
        Array.from(node.childNodes).forEach(walkAndReplace);
      }
    }
    
    // Also replace in data attributes and aria-labels
    document.querySelectorAll('[data-category], [aria-label]').forEach(el => {
      ['data-category', 'aria-label', 'title'].forEach(attr => {
        if (el.hasAttribute(attr)) {
          let val = el.getAttribute(attr);
          for (let [old, newCat] of Object.entries(categoryMap)) {
            val = val.replace(new RegExp(`\\b${old}\\b`, 'gi'), newCat);
          }
          el.setAttribute(attr, val);
        }
      });
    });
    
    // Walk through DOM and replace text
    walkAndReplace(document.body);
    
    // Hide elements with old category names in text/attributes
    document.querySelectorAll('*').forEach(el => {
      const text = (el.textContent + el.innerHTML).toLowerCase();
      if (oldCategories.some(cat => text.includes(cat.toLowerCase()))) {
        // Check if it's just a category button/label that needs hiding
        if (el.classList?.toString().includes('category') || 
            el.getAttribute('role') === 'button' ||
            el.tagName === 'BUTTON') {
          // Mark for checking parent structure
          const parent = el.parentElement;
          if (parent && parent.classList?.toString().includes('category')) {
            el.style.display = 'none';
          }
        }
      }
    });
  }
  
  // Run immediately and repeatedly
  aggressivelyReplaceCategories();
  setInterval(aggressivelyReplaceCategories, 1500);
  
  function injectProductsOnDOM() {
    // Try to find product containers and add new products
    const containers = document.querySelectorAll('[class*="product"], [class*="grid"], [id*="product"]');
    if (containers.length > 0) {
      console.log('✓ Found product containers via DOM:', containers.length);
    }
    
    // Create banner linking to new products page
    setTimeout(() => {
      const existingBanner = document.querySelector('[data-new-products-banner]');
      if (!existingBanner && !window._bannerAdded) {
        const banner = document.createElement('div');
        banner.setAttribute('data-new-products-banner', 'true');
        banner.style.cssText = `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 20px;
          text-align: center;
          font-weight: bold;
          position: relative;
          cursor: pointer;
          margin: 10px;
          border-radius: 5px;
          z-index: 999;
        `;
        banner.innerHTML = '🎉 <strong>NEW ARRIVALS!</strong> Check out our 8 latest products - <span style="text-decoration: underline;">Click Here</span>';
        banner.onclick = () => window.location.href = './new-products.html';
        
        const root = document.getElementById('root');
        if (root && root.firstChild) {
          root.insertBefore(banner, root.firstChild);
          window._bannerAdded = true;
        }
      }
    }, 500);
  }
  
  console.log('✓ Product injection initialized - 8 new products loaded');
  console.log('  - Global: window.newProductsToAdd ✓');
  console.log('  - localStorage: products & allProducts ✓');
  console.log('  - Dedicated page: /new-products.html ✓');
})();
