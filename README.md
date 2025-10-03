# 🍽️ Smart Canteen - Modern Food Ordering System

A professional React-based food ordering application for canteens with user authentication, combo offers, and a clean modern interface.

![Smart Canteen](https://img.shields.io/badge/React-19.1.1-blue) ![Status](https://img.shields.io/badge/Status-Production%20Ready-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🔐 **Authentication System**
- Professional login page with User/Admin toggle
- Animated sliding toggle with smooth transitions
- LocalStorage-based session management
- Protected routes and automatic redirects

### 🍕 **Multi-Shop Food Ordering**
- **Juice Corner** - Fresh fruit juices and healthy drinks
- **Biriyani Point** - Vegetarian and non-vegetarian biriyani varieties
- **Tiffen Center** - South Indian breakfast and traditional foods
- **Tea Time** - Hot beverages and coffee varieties
- **Bakery** - Snacks, drinks, and desserts with category filtering

### 🎉 **Combo Offers System**
- Attractive combo deals from multiple shops
- Significant savings on combo purchases
- Popular offers highlighting
- Cross-shop meal combinations

### 👤 **User Management**
- Editable user profiles with persistent data
- Favorites system with star-based selection
- Shopping cart with real-time updates
- Order history and user preferences

### 🎨 **Professional Design**
- Modern orange and white color scheme
- Responsive design for all devices
- Smooth animations and hover effects
- Professional card-based layouts

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smart-canteen.git
   cd smart-canteen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
smart-canteen/
├── public/
│   ├── assets/           # Shop images and icons
│   └── index.html
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── ItemCard.jsx  # Food item cards
│   │   └── ...
│   ├── context/         # React context providers
│   │   ├── AuthContext.js      # Authentication state
│   │   ├── CartContext.jsx     # Shopping cart state
│   │   └── FavoritesContext.js # Favorites management
│   ├── data/            # Static data files
│   │   ├── comboOffers.js     # Combo deals data
│   │   ├── juiceItems.js      # Juice menu items
│   │   └── ...
│   ├── pages/           # Main page components
│   │   ├── Login.jsx     # Authentication page
│   │   ├── Home.jsx      # Shop selection homepage
│   │   ├── Offers.jsx    # Combo offers page
│   │   └── ...
│   └── utils/           # Utility functions
│       └── auth.js      # Authentication helpers
```

## 🔧 Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm test`** - Launches the test runner
- **`npm run build`** - Builds the app for production
- **`npm run eject`** - Ejects from Create React App

## 🎯 Usage

### For Users
1. **Login** with any username (User option)
2. **Browse shops** from the homepage
3. **Add items** to cart or favorites
4. **View combo offers** for savings
5. **Manage profile** and preferences

### For Developers
1. **Modify shop data** in `/src/data/` files
2. **Add new shops** by creating new data files and pages
3. **Customize styling** in component CSS files
4. **Extend authentication** by modifying AuthContext

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.3
- **State Management**: React Context API
- **Styling**: Pure CSS with modern features
- **Storage**: LocalStorage for persistence
- **Build Tool**: Create React App

## 🎨 Design Features

- **Responsive Layout** - Works on mobile, tablet, and desktop
- **Modern Animations** - Smooth transitions and hover effects
- **Professional Theme** - Orange (#ff6b35) and white color scheme
- **Accessibility** - Clean, readable interface design

## 📱 Mobile Responsive

The application is fully responsive and provides an excellent user experience across:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

## 🔒 Security Features

- Client-side authentication with session management
- Protected routes for authenticated users only
- Input validation and error handling
- Secure data storage practices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **GitHub Pages**: Static hosting for React apps
- **Netlify**: Automatic deployments with Git integration
- **Vercel**: Zero-configuration deployment
- **Firebase Hosting**: Google's hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manikumar**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: manikumar@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the boilerplate
- Unsplash for beautiful placeholder images
- All contributors who helped make this project better

---

⭐ **Star this repository if you found it helpful!**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
