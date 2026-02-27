// Combo offers data for different shops
const asset = (file) => `${process.env.PUBLIC_URL}/assets/${file}`

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
    img: asset('Juices/mixed_juice.webp'),
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
    img: asset('Juices/pineapple-juice.webp'),
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
    img: asset('Juices/carrot_juice.webp'),
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
    img: asset('Biriyani/PaneerBiriyani.webp'),
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
    img: asset('Biriyani/ChickenBiriyani.webp'),
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
    img: asset('Biriyani/MuttonBiriyani.webp'),
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
    img: asset('Biriyani/vegBiriyani.webp'),
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
    img: asset('Bakery/ChocolateCake.webp'),
    validUntil: '2025-12-31',
    popular: true
  }
];

export default comboOffers;