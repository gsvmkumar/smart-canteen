// Combo offers data for different shops
const comboOffers = [
  // Juice Corner Combos
  {
    id: 'juice-combo-1',
    title: 'Fresh Fruit Trio',
    description: 'Mango + Orange + Apple Juice',
    shop: 'Juice Corner',
    shopRoute: '/shop/juice-corner',
    items: ['Mango Juice', 'Orange Juice', 'Apple Juice'],
    originalPrice: 175, // 60 + 50 + 65
    offerPrice: 140,
    discount: 20,
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: true
  },
  {
    id: 'juice-combo-2', 
    title: 'Tropical Delight',
    description: 'Pineapple + Watermelon + Mixed Fruit Juice',
    shop: 'Juice Corner',
    shopRoute: '/shop/juice-corner',
    items: ['Pineapple Juice', 'Watermelon Juice', 'Mixed Fruit Juice'],
    originalPrice: 205, // 70 + 55 + 80
    offerPrice: 160,
    discount: 22,
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: false
  },
  {
    id: 'juice-combo-3',
    title: 'Health Booster',
    description: 'Carrot + Grape + Mosambi Juice',
    shop: 'Juice Corner', 
    shopRoute: '/shop/juice-corner',
    items: ['Carrot Juice', 'Grape Juice', 'Mosambi Juice'],
    originalPrice: 150, // 50 + 60 + 40
    offerPrice: 110,
    discount: 27,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: false
  },

  // Biriyani Point Combos
  {
    id: 'biriyani-combo-1',
    title: 'Veg Royal Combo',
    description: 'Paneer Biryani + Veg Fried Rice + Refreshing Drink',
    shop: 'Biriyani Point',
    shopRoute: '/shop/biriyani-point', 
    items: ['Paneer Biryani', 'Veg Fried Rice', 'Complementary Drink'],
    originalPrice: 210, // 120 + 90
    offerPrice: 170,
    discount: 19,
    img: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: true
  },
  {
    id: 'biriyani-combo-2',
    title: 'Non-Veg Feast',
    description: 'Chicken Biryani + Chicken Fried Rice + Special Raita',
    shop: 'Biriyani Point',
    shopRoute: '/shop/biriyani-point',
    items: ['Chicken Biryani', 'Chicken Fried Rice', 'Special Raita'],
    originalPrice: 270, // 150 + 120
    offerPrice: 210,
    discount: 22,
    img: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: true
  },
  {
    id: 'biriyani-combo-3',
    title: 'Premium Mutton Deal',
    description: 'Mutton Biryani + Egg Fried Rice + Dessert',
    shop: 'Biriyani Point',
    shopRoute: '/shop/biriyani-point',
    items: ['Mutton Biryani', 'Egg Fried Rice', 'Sweet Dessert'],
    originalPrice: 290, // 190 + 100
    offerPrice: 230,
    discount: 21,
    img: 'https://images.unsplash.com/photo-1520637836862-4d197d17c533?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: false
  },
  {
    id: 'biriyani-combo-4',
    title: 'Family Sharing Pack',
    description: 'Any 2 Biryanis + 2 Drinks + Starter',
    shop: 'Biriyani Point',
    shopRoute: '/shop/biriyani-point',
    items: ['Choice of 2 Biryanis', '2 Beverages', 'Starter Platter'],
    originalPrice: 350,
    offerPrice: 280,
    discount: 20,
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: true
  },

  // Cross-Shop Combo
  {
    id: 'cross-combo-1',
    title: 'Perfect Meal Combo',
    description: 'Any Biryani + Fresh Juice + Dessert',
    shop: 'Multi-Shop',
    shopRoute: '/shop/biriyani-point',
    items: ['Choice of Biryani', 'Fresh Juice', 'Sweet Treat'],
    originalPrice: 220,
    offerPrice: 180,
    discount: 18,
    img: 'https://images.unsplash.com/photo-1502780402662-acc01917074e?w=400&h=300&fit=crop',
    validUntil: '2025-12-31',
    popular: true
  }
];

export default comboOffers;