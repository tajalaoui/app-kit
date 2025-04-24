# 🚀 App-Kit

A modern full-stack development boilerplate featuring Nuxt.js, Nest.js, and Docker.

## 📋 Overview

App-Kit is a carefully configured starter template that brings together:

- **Frontend**: Nuxt.js 3 with PrimeVue, TailwindCSS, and other useful modules
- **Backend**: Nest.js with Express
- **Database**: MongoDB
- **Containerization**: Docker & Docker Compose for easy development and deployment

## ✨ Features

### Frontend (Nuxt.js)
- 📱 Responsive design with TailwindCSS
- 🎨 Beautiful UI components with PrimeVue (Aura theme)
- 🖼️ Optimized image handling with @nuxt/image
- 🔒 Security enhancements with nuxt-security
- 🚀 Performance optimizations with delayed hydration
- 📊 Custom font support and icons

### Backend (Nest.js)
- 🏗️ Modular architecture
- 🔄 Hot-reload development environment
- 🧪 Testing infrastructure with Jest
- 📝 Code quality tools (ESLint, Prettier)

### Development Environment
- 🐳 Docker containerization
- 🔄 Live code reloading
- 📦 Volume mapping for persistent development
- 🗄️ MongoDB database

## 🔧 Prerequisites

- Docker and Docker Compose
- Node.js (for local development outside Docker)
- Git

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/app-kit.git
cd app-kit
```

### Starting the Development Environment

The entire stack can be started with a single command:

```bash
docker-compose up
```

This will:
- Build and start the frontend container (accessible at http://localhost:3000)
- Build and start the backend container (accessible at http://localhost:4000)
- Start a MongoDB instance (accessible at localhost:27018)

### Development Workflow

The development setup includes:
- 🔄 Live reloading for both frontend and backend
- 🔗 Volume mapping for immediate code changes
- 🛠️ Preserved node_modules in containers

## 📁 Project Structure

```
app-kit/
├── frontend/                # Nuxt.js application
│   ├── assets/              # Static assets
│   ├── components/          # Vue components
│   ├── pages/               # Vue pages
│   ├── public/              # Public files
│   ├── Dockerfile           # Frontend container configuration
│   ├── nuxt.config.ts       # Nuxt configuration
│   └── package.json         # Frontend dependencies
│
├── backend/                 # Nest.js application
│   ├── src/                 # Source code
│   ├── test/                # Test files
│   ├── Dockerfile           # Backend container configuration
│   └── package.json         # Backend dependencies
│
└── docker-compose.yml       # Docker Compose configuration
```

## ⚙️ Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**frontend/.env**
```
# Public API configuration
NUXT_PUBLIC_API_URL=http://localhost:3000

# Environment
NUXT_ENV_MODE=development
```

**backend/.env**
```
# Database Configuration
MONGO_URI=mongodb://mongodb:27017/app-kit

# Authentication
JWT_SECRET=your_secret_key

# Environment
NODE_ENV=development
```

### Database

The MongoDB instance is accessible:
- From containers: `mongodb://mongodb:27017/autera`
- From host: `mongodb://localhost:27018/autera`

## 🛠️ Development Commands

### Frontend (Nuxt.js)

```bash
# Inside frontend directory or container
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run lint         # Run linting
npm run lint:fix     # Fix linting issues
```

### Backend (Nest.js)

```bash
# Inside backend directory or container
npm run start        # Start production server
npm run start:dev    # Start development server
npm run test         # Run tests
npm run lint         # Run linting
```