// src/data/tiffenItems.js
const asset = (file) => `${process.env.PUBLIC_URL}/assets/tiffin/${file}`

const tiffenItems = [
  { 
    name: "Idli", 
    price: 25, 
    img: asset("idli.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Dosa", 
    price: 40, 
    img: asset("dosa.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Vada", 
    price: 20, 
    img: asset("vada.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Upma", 
    price: 30, 
    img: asset("upma.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Pongal", 
    price: 35, 
    img: asset("pongal.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Poori", 
    price: 45, 
    img: asset("poori.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Chapati", 
    price: 30, 
    img: asset("Chapati.webp"), 
    available: true, 
    isVeg: true 
  },
  { 
    name: "Chicken Curry", 
    price: 80, 
    img: asset("chickenCurry.webp"), 
    available: true, 
    isVeg: false 
  },
  { 
    name: "Mutton Curry", 
    price: 120, 
    img: asset("mutton.webp"), 
    available: true, 
    isVeg: false 
  },
  { 
    name: "Fish Curry", 
    price: 100, 
    img: asset("chickenCurry.webp"), 
    available: true, 
    isVeg: false 
  }
];

export default tiffenItems;


