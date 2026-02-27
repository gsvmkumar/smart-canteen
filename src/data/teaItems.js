// src/data/teaItems.js
const asset = (file) => `${process.env.PUBLIC_URL}/assets/TeaTime/${file}`

const teaItems = [
  { 
    name: "Masala Tea", 
    price: 15, 
    img: asset("MasalaTea.webp"), 
    available: true
  },
  { 
    name: "Ginger Tea", 
    price: 15, 
    img: asset("GingerTea.webp"), 
    available: true
  },
  { 
    name: "Green Tea", 
    price: 20, 
    img: asset("GreenTea.webp"), 
    available: true
  },
  { 
    name: "Coffee", 
    price: 20, 
    img: asset("Coffee.webp"), 
    available: true
  },
  { 
    name: "Black Tea", 
    price: 15, 
    img: asset("BlackTea.webp"), 
    available: true
  },
  { 
    name: "Lemon Tea", 
    price: 20, 
    img: asset("LemonTea.webp"), 
    available: true
  },
  { 
    name: "Hot Milk", 
    price: 15, 
    img: asset("HotMilk.webp"), 
    available: true
  },
  { 
    name: "Hot Chocolate", 
    price: 30, 
    img: asset("HotChocolate.webp"), 
    available: true
  },
  { 
    name: "Cold Coffee", 
    price: 35, 
    img: asset("ColdCoffee.webp"), 
    available: true
  },
  { 
    name: "Badam Milk", 
    price: 40, 
    img: asset("BadamMilk.webp"), 
    available: true
  }
];

export default teaItems;




