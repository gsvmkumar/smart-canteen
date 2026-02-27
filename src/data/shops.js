const asset = (file) => `${process.env.PUBLIC_URL}/assets/${file}`

export const shops = [
  { id: 'Juice Corner', title: 'Juice Corner', route: '/shop/juice-corner', open: true, image: asset('juice.png') },
  { id: 'Tiffen Center', title: 'Tiffen Center', route: '/shop/tiffen-center', open: true, image: asset('tiffen.png') },
  { id: 'Biriyani Point', title: 'Biriyani Point', route: '/shop/biriyani-point', open: true, image: asset('biriyani.png') },
  { id: 'Bakery', title: 'Bakery', route: '/shop/bakery', open: true, image: asset('bakery.png') },
  { id: 'Tea Time', title: 'Tea Time', route: '/shop/tea-time', open: true, image: asset('teatime.png') },
]


