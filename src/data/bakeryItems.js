// src/data/bakeryItems.js
const asset = (file) => `${process.env.PUBLIC_URL}/assets/Bakery/${file}`

const bakeryItems = [
  // Drinks
  { 
    name: "Coke", 
    price: 35, 
    img: asset("coke.webp"), 
    available: true,
    category: "Drinks"
  },
  { 
    name: "Fanta", 
    price: 35, 
    img: asset("fanta.webp"), 
    available: true,
    category: "Drinks"
  },
  { 
    name: "Sprite", 
    price: 35, 
    img: asset("sprite.webp"), 
    available: true,
    category: "Drinks"
  },
  { 
    name: "Pepsi", 
    price: 35, 
    img: asset("pepsi.webp"), 
    available: true,
    category: "Drinks"
  },
  
  // Snacks
  { 
    name: "Lays", 
    price: 20, 
    img: asset("lays.webp"), 
    available: true,
    category: "Snacks"
  },
  { 
    name: "Popcorn", 
    price: 30, 
    img: asset("popcorn.webp"), 
    available: true,
    category: "Snacks"
  },
  { 
    name: "French Fries", 
    price: 60, 
    img: asset("frenchFries.webp"), 
    available: true, 
    isVeg: true,
    category: "Snacks"
  },
  { 
    name: "Veg Puff", 
    price: 25, 
    img: asset("Veg-Puff.webp"), 
    available: true, 
    isVeg: true,
    category: "Snacks"
  },
  { 
    name: "Chicken Sandwich", 
    price: 90, 
    img: asset("Chicken_sandwich.webp"), 
    available: true, 
    isVeg: false,
    category: "Snacks"
  },
  
  // Desserts
  { 
    name: "Vanilla Ice Cream", 
    price: 50, 
    img: asset("VanillaIceCream.webp"), 
    available: true, 
    isVeg: true,
    category: "Desserts"
  },
  { 
    name: "Chocolate Ice Cream", 
    price: 55, 
    img: asset("chocolateIceCream.webp"), 
    available: true, 
    isVeg: true,
    category: "Desserts"
  },
  { 
    name: "Strawberry Ice Cream", 
    price: 60, 
    img: asset("StrawBerry.webp"), 
    available: true, 
    isVeg: true,
    category: "Desserts"
  },
  { 
    name: "Chocolate Cake", 
    price: 120, 
    img: asset("ChocolateCake.webp"), 
    available: true, 
    isVeg: true,
    category: "Desserts"
  },
  { 
    name: "Donut", 
    price: 40, 
    img: asset("donut.webp"), 
    available: true, 
    isVeg: true,
    category: "Desserts"
  }
];

export default bakeryItems;




