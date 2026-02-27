// src/data/biriyaniItems.js
const asset = (file) => `${process.env.PUBLIC_URL}/assets/Biriyani/${file}`

const biriyaniItems = [
  { 
    name: "Paneer Biryani", 
    price: 120, 
    img: asset("PaneerBiriyani.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Mushroom Biryani", 
    price: 110, 
    img: asset("MushroomBiriyani.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Veg Fried Rice", 
    price: 90, 
    img: asset("vegFriedRice.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Veg Biryani", 
    price: 100, 
    img: asset("vegBiriyani.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Chicken Biryani", 
    price: 150, 
    img: asset("ChickenBiriyani.webp"), 
    available: true, 
    isVeg: false 
  },
  { 
    name: "Mutton Biryani", 
    price: 190, 
    img: asset("MuttonBiriyani.webp"), 
    available: true, 
    isVeg: false 
  },
  { 
    name: "Egg Fried Rice", 
    price: 100, 
    img: asset("EggFriedRice.webp"), 
    available: true, 
    isVeg: false 
  },
  { 
    name: "Chicken Fried Rice", 
    price: 120, 
    img: asset("ChickenFriedRice.webp"), 
    available: true, 
    isVeg: false 
  }
];

export default biriyaniItems;


