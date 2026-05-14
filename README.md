# MediaDrop - Social Media Video Downloader

A modern, production-ready web application for downloading videos from social media platforms like Instagram, TikTok, YouTube, Facebook, and Twitter/X.

## 🚀 Features

### Core Features
- ✅ **HD Downloads** - Download videos in the highest available quality
- ✅ **No Watermark** - Clean videos without any watermarks
- ✅ **Fast Processing** - Download videos in seconds
- ✅ **Mobile Friendly** - Fully responsive design
- ✅ **Secure & Private** - End-to-end encryption, no data stored
- ✅ **Unlimited Downloads** - Download as many videos as you want

### Supported Platforms
- ✅ **Instagram Reels & Posts** (Available)
- 🔄 **TikTok** (Coming Soon)
- 🔄 **YouTube Shorts** (Coming Soon)
- 🔄 **Facebook Videos** (Coming Soon)
- 🔄 **Twitter/X Videos** (Coming Soon)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

### Backend
- **Node.js/Express** - Server framework
- **yt-dlp** - Video downloading engine
- **CORS** - Cross-origin requests
- **ESM** - Modern JavaScript modules

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** (for yt-dlp) - [Download here](https://python.org/)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

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
