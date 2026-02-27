// src/data/juiceItems.js
const asset = (file) => `${process.env.PUBLIC_URL}/assets/Juices/${file}`

const juiceItems = [
  { 
    name: "Mango Juice", 
    price: 60, 
    img: asset("mango_juice.jpg"), 
    available: true
  },
  { 
    name: "Orange Juice", 
    price: 50, 
    img: asset("orange_juice.jpg"), 
    available: true
  },
  { 
    name: "Pineapple Juice", 
    price: 70, 
    img: asset("pineapple-juice.webp"), 
    available: true
  },
  { 
    name: "Apple Juice", 
    price: 65, 
    img: asset("apple-juice.webp"), 
    available: true
  },
  { 
    name: "Lemonade", 
    price: 30, 
    img: asset("lemonade.webp"), 
    available: true
  },
  { 
    name: "Watermelon Juice", 
    price: 55, 
    img: asset("watermelon-juice.webp"), 
    available: false
  },
  { 
    name: "Grape Juice", 
    price: 60, 
    img: asset("grape_juice.webp"), 
    available: true
  },
  { 
    name: "Mosambi Juice", 
    price: 40, 
    img: asset("Mosambi_juice.webp"), 
    available: true
  },
  { 
    name: "Carrot Juice", 
    price: 50, 
    img: asset("carrot_juice.webp"), 
    available: true
  },
  { 
    name: "Mixed Fruit Juice", 
    price: 80, 
    img: asset("mixed_juice.webp"), 
    available: true
  },
];

export default juiceItems;


