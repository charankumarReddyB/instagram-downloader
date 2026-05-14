# 📱 Instagram Reel Downloader

A sleek, modern web application to download Instagram Reels in HD quality without watermarks. Built with cutting-edge technologies for the best user experience.

![Instagram Downloader](https://img.shields.io/badge/Instagram-Reels-blue?style=for-the-badge&logo=instagram)
![HD Quality](https://img.shields.io/badge/Quality-HD-green?style=for-the-badge)
![No Watermark](https://img.shields.io/badge/Watermark-No-red?style=for-the-badge)

## ✨ Features

### 🚀 Core Features
- 🎬 **HD Downloads** - Get videos in the highest available quality
- 🚫 **No Watermarks** - Clean, watermark-free downloads
- ⚡ **Lightning Fast** - Download videos in seconds
- 📱 **Mobile Friendly** - Works perfectly on all devices
- 🔒 **Secure & Private** - Your data stays private
- ♾️ **Unlimited Downloads** - No restrictions on usage

### 🎯 Supported Platforms
- ✅ **Instagram Reels** - Full support
- ✅ **Instagram Posts** - Video posts supported
- 🔄 **TikTok** - Coming soon
- 🔄 **YouTube Shorts** - Coming soon
- 🔄 **Facebook Videos** - Coming soon

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** - Modern UI framework
- ⚡ **Vite** - Ultra-fast build tool
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Beautiful, responsive styling
- 🎭 **Framer Motion** - Smooth animations
- 🔗 **Axios** - Reliable HTTP requests

### Backend
- 🟢 **Node.js** - Runtime environment
- 🚀 **Express.js** - Web framework
- 📥 **yt-dlp** - Video downloading engine
- 🔄 **CORS** - Cross-origin support

## 🚀 Quick Start

### Prerequisites
- 📦 **Node.js** (v16+) - [Download](https://nodejs.org/)
- 🐍 **Python** (for yt-dlp) - [Download](https://python.org/)
- 📋 **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/charankumarReddyB/instagram-downloader.git
   cd instagram-downloader
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install

   # Backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Install yt-dlp**
   ```bash
   pip install yt-dlp
   ```

4. **Start the application**
   ```bash
   # Terminal 1: Start frontend
   npm run dev

   # Terminal 2: Start backend
   cd backend
   npm run start
   ```

5. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

## 📖 How to Use

1. 🌐 **Open the app** in your browser
2. 📋 **Paste URL** - Copy any Instagram Reel URL
3. ⬇️ **Click Download** - Get your video instantly
4. 💾 **Save file** - Download completes in seconds

### Supported URL Formats
```
✅ https://www.instagram.com/reel/ABC123/
✅ https://www.instagram.com/p/ABC123/
✅ https://instagram.com/reel/ABC123/
```

## 🎨 Screenshots

### Desktop View
*Beautiful, modern interface with glassmorphism effects*

### Mobile View
*Fully responsive design that works on all devices*

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript checks
npm run type-check
```

### Project Structure
```
instagram-downloader/
├── 📁 src/                 # React frontend
│   ├── 📁 components/      # Reusable UI components
│   ├── 📁 pages/          # Page components
│   ├── 📁 services/       # API services
│   └── 📁 utils/          # Helper functions
├── 📁 backend/            # Node.js backend
│   ├── 📁 controllers/    # Route handlers
│   ├── 📁 services/       # Business logic
│   └── 📁 utils/          # Backend utilities
└── 📁 public/             # Static assets
```

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

### Backend (Railway/Render)
```bash
# Backend is ready for deployment
# Just connect your GitHub repo
```

## ⚠️ Important Notes

### Instagram Limitations
Most Instagram content requires authentication. If you encounter issues:
- Video might be private
- Account restrictions apply
- Instagram API limitations

### Security
- ✅ No user data stored
- ✅ Files processed server-side only
- ✅ Secure HTTPS connections
- ✅ No tracking or analytics

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **yt-dlp** - The amazing video downloader
- **Tailwind CSS** - Beautiful styling framework
- **React Community** - Amazing UI library

---

**Made with ❤️ for content creators and social media enthusiasts**

*Star ⭐ this repo if you found it helpful!*

```bash
git clone https://github.com/yourusername/mediadrop.git
cd mediadrop
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Install yt-dlp

```bash
# Install yt-dlp (required for video downloading)
pip install yt-dlp
```

### 4. Start the Application

```bash
# Start frontend (development mode)
npm run dev

# In another terminal, start backend
cd backend
npm run start
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5001

## 📁 Project Structure

```
mediadrop/
├── src/                    # Frontend React application
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles
├── backend/               # Backend Node.js server
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── services/         # Business logic services
│   ├── utils/            # Backend utilities
│   └── downloads/        # Downloaded files storage
├── public/               # Static assets
└── dist/                 # Built frontend (after npm run build)
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5001
NODE_ENV=development
```

### Build for Production

```bash
# Build frontend
npm run build

# Start production server
npm run preview
```

## 📖 Usage

1. Open the application in your browser
2. Paste a supported video URL in the input field
3. Click "Download" to process the video
4. Wait for processing to complete
5. Click "Download Video" to save the file

### Supported URL Formats

- **Instagram**: `https://www.instagram.com/reel/...` or `https://www.instagram.com/p/...`
- **TikTok**: `https://www.tiktok.com/@user/video/...` or `https://vm.tiktok.com/...`
- **YouTube**: `https://www.youtube.com/shorts/...`
- **Facebook**: `https://www.facebook.com/user/videos/...`
- **Twitter/X**: `https://twitter.com/user/status/...` or `https://x.com/user/status/...`

## 🔒 Important Notes

### Instagram Downloads
Most Instagram content requires authentication to download. If you encounter authentication errors:
- The video may be private
- Instagram may have changed their API
- You may need to use browser cookies (advanced setup)

### Security
- Videos are downloaded server-side and served temporarily
- No user data is stored permanently
- All downloads are processed in memory when possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - The backbone of video downloading
- [Tailwind CSS](https://tailwindcss.com/) - For the beautiful UI
- [Vite](https://vitejs.dev/) - For the lightning-fast development experience

## 📁 Project Structure

```
mediadrop/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Skeleton.tsx
│   │   ├── AnimatedBlobs.tsx
│   │   ├── Toast.tsx
│   │   └── index.ts
│   ├── pages/              # Page components
│   │   ├── Hero.tsx
│   │   ├── ReelPreview.tsx
│   │   ├── Features.tsx
│   │   ├── SupportedPlatforms.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   └── index.ts
│   ├── services/           # API and mock services
│   │   ├── apiService.ts
│   │   └── mockApi.ts
│   ├── utils/              # Utility functions
│   │   └── validation.ts
│   ├── hooks/              # Custom React hooks (ready to extend)
│   ├── layouts/            # Layout components
│   ├── styles/             # Additional styles
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── backend/
│   ├── routes/             # API routes
│   │   └── download.js
│   ├── controllers/        # Route controllers
│   │   └── downloadController.js
│   ├── services/           # Business logic
│   │   └── downloadService.js
│   ├── utils/              # Backend utilities
│   │   ├── validation.js
│   │   └── helpers.js
│   ├── downloads/          # Downloaded files storage
│   └── server.js           # Main server file
├── public/                 # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mediadrop.git
cd mediadrop
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

1. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

2. **Backend server (optional)**
```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Type checking
npm run type-check   # Run TypeScript type checking

# Linting
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For backend, create `.env` in the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
```

See `.env.example` for all available options.

## 🎨 UI/UX Features

### Design Elements
- **Dark SaaS Theme** - Modern dark interface
- **Glassmorphism** - Frosted glass card effects
- **Gradient Themes** - Purple to cyan gradients
- **Smooth Animations** - Framer Motion transitions
- **Responsive Layout** - Mobile-first design
- **Accessibility** - Keyboard navigation support

### Components
- Reusable Button component with multiple variants
- Input component with validation feedback
- Card component with hover effects
- Skeleton loaders for content
- Toast notifications for user feedback
- Animated blobs for background effects

## 🔌 API Integration

### Frontend API Service

The frontend uses `src/services/apiService.ts` for all API calls:

```typescript
import apiService from './services/apiService';

// Download a video
const response = await apiService.downloadVideo(url);

// Get video info
const info = await apiService.getVideoInfo(url);

// Get supported platforms
const platforms = await apiService.getSupportedPlatforms();
```

### Backend API Endpoints

#### Download Video
```
POST /api/download
Content-Type: application/json

{
  "url": "https://instagram.com/reels/..."
}

Response:
{
  "success": true,
  "data": {
    "id": "video-id",
    "title": "Video Title",
    "duration": 15,
    "thumbnail": "url",
    "platform": "instagram",
    "quality": "1080p",
    "size": 25482240
  }
}
```

#### Get Video Info
```
POST /api/video-info
Content-Type: application/json

{
  "url": "https://instagram.com/reels/..."
}
```

#### Get Platforms
```
GET /api/platforms

Response:
{
  "success": true,
  "platforms": [...]
}
```

## 🔐 Security Features

- ✅ URL validation on frontend and backend
- ✅ CORS protection
- ✅ File path traversal prevention
- ✅ Secure file deletion
- ✅ Environment variable protection
- ✅ Request validation middleware

## 🚀 Future Enhancements

### Phase 2
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Download history
- [ ] Video quality selection

### Phase 3
- [ ] TikTok support
- [ ] YouTube Shorts support
- [ ] Batch downloads
- [ ] Advanced filtering

### Phase 4
- [ ] WebSocket support for real-time updates
- [ ] Admin dashboard
- [ ] Analytics
- [ ] Premium features

## 📚 Integration Guide

### Adding yt-dlp Integration

1. **Install yt-dlp**
```bash
pip install yt-dlp
```

2. **Update download service** in `backend/services/downloadService.js`:
```javascript
const { exec } = require('child_process');

exports.downloadVideo = async (url, platform) => {
  const outputPath = path.join(__dirname, '../downloads', `${videoId}.mp4`);
  
  return new Promise((resolve, reject) => {
    exec(`yt-dlp -f "best[ext=mp4]" -o "${outputPath}" "${url}"`, 
      (error, stdout, stderr) => {
        if (error) reject(error);
        else resolve({ success: true, data: {...} });
      }
    );
  });
};
```

### Adding Database Support

1. **Install Mongoose or Sequelize**
2. **Create models** in `backend/models/`
3. **Update services** to use database
4. **Add migrations** for schema management

## 🐛 Troubleshooting

### Development Issues

**Port already in use**
```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3000
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
rm package-lock.json
npm install
```

**TypeScript errors**
```bash
# Check for type errors
npm run type-check

# Generate types
tsc --noEmit
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@mediadrop.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Vite for the amazing build tool
- Tailwind CSS for the utility-first styling
- Framer Motion for beautiful animations
- The open-source community for inspiration

---

**Made with ❤️ for content creators**

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
